package repository

import (
	"github.com/reading-tribe/zula/pkg/db"
	"github.com/reading-tribe/zula/pkg/models"
	"go.mongodb.org/mongo-driver/mongo"
)

const (
	UsersCollection = "users"
)

type User interface {
	GetByID(id models.UserID) (*models.User, error)
	GetByEmail(email models.Email) (*models.User, error)
	List() ([]*models.User, error)
	Delete(id models.UserID) error
	Update(id models.UserID) (*models.User, error)
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

func (u userRepository) GetByID(id models.UserID) (*models.User, error) {
	return nil, nil
}

func (u userRepository) GetByEmail(email models.Email) (*models.User, error) {
	return nil, nil
}

func (u userRepository) List() ([]*models.User, error) {
	return nil, nil
}

func (u userRepository) Delete(id models.UserID) error {
	return nil
}

func (u userRepository) Update(id models.UserID) (*models.User, error) {
	return nil, nil
}
