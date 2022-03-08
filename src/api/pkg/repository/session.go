package repository

import (
	"github.com/reading-tribe/zula/pkg/db"
	"github.com/reading-tribe/zula/pkg/models"
	"go.mongodb.org/mongo-driver/mongo"
)

const (
	SessionsCollection = "sessions"
)

type SessionOpts func(*models.Session)

type Session interface {
	GetByID(id models.SessionID) (*models.Session, error)
	GetByUser(id models.UserID) (*models.Session, error)
	Create(opts SessionOpts) (*models.Session, error)
}

type sessionRepository struct {
	DB         *mongo.Client
	Collection *mongo.Collection
}

func NewSessionRepository(client *mongo.Client) Session {
	collection := client.Database(db.DB).Collection(SessionsCollection)
	return &sessionRepository{
		DB:         client,
		Collection: collection,
	}
}

func (s sessionRepository) GetByID(id models.SessionID) (*models.Session, error) {
	return nil, nil
}

func (s sessionRepository) GetByUser(id models.UserID) (*models.Session, error) {
	return nil, nil
}

func (s sessionRepository) Create(opts SessionOpts) (*models.Session, error) {
	return nil, nil
}
