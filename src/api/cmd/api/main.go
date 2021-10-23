package main

import (
	zulaAPI "github.com/reading-tribe/zula/src/api/pkg/api"
)

func main() {
	server := zulaAPI.NewServer(nil)
	server.EchoServer.Logger.Info(server.EchoServer.Start(":1323"))
	defer server.MongoContextCancel()
}
