package models

import (
	"fmt"

	"github.com/segmentio/ksuid"
)

type UserID string

func (u *UserID) String() string {
	return string(*u)
}

func NewUserID() UserID {
	return UserID(fmt.Sprintf("user_%s", ksuid.New().String()))
}
