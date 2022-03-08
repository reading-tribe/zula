package models

import (
	"fmt"

	verbalexpressions "github.com/VerbalExpressions/GoVerbalExpressions"
)

var (
	dsnValidator = verbalexpressions.New().
		StartOfLine().
		Then("mongodb").
		Then("://").
		AnythingBut(" ").
		EndOfLine()
)

type DSN string

func (d *DSN) String() string {
	return string(*d)
}

func (d *DSN) Validate() error {
	if dsnValidator.Test(d.String()) {
		return nil
	}
	return fmt.Errorf("invalid DSN")
}
