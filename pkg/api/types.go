package api

import (
	"fmt"
	"github.com/labstack/echo/v4"
)

type Constants struct {
	APIBaseEndpoint  string
	APIVersion       string
	UsersAPIEndpoint string
	FrontendEndpoint string
	StaticFileRoot   string
	LogStringFormat  string
}

type Server struct {
	EchoServer *echo.Echo
	UsersList  *UsersList
	Constants  Constants
}

type User struct {
	Id string `json:"id"`
}

type UsersList struct {
	Items []*User
}

func (uL *UsersList) GetUserById(id string) (*User, error) {
	for _, u := range uL.Items {
		if u.Id == id {
			return u, nil
		}
	}
	return nil, fmt.Errorf("no User found")
}
