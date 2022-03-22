package models

import (
	"fmt"

	"github.com/segmentio/ksuid"
)

type SessionID string

func (s *SessionID) String() string {
	return string(*s)
}

func NewSessionID() SessionID {
	return SessionID(fmt.Sprintf("session_%s", ksuid.New().String()))
}
