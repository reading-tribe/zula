package api

import (
	"fmt"
	"net/http"

	"github.com/labstack/echo/v4"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func (s *Server) GetUser(c echo.Context) error {
	collection := s.MongoClient.Database("zula").Collection("users")

	id := c.Param("id")
	if len(id) == 0 {
		c.Logger().Info(id)
		return fmt.Errorf("unable to get ID from query params")
	}

	filter := bson.M{
		"id": id,
	}

	var result User
	err := collection.FindOne(*s.MongoContext, filter, &options.FindOneOptions{}).Decode(&result)
	if err != nil {
		return err
	}

	return c.JSON(http.StatusOK, result)
}

func (s *Server) ListUsers(c echo.Context) error {
	collection := s.MongoClient.Database("zula").Collection("users")

	filter := bson.M{}

	cursor, err := collection.Find(*s.MongoContext, filter, &options.FindOptions{})
	if err != nil {
		return err
	}

	var result UsersList
	if err = cursor.All(*s.MongoContext, &result.Items); err != nil {
		return err
	}

	return c.JSON(http.StatusOK, result)
}
