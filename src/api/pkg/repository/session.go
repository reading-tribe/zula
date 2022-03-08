package repository

import "github.com/reading-tribe/zula/pkg/models"

type Session interface {
	GetByID(id string)
	GetByUser(id models.UserID) (*models.Session, error)
	Create(id models.UserID) (*models.Session, error)
}
