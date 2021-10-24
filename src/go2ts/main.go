package main

import (
	zulaAPI "github.com/reading-tribe/zula/src/api/pkg/api"
	"github.com/tkrajina/typescriptify-golang-structs/typescriptify"
)

func main() {
	converter := typescriptify.New()
	converter.CreateInterface = true
	converter.
		Add(zulaAPI.User{}).
		Add(zulaAPI.UsersList{}).
		Add(zulaAPI.SubAccount{}).
		Add(zulaAPI.Account{}).
		Add(zulaAPI.AccountsList{}).
		Add(zulaAPI.BookImageLink{}).
		Add(zulaAPI.BookTranslation{}).
		Add(zulaAPI.Book{}).
		Add(zulaAPI.BooksList{})
	err := converter.ConvertToFile("models.ts")
	if err != nil {
		panic(err.Error())
	}
}
