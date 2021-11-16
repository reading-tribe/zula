package api

import (
	"context"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func NewClient() (*mongo.Client, *context.Context, context.CancelFunc, error) {
	ctx, cancel := context.WithCancel(context.Background())
	client, err := mongo.Connect(ctx, options.Client().ApplyURI("mongodb://mongo:27017"))
	return client, &ctx, cancel, err
}

func SeedDB() {
	ctx, cancel := context.WithTimeout(context.Background(), 100*time.Second)
	defer cancel()
	client, err := mongo.Connect(ctx, options.Client().ApplyURI("mongodb://mongo:27017"))

	collection := client.Database("zula").Collection("books")
	collection.Drop(ctx)
	for _, book := range GetStaticBooksList().Items {
		collection.InsertOne(ctx, book)
	}

	collection = client.Database("zula").Collection("users")
	collection.Drop(ctx)
	for _, user := range GetStaticUsersList().Items {
		collection.InsertOne(ctx, user)
	}

	collection = client.Database("zula").Collection("accounts")
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
