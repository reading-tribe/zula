package api_test

import (
	"net/http"
	"net/http/httptest"
	"testing"

	zulaAPI "github.com/reading-tribe/zula/src/api/pkg/api"
	"github.com/stretchr/testify/assert"
)

func TestGetAccount(t *testing.T) {
	// Setup
	zulaAPI.SeedDB()
	server := zulaAPI.NewServer(nil)
	defer server.MongoContextCancel()

	req := httptest.NewRequest(http.MethodGet, "/", nil)
	rec := httptest.NewRecorder()

	c := server.EchoServer.NewContext(req, rec)
	c.SetPath(server.Constants.AccountsAPIEndpoint + "/:id")
	c.SetParamNames("id")
	c.SetParamValues(zulaAPI.DefaultAccountId)

	if assert.NoError(t, server.GetAccount(c)) {
		assert.Equal(t, http.StatusOK, rec.Code)
	}
}

func TestListAccounts(t *testing.T) {
	// Setup
	zulaAPI.SeedDB()
	server := zulaAPI.NewServer(nil)
	defer server.MongoContextCancel()

	req := httptest.NewRequest(http.MethodGet, "/", nil)
	rec := httptest.NewRecorder()

	c := server.EchoServer.NewContext(req, rec)
	c.SetPath(server.Constants.AccountsAPIEndpoint)

	if assert.NoError(t, server.ListAccounts(c)) {
		assert.Equal(t, http.StatusOK, rec.Code)
	}
}
