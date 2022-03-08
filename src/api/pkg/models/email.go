package models

import "net/mail"

type Email string

func (e *Email) String() string {
	return string(*e)
}

func (e *Email) Validate() error {
	_, err := mail.ParseAddress(e.String())
	return err
}
