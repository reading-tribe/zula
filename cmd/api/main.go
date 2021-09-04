package main

import (
	"github.com/reading-tribe/zula/pkg/api"
)

func main() {
	usersList := api.GetStaticUsersList()
	server := api.NewServer(usersList, nil)
	server.EchoServer.Logger.Info(server.EchoServer.Start(":1323"))
}