package api

var DefaultUserId = "c5177e5e-1f54-48f6-aba8-9a816b1d7599"
var DefaultUserEmail = "test@email.com"
var DefaultDisplayName = "Test User"

func GetStaticUsersList() *UsersList {
	return &UsersList{
		Items: []*User{
			{
				ID:          DefaultUserId,
				Email:       DefaultUserEmail,
				DisplayName: DefaultDisplayName,
			},
		},
	}
}

var DefaultAccountId = "2e771804-3900-44eb-89f7-28a8801f381c"
var DefaultSubAccount1Id = "a6084b06-487a-413c-91f2-58bc4057831f"
var DefaultSubAccount1DisplayName = "Test User - Sub Account 1"
var DefaultSubAccount2Id = "bc97b04a-7d56-46ab-b203-188cf74b47b2"
var DefaultSubAccount2DisplayName = "Test User - Sub Account 1"
var DefaultSubAccount3Id = "a49f87fd-9a28-44b0-8953-07c2063dbe0a"
var DefaultSubAccount3DisplayName = "Test User - Sub Account 1"

func GetStaticAccountsList() *AccountsList {
	return &AccountsList{
		Items: []*Account{
			{
				ID:     DefaultAccountId,
				UserID: DefaultUserId,
				SubAccounts: []*SubAccount{
					{
						ID:          DefaultSubAccount1Id,
						DisplayName: DefaultSubAccount1DisplayName,
					},
					{
						ID:          DefaultSubAccount2Id,
						DisplayName: DefaultSubAccount2DisplayName,
					},
					{
						ID:          DefaultSubAccount3Id,
						DisplayName: DefaultSubAccount3DisplayName,
					},
				},
			},
		},
	}
}

const (
	localeFR = "fr"
)

var ABeautifulDayID = "15752fd0-81bf-4acd-a35d-80b95f07cd59"
var ABeautifulDayFrenchID = "ec1e5bcb-5f88-4c8c-85e1-9e0b09f75b7b"
var ABeautifulDayFrenchTitle = "Une belle journée"

