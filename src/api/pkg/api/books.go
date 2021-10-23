package api

import (
	"fmt"
	"net/http"

	"github.com/labstack/echo/v4"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func (s *Server) GetBook(c echo.Context) error {
	collection := s.MongoClient.Database("zula").Collection("books")

	id := c.Param("id")
	if len(id) == 0 {
		c.Logger().Info(id)
		return fmt.Errorf("unable to get ID from query params")
	}

	filter := bson.M{
		"id": id,
	}

	var result Book
	err := collection.FindOne(*s.MongoContext, filter, &options.FindOneOptions{}).Decode(&result)
	if err != nil {
		return fmt.Errorf("unable to get book with ID")
	}

	return c.JSON(http.StatusOK, result)
}

func (s *Server) ListBooks(c echo.Context) error {
	collection := s.MongoClient.Database("zula").Collection("books")

	filter := bson.M{}

	cursor, err := collection.Find(*s.MongoContext, filter, &options.FindOptions{})
	if err != nil {
		return fmt.Errorf("unable to get books")
	}

	var result BooksList
	if err = cursor.All(*s.MongoContext, &result.Items); err != nil {
		return fmt.Errorf("unable to get books")
	}

	return c.JSON(http.StatusOK, result)
}

func (s *Server) ListBooksInLocale(c echo.Context) error {
	collection := s.MongoClient.Database("zula").Collection("books")

	locale := c.Param("locale")
	if len(locale) == 0 {
		c.Logger().Info(locale)
		return fmt.Errorf("unable to get locale from query params")
	}

	filter := bson.M{
		"translations": bson.M{
			"locale": locale,
		}}

	cursor, err := collection.Find(*s.MongoContext, filter, &options.FindOptions{})
	if err != nil {
		return fmt.Errorf("unable to get books")
	}

	var result BooksList
	if err = cursor.All(*s.MongoContext, &result.Items); err != nil {
		return fmt.Errorf("unable to get books")
	}

	return c.JSON(http.StatusOK, result)
}
