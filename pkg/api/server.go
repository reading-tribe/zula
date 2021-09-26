package api

import (
	"fmt"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func NewServer(usersList *UsersList, constants *Constants) *Server {
	e := echo.New()

	if constants == nil {
		temp := defaultConstants()
		constants = &temp
	}

	s := &Server{
		EchoServer: e,
		UsersList:  usersList,
		Constants:  *constants,
	}

	setupMiddleware(s)
	registerRoutes(s)

	return s
}

func dumpReqAndRes(c echo.Context, reqBody, resBody []byte) {
	fmt.Printf("Request Body: %v", string(reqBody))
	fmt.Printf("Response Body: %v", string(resBody))
}

func setupMiddleware(s *Server) {
	e := s.EchoServer
	c := s.Constants

	e.Use(middleware.LoggerWithConfig(middleware.LoggerConfig{
		Format: c.LogStringFormat,
	}))
	e.Use(middleware.Recover())
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"localhost"},
		AllowHeaders: []string{echo.HeaderOrigin, echo.HeaderContentType, echo.HeaderAccept},
	}))
	// e.Use(middleware.BodyDump(dumpReqAndRes))
	e.Use(middleware.BodyLimit("2M"))
}

func buildAPIRoute(s *Server, endpoint string) string {
	c := s.Constants
	return c.APIBaseEndpoint + c.APIVersion + endpoint
}

func registerRoutes(s *Server) {
	e := s.EchoServer
	c := s.Constants

	e.Static(c.FrontendEndpoint, c.StaticFileRoot)

	e.GET(buildAPIRoute(s, c.UsersAPIEndpoint+"/:id"), s.GetUser)
	e.GET(buildAPIRoute(s, c.UsersAPIEndpoint), s.ListUsers)
}
