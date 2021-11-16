package api

import (
	"fmt"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func NewServer(
	constants *Constants,
) *Server {
	e := echo.New()

	if constants == nil {
		temp := defaultConstants()
		constants = &temp
	}

	mongoClient, mongoContext, mongoCancelFunc, err := NewClient()
	if err != nil {
		panic(err)
	}

	s := &Server{
		EchoServer:         e,
		Constants:          *constants,
		MongoClient:        mongoClient,
		MongoContext:       mongoContext,
		MongoContextCancel: mongoCancelFunc,
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
		AllowOrigins: []string{"http://localhost", "http://localhost:3000", "http://localhost:8080"},
		AllowHeaders: []string{echo.HeaderOrigin, echo.HeaderContentType, echo.HeaderAccept},
	}))
	e.Use(middleware.BodyDump(dumpReqAndRes))
	e.Use(middleware.BodyLimit("2M"))
}

func buildAPIRoute(s *Server, endpoint string) string {
	c := s.Constants
	return c.APIBaseEndpoint + c.APIVersion + endpoint
}

func registerRoutes(s *Server) {
	e := s.EchoServer
	c := s.Constants

	e.GET(buildAPIRoute(s, c.UsersAPIEndpoint+"/:id"), s.GetUser)
	e.GET(buildAPIRoute(s, c.UsersAPIEndpoint), s.ListUsers)

	e.GET(buildAPIRoute(s, c.AccountsAPIEndpoint+"/:id"), s.GetAccount)
	e.GET(buildAPIRoute(s, c.AccountsAPIEndpoint), s.ListAccounts)

	e.GET(buildAPIRoute(s, c.BooksAPIEndpoint+"/:id"), s.GetBook)
	e.GET(buildAPIRoute(s, c.BooksAPIEndpoint+"/locale/:locale"), s.ListBooksInLocale)
	e.GET(buildAPIRoute(s, c.BooksAPIEndpoint), s.ListBooks)
}
