package models

import "encoding/json"

type User struct {
	ID    UserID `json:"id" bson:"id"`
	Email Email  `json:"email" bson:"email"`
}

func (u *User) ToBytes() ([]byte, error) {
	return json.Marshal(u)
}

func UserFromBytes(data []byte) (*User, error) {
	var user User
	err := json.Unmarshal(data, &user)
	if err != nil {
		return nil, err
	}
	return &user, nil
}
