package models

type Session struct {
	User              UserID `json:"user" bson:"user"`
	CreationTimestamp int64  `json:"creationTimestamp" bson:"creationTimestamp"`
	Token             string `json:"token" bson:"token"`
}
