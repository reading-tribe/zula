package api

import (
	"os"
)

func getEnvironment() Environment {
	return Environment{
		MongoConnectionString: os.Getenv("MONGO_CONNECTION_STRING"),
	}
}
