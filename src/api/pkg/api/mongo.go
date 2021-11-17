package api

import (
	"context"
	"fmt"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func connectionStringOrError() (string, error) {
	env := getEnvironment()
	if len(env.MongoConnectionString) == 0 {
		return "", fmt.Errorf("invalid mongo connection string: empty")
	}
	return env.MongoConnectionString, nil
}

func NewClient() (*mongo.Client, *context.Context, context.CancelFunc, error) {
	ctx, cancel := context.WithCancel(context.Background())
	uri, err := connectionStringOrError()
	if err != nil {
		cancel()
		return nil, nil, nil, err
	}
	client, err := mongo.Connect(ctx, options.Client().ApplyURI(uri))
	return client, &ctx, cancel, err
}

func SeedDB() {
	ctx, cancel := context.WithTimeout(context.Background(), 100*time.Second)
	defer cancel()
	uri, err := connectionStringOrError()
	if err != nil {
		cancel()
		panic(err)
	}
	client, err := mongo.Connect(ctx, options.Client().ApplyURI(uri))

	constants := defaultConstants()
	db := client.Database(constants.ZulaDatabase)

	collection := db.Collection(constants.BooksCollection)
	collection.Drop(ctx)
	for _, book := range GetStaticBooksList().Items {
		collection.InsertOne(ctx, book)
	}

	collection = db.Collection(constants.UsersCollection)
	collection.Drop(ctx)
	for _, user := range GetStaticUsersList().Items {
		collection.InsertOne(ctx, user)
	}

	collection = db.Collection(constants.AccountsCollection)
	collection.Drop(ctx)
	for _, account := range GetStaticAccountsList().Items {
		collection.InsertOne(ctx, account)
	}

	defer func() {
		if err = client.Disconnect(ctx); err != nil {
			panic(err)
		}
	}()
}
