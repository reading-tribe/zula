package models

type Session struct {
	ID                SessionID `json:"id" bson:"id"`
	User              UserID    `json:"user" bson:"user"`
	CreationTimestamp int64     `json:"creationTimestamp" bson:"creationTimestamp"`
	Token             string    `json:"token" bson:"token"`
}
