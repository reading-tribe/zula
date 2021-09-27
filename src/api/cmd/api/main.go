package main

import (
	api2 "github.com/reading-tribe/zula/src/api/pkg/api"
)

func main() {
	usersList := api2.GetStaticUsersList()
	server := api2.NewServer(usersList, nil)
	server.EchoServer.Logger.Info(server.EchoServer.Start(":1323"))
}
