package api

func defaultConstants() Constants {
	return Constants{
		APIBaseEndpoint:  "/api",
		APIVersion:       "/v1",
		UsersAPIEndpoint: "/users",
		FrontendEndpoint: "/",
		StaticFileRoot:   "../../pkg/api/static/build",
		LogStringFormat:  "time=${time_rfc3339} host=${host} method=${method} uri=${uri} status=${status}\n",
	}
}
