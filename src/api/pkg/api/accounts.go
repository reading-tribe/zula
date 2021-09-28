package api

import (
	"fmt"
	"github.com/labstack/echo/v4"
	"net/http"
)

func (s *Server) GetAccount(c echo.Context) error {
	id := c.Param("id")
	if len(id) == 0 {
		c.Logger().Info(id)
		return fmt.Errorf("unable to get ID from query params")
	}

	u, err := s.AccountsList.GetAccountById(id)
	if err != nil {
		return fmt.Errorf("unable to get account with ID")
	}

	return c.JSON(http.StatusOK, u)
}

func (s *Server) ListAccounts(c echo.Context) error {
	return c.JSON(http.StatusOK, s.AccountsList)
}
