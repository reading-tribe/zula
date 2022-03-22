package db

import (
	"fmt"
	"os"

	"github.com/reading-tribe/zula/src/api/pkg/env"
	"github.com/reading-tribe/zula/src/api/pkg/models"
)

func DSNFromEnv() (models.DSN, error) {
	dbConnectionType := os.Getenv(env.DATABASE_CONNECTION_TYPE)

	switch dbConnectionType {
	case env.DATABASE_CONNECTION_TYPE_LOCAL:
		return "mongodb://localhost:27017", nil
	default:
		return "", fmt.Errorf("unsupported connection type %s", dbConnectionType)
	}
}
