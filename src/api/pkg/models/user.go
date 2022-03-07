package models

type User struct {
	ID    UserID `json:"id" bson:"id"`
	Email Email  `json:"email" bson:"email"`
}
