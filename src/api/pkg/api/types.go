package api

import (
	"context"
	"fmt"

	"github.com/labstack/echo/v4"
	"go.mongodb.org/mongo-driver/mongo"
)

type Constants struct {
	APIBaseEndpoint     string
	APIVersion          string
	UsersAPIEndpoint    string
	AccountsAPIEndpoint string
	BooksAPIEndpoint    string
	LogStringFormat     string
}

type Server struct {
	EchoServer         *echo.Echo
	UsersList          *UsersList
	AccountsList       *AccountsList
	BooksList          *BooksList
	Constants          Constants
	MongoClient        *mongo.Client
	MongoContext       *context.Context
	MongoContextCancel context.CancelFunc
}

type User struct {
	ID          string `json:"id" bson:"id"`
	Email       string `json:"email" bson:"email"`
	DisplayName string `json:"displayName" bson:"displayName"`
}

type UsersList struct {
	Items []*User `json:"items"`
}

func (uL *UsersList) GetUserById(id string) (*User, error) {
	for _, u := range uL.Items {
		if u.ID == id {
			return u, nil
		}
	}
	return nil, fmt.Errorf("no User found")
}

type SubAccount struct {
	ID          string `json:"id" bson:"id"`
	DisplayName string `json:"displayName" bson:"displayName"`
}

type Account struct {
	ID          string        `json:"id" bson:"id"`
	UserID      string        `json:"userId" bson:"userId"`
	SubAccounts []*SubAccount `json:"subAccounts" bson:"subAccounts"`
}

type AccountsList struct {
	Items []*Account `json:"items"`
}

func (aL *AccountsList) GetAccountById(id string) (*Account, error) {
	for _, a := range aL.Items {
		if a.ID == id {
			return a, nil
		}
	}
	return nil, fmt.Errorf("no Account found")
}

type BookImageLink struct {
	ID    string `json:"id" bson:"id"`
	URI   string `json:"uri" bson:"uri"`
	Order int    `json:"order" bson:"order"`
}

type BookTranslation struct {
	ID      string           `json:"id" bson:"id"`
	Locale  string           `json:"locale" bson:"locale"`
	Title   string           `json:"title" bson:"title"`
	Content []*BookImageLink `json:"content" bson:"content"`
}

type Book struct {
	ID           string             `json:"id" bson:"id"`
	Translations []*BookTranslation `json:"translations" bson:"translations"`
}

type BooksList struct {
	Items []*Book `json:"items"`
}

func (bL *BooksList) GetBookById(id string) (*Book, error) {
	for _, b := range bL.Items {
		if b.ID == id {
			return b, nil
		}
	}
	return nil, fmt.Errorf("no Book found")
}

func (bL *BooksList) GetBooksWithLocale(locale string) *BooksList {
	var nbl = &BooksList{}

	for _, b := range bL.Items {
		for _, bt := range b.Translations {
			if bt.Locale == locale {
				nbl.Items = append(nbl.Items, b)
				break
			}
		}
	}

	return nbl
}
