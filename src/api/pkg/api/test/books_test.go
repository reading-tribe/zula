package api_test

import (
	"net/http"
	"net/http/httptest"
	"testing"

	zulaAPI "github.com/reading-tribe/zula/src/api/pkg/api"
	"github.com/stretchr/testify/assert"
)

func TestGetBook(t *testing.T) {
	// Setup
	zulaAPI.SeedDB()
	server := zulaAPI.NewServer(nil)
	defer server.MongoContextCancel()

	req := httptest.NewRequest(http.MethodGet, "/", nil)
	rec := httptest.NewRecorder()

	c := server.EchoServer.NewContext(req, rec)
	c.SetPath(server.Constants.BooksAPIEndpoint + "/:id")
	c.SetParamNames("id")
	c.SetParamValues(zulaAPI.ABeautifulDayID)

	if assert.NoError(t, server.GetBook(c)) {
		assert.Equal(t, http.StatusOK, rec.Code)
	}
}

func TestListBooks(t *testing.T) {
	// Setup
	zulaAPI.SeedDB()
	server := zulaAPI.NewServer(nil)
	defer server.MongoContextCancel()

	req := httptest.NewRequest(http.MethodGet, "/", nil)
	rec := httptest.NewRecorder()

	c := server.EchoServer.NewContext(req, rec)
	c.SetPath(server.Constants.BooksAPIEndpoint)

	if assert.NoError(t, server.ListBooks(c)) {
		assert.Equal(t, http.StatusOK, rec.Code)
	}
}
