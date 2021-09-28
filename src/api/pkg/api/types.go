package api

import (
	"fmt"
	"github.com/labstack/echo/v4"
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
	EchoServer   *echo.Echo
	UsersList    *UsersList
	AccountsList *AccountsList
	BooksList    *BooksList
	Constants    Constants
}

type User struct {
	ID          string `json:"id"`
	Email       string `json:"email"`
	DisplayName string `json:"displayName"`
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
	ID          string `json:"id"`
	DisplayName string `json:"displayName"`
}

type Account struct {
	ID          string        `json:"id"`
	UserID      string        `json:"userId"`
	SubAccounts []*SubAccount `json:"subAccounts"`
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
	ID    string `json:"id"`
	URI   string `json:"uri"`
	Order int    `json:"order"`
}

type BookTranslation struct {
	ID      string `json:"id"`
	Locale  string `json:"locale"`
	Title   string `json:"title"`
	Content []*BookImageLink
}

type Book struct {
	ID           string `json:"id"`
	Translations []*BookTranslation
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
