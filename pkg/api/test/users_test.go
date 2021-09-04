package api_test

import (
	"github.com/reading-tribe/zula/pkg/api"
	"github.com/stretchr/testify/assert"
	"net/http"
	"net/http/httptest"
	"testing"
)

func TestGetUser(t *testing.T) {
	// Setup
	usersList := api.GetStaticUsersList()
	server := api.NewServer(usersList, nil)

	req := httptest.NewRequest(http.MethodGet, "/", nil)
	rec := httptest.NewRecorder()

	c := server.EchoServer.NewContext(req, rec)
	c.SetPath(server.Constants.UsersAPIEndpoint + "/:id")
	c.SetParamNames("id")
	c.SetParamValues(api.DefaultUserId)

	if assert.NoError(t, server.GetUser(c)) {
		assert.Equal(t, http.StatusOK, rec.Code)
		assert.Equal(t, "{\"id\":\"c5177e5e-1f54-48f6-aba8-9a816b1d7599\"}\n", rec.Body.String())
	}
}

func TestListUsers(t *testing.T) {
	// Setup
	usersList := api.GetStaticUsersList()
	server := api.NewServer(usersList, nil)

	req := httptest.NewRequest(http.MethodGet, "/", nil)
	rec := httptest.NewRecorder()

	c := server.EchoServer.NewContext(req, rec)
	c.SetPath(server.Constants.UsersAPIEndpoint)

	if assert.NoError(t, server.ListUsers(c)) {
		assert.Equal(t, http.StatusOK, rec.Code)
		assert.Equal(t, "{\"Items\":[{\"id\":\"c5177e5e-1f54-48f6-aba8-9a816b1d7599\"}]}\n", rec.Body.String())
	}
}
