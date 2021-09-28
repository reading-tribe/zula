package api

import (
	"fmt"
	"github.com/labstack/echo/v4"
	"net/http"
)

func (s *Server) GetBook(c echo.Context) error {
	id := c.Param("id")
	if len(id) == 0 {
		c.Logger().Info(id)
		return fmt.Errorf("unable to get ID from query params")
	}

	u, err := s.BooksList.GetBookById(id)
	if err != nil {
		return fmt.Errorf("unable to get book with ID")
	}

	return c.JSON(http.StatusOK, u)
}

func (s *Server) ListBooks(c echo.Context) error {
	return c.JSON(http.StatusOK, s.BooksList)
}

func (s *Server) ListBooksInLocale(c echo.Context) error {
	locale := c.Param("locale")
	if len(locale) == 0 {
		c.Logger().Info(locale)
		return fmt.Errorf("unable to get locale from query params")
	}

	bl := s.BooksList.GetBooksWithLocale(locale)

	return c.JSON(http.StatusOK, bl)
}
