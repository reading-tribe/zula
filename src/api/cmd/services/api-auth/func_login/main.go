package main

import (
	"github.com/nuclio/nuclio-sdk-go"
)

func main() {}

func Handler(context *nuclio.Context, event nuclio.Event) (interface{}, error) {
	return "Handler called", nil
}
