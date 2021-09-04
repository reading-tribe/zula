package api

var DefaultUserId = "c5177e5e-1f54-48f6-aba8-9a816b1d7599"

func GetStaticUsersList() *UsersList {
	return &UsersList{
		Items: []*User{
			{DefaultUserId},
		},
	}
}