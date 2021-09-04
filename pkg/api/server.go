package api

import (
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func NewServer(usersList *UsersList, constants *Constants) *Server {
	e := echo.New()

	// Middleware
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	if constants == nil {
		temp := defaultConstants()
		constants = &temp
	}

	s := &Server{
		EchoServer: e,
		UsersList: usersList,
		Constants: *constants,
	}

	// Routes
	e.GET(s.Constants.UsersAPIEndpoint + "/:id", s.GetUser)
	e.GET(s.Constants.UsersAPIEndpoint, s.ListUsers)

	return s
}
