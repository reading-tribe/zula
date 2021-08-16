package main

import (
	"fmt"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"net/http"
)

type user struct {
	Id string `json:"id"`
}

type userList struct {
	items []*user
}

func (uL *userList) getUserById(id string) (*user, error) {
	for _, u := range uL.items {
		if u.Id == id {
			return u, nil
		}
	}
	return nil, fmt.Errorf("no user found")
}

func main() {
	users := []*user{
		&user{
			"c5177e5e-1f54-48f6-aba8-9a816b1d7599",
		},
	}

	usersList := userList{
		items: users,
	}

	e := echo.New()

	// Middleware
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	// Routes
	e.GET("/user", func (c echo.Context) error {
		id := c.QueryParam("id")
		if len(id) == 0 {
			c.Logger().Info(id)
			return fmt.Errorf("unable to get Id from query params")
		}

		u, err := usersList.getUserById(id)
		if err != nil {
			return fmt.Errorf("unable to get user with Id")
		}

		return c.JSON(http.StatusOK, u)
	})

	// Start server
	e.Logger.Info(e.Start(":1323"))
}