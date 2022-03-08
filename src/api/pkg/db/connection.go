package db

import (
	"context"

	"github.com/reading-tribe/zula/pkg/models"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func NewDatabaseConnection(ctx context.Context, dsn models.DSN) (*mongo.Client, error) {
	if err := dsn.Validate(); err != nil {
		return nil, err
	}
	return mongo.Connect(ctx, options.Client().ApplyURI(dsn.String()))
}