func GetStaticBooksList() *BooksList {
	return &BooksList{
		Items: []*Book{
			{
				ID: ABeautifulDayID,
				Translations: []*BookTranslation{
					{
						ID:     ABeautifulDayFrenchID,
						Locale: localeFR,
						Title:  ABeautifulDayFrenchTitle,
						Content: []*BookImageLink{
							{
								ID:    "4fab1c1d-808a-4321-966b-9bdba3b1dd4d",
								URI:   "https://d29v32klp19rv5.cloudfront.net/a-beautiful-day_french_interior_20200602_Seite_05.jpg",
								Order: 0,
							},
							{
								ID:    "f01b8188-235b-46c0-9e45-c1bf5de7c9d2",
								URI:   "https://d29v32klp19rv5.cloudfront.net/a-beautiful-day_french_interior_20200602_Seite_06.jpg",
								Order: 1,
							},
							{
								ID:    "0b2ad266-39a5-4b70-aeee-cac68e3d328f",
								URI:   "https://d29v32klp19rv5.cloudfront.net/a-beautiful-day_french_interior_20200602_Seite_07.jpg",
								Order: 2,
							},
							{
								ID:    "a1274067-2221-47f5-a63d-fca02163497f",
								URI:   "https://d29v32klp19rv5.cloudfront.net/a-beautiful-day_french_interior_20200602_Seite_08.jpg",
								Order: 3,
							},
							{
								ID:    "54d4a951-4964-49b6-b4ca-bb539ce24ce1",
								URI:   "https://d29v32klp19rv5.cloudfront.net/a-beautiful-day_french_interior_20200602_Seite_09.jpg",
								Order: 4,
							},
							{
								ID:    "822bf2e0-8cc4-4e30-a105-6fc0004bb873",
								URI:   "https://d29v32klp19rv5.cloudfront.net/a-beautiful-day_french_interior_20200602_Seite_10.jpg",
								Order: 5,
							},
							{
								ID:    "9812ff6e-9c79-4aba-aebe-51867fdf50ef",
								URI:   "https://d29v32klp19rv5.cloudfront.net/a-beautiful-day_french_interior_20200602_Seite_11.jpg",
								Order: 6,
							},
							{
								ID:    "a21d793e-256b-49d7-92e9-806d8e67ac1c",
								URI:   "https://d29v32klp19rv5.cloudfront.net/a-beautiful-day_french_interior_20200602_Seite_12.jpg",
								Order: 7,
							},
							{
								ID:    "9b414483-a270-4308-938a-a52ba2d322e4",
								URI:   "https://d29v32klp19rv5.cloudfront.net/a-beautiful-day_french_interior_20200602_Seite_13.jpg",
								Order: 8,
							},
							{
								ID:    "b2a58f93-7e68-41e2-bbc8-f85140725a29",
								URI:   "https://d29v32klp19rv5.cloudfront.net/a-beautiful-day_french_interior_20200602_Seite_14.jpg",
								Order: 9,
							},
							{
								ID:    "e0851a56-ed54-4c07-bf78-a07c99f0881c",
								URI:   "https://d29v32klp19rv5.cloudfront.net/a-beautiful-day_french_interior_20200602_Seite_15.jpg",
								Order: 10,
							},
							{
								ID:    "5ca30930-c5c4-44a2-8a32-17ff2ecbbaa6",
								URI:   "https://d29v32klp19rv5.cloudfront.net/a-beautiful-day_french_interior_20200602_Seite_16.jpg",
								Order: 11,
							},
							{
								ID:    "b63966e7-b158-4d2f-b4a7-990ae4d296d3",
								URI:   "https://d29v32klp19rv5.cloudfront.net/a-beautiful-day_french_interior_20200602_Seite_17.jpg",
								Order: 12,
							},
							{
								ID:    "70f4c69e-278e-40b3-9421-d50b33146f48",
								URI:   "https://d29v32klp19rv5.cloudfront.net/a-beautiful-day_french_interior_20200602_Seite_18.jpg",
								Order: 13,
							},
							{
								ID:    "90488341-ed3b-45bc-9e9a-5b8e02d8e02f",
								URI:   "https://d29v32klp19rv5.cloudfront.net/a-beautiful-day_french_interior_20200602_Seite_19.jpg",
								Order: 14,
							},
							{
								ID:    "1cf08a09-a961-4970-a80b-bbd77ffc97a2",
								URI:   "https://d29v32klp19rv5.cloudfront.net/a-beautiful-day_french_interior_20200602_Seite_20.jpg",
								Order: 15,
							},
							{
								ID:    "b5ce0ea8-93c8-43cd-b62e-dde6f8c00c12",
								URI:   "https://d29v32klp19rv5.cloudfront.net/a-beautiful-day_french_interior_20200602_Seite_21.jpg",
								Order: 16,
							},
							{
								ID:    "26f12029-6922-4a72-83a4-bcc40e5b83da",
								URI:   "https://d29v32klp19rv5.cloudfront.net/a-beautiful-day_french_interior_20200602_Seite_22.jpg",
								Order: 17,
							},
							{
								ID:    "9295a5b8-ef4f-4f2b-94ed-604a06df9084",
								URI:   "https://d29v32klp19rv5.cloudfront.net/a-beautiful-day_french_interior_20200602_Seite_23.jpg",
								Order: 18,
							},
							{
								ID:    "2bfe1174-f5a0-49df-9d3a-c7fe8774952b",
								URI:   "https://d29v32klp19rv5.cloudfront.net/a-beautiful-day_french_interior_20200602_Seite_24.jpg",
								Order: 19,
							},
							{
								ID:    "1408132a-5ba7-4828-b0b7-9d705f87c07b",
								URI:   "https://d29v32klp19rv5.cloudfront.net/a-beautiful-day_french_interior_20200602_Seite_25.jpg",
								Order: 20,
							},
							{
								ID:    "5eb1999d-9148-4622-a937-25af5804c094",
								URI:   "https://d29v32klp19rv5.cloudfront.net/a-beautiful-day_french_interior_20200602_Seite_26.jpg",
								Order: 21,
							},
							{
								ID:    "85aadcea-c2a2-421d-a1b6-9684fc299668",
								URI:   "https://d29v32klp19rv5.cloudfront.net/a-beautiful-day_french_interior_20200602_Seite_27.jpg",
								Order: 22,
							},
							{
								ID:    "63882615-64ea-4dcb-b8be-9c4d031609e4",
								URI:   "https://d29v32klp19rv5.cloudfront.net/a-beautiful-day_french_interior_20200602_Seite_28.jpg",
								Order: 23,
							},
							{
								ID:    "e404b378-0331-474c-90d8-d4d2aa3fae6d",
								URI:   "https://d29v32klp19rv5.cloudfront.net/a-beautiful-day_french_interior_20200602_Seite_29.jpg",
								Order: 24,
							},
						},
					},
				},
			},
		},
	}
}
