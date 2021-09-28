package main

import (
	api2 "github.com/reading-tribe/zula/src/api/pkg/api"
)

func main() {
	usersList := api2.GetStaticUsersList()
	accountsList := api2.GetStaticAccountsList()
	booksList := api2.GetStaticBooksList()
	server := api2.NewServer(usersList, accountsList, booksList, nil)
	server.EchoServer.Logger.Info(server.EchoServer.Start(":1323"))
}
