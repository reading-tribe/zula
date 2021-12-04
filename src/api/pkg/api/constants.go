package api

func defaultConstants() Constants {
	return Constants{
		APIBaseEndpoint:     "/api",
		APIVersion:          "/v1",
		UsersAPIEndpoint:    "/users",
		AccountsAPIEndpoint: "/accounts",
		BooksAPIEndpoint:    "/books",
		LogStringFormat:     "time=${time_rfc3339} host=${host} method=${method} uri=${uri} status=${status} error=${error}\n",
		ZulaDatabase:        "zula",
		BooksCollection:     "books",
		AccountsCollection:  "accounts",
		UsersCollection:     "users",
	}
}
