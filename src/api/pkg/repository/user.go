package repository

import (
	"context"
	"fmt"

	"github.com/reading-tribe/zula/pkg/db"
	"github.com/reading-tribe/zula/pkg/models"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

const (
	UsersCollection = "users"
)

type UserOpts func(*models.User)

type User interface {
	CheckExistence(ctx context.Context, email models.Email) (bool, error)
	GetByID(ctx context.Context, id models.UserID) (*models.User, error)
	GetByEmail(ctx context.Context, email models.Email) (*models.User, error)
	Create(ctx context.Context, opts UserOpts) (*models.User, error)
	List(ctx context.Context) ([]*models.User, error)
	Delete(ctx context.Context, id models.UserID) error
	Update(ctx context.Context, opts UserOpts) (*models.User, error)
}

type userRepository struct {
	DB         *mongo.Client
	Collection *mongo.Collection
}

func NewUserRepository(client *mongo.Client) User {
	collection := client.Database(db.DB).Collection(UsersCollection)
	return &userRepository{
		DB:         client,
		Collection: collection,
	}
}

func (u userRepository) CheckExistence(ctx context.Context, email models.Email) (bool, error) {
	res, err := u.Collection.Find(ctx, bson.M{
		"email": email.String(),
	})
	if err != nil {
		return false, err
	}

	var users []*models.User
	getAllErr := res.All(ctx, users)
	if getAllErr != nil {
		return false, getAllErr
	}

	if len(users) >= 1 {
		return true, nil
	}

	return false, nil
}

func (u userRepository) GetByID(ctx context.Context, id models.UserID) (*models.User, error) {
	res, err := u.Collection.Find(ctx, bson.M{
		"id": id.String(),
	})
	if err != nil {
		return nil, err
	}

	var users []*models.User
	getAllErr := res.All(ctx, users)
	if getAllErr != nil {
		return nil, getAllErr
	}

	if len(users) > 1 {
		return nil, fmt.Errorf("multiple users found for this email")
	}

	if len(users) == 0 {
		return nil, fmt.Errorf("no users found for this email")
	}

	returnUser := users[0]

	return returnUser, nil
}

func (u userRepository) GetByEmail(ctx context.Context, email models.Email) (*models.User, error) {
	res, err := u.Collection.Find(ctx, bson.M{
		"email": email.String(),
	})
	if err != nil {
		return nil, err
	}

	var users []*models.User
	getAllErr := res.All(ctx, users)
	if getAllErr != nil {
		return nil, getAllErr
	}

	if len(users) > 1 {
		return nil, fmt.Errorf("multiple users found for this email")
	}

	if len(users) == 0 {
		return nil, fmt.Errorf("no users found for this email")
	}

	returnUser := users[0]

	return returnUser, nil
}

func (u userRepository) Create(ctx context.Context, opts UserOpts) (*models.User, error) {
	newUser := &models.User{
		ID: models.NewUserID(),
	}
	opts(newUser)

	_, err := u.Collection.InsertOne(ctx, newUser)
	if err != nil {
		return nil, err
	}

	return newUser, nil
}

func (u userRepository) List(ctx context.Context) ([]*models.User, error) {
	return nil, nil
}

func (u userRepository) Delete(ctx context.Context, id models.UserID) error {
	return nil
}

func (u userRepository) Update(ctx context.Context, opts UserOpts) (*models.User, error) {
	return nil, nil
}
