package api

import (
	"fmt"
	"net/http"

	"github.com/labstack/echo/v4"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func (s *Server) GetAccount(c echo.Context) error {
	collection := s.MongoClient.Database("zula").Collection("accounts")

	id := c.Param("id")
	if len(id) == 0 {
		c.Logger().Info(id)
		return fmt.Errorf("unable to get ID from query params")
	}

	filter := bson.M{
		"id": id,
	}

	var result Account
	err := collection.FindOne(*s.MongoContext, filter, &options.FindOneOptions{}).Decode(&result)
	if err != nil {
		return fmt.Errorf("unable to get account with ID")
	}

	return c.JSON(http.StatusOK, result)
}

func (s *Server) ListAccounts(c echo.Context) error {
	collection := s.MongoClient.Database("zula").Collection("accounts")

	filter := bson.M{}

	cursor, err := collection.Find(*s.MongoContext, filter, &options.FindOptions{})
	if err != nil {
		return fmt.Errorf("unable to get accounts")
	}

	var result AccountsList
	if err = cursor.All(*s.MongoContext, &result.Items); err != nil {
		return fmt.Errorf("unable to get accounts")
	}

	return c.JSON(http.StatusOK, result)
}
