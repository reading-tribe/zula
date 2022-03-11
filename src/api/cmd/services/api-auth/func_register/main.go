// @nuclio.configure
//
// function.yaml:
//   apiVersion: "nuclio.io/v1beta1"
//   kind: "NuclioFunction"
//   spec:
//     runtime: "golang"
//     triggers:
//       http:
//         maxWorkers: 8
//         kind: http
//         attributes:
//           ingresses:
//             first:
//               paths:
//               - /auth/register

package main

import (
	"context"
	"encoding/json"
	"fmt"

	"github.com/nuclio/nuclio-sdk-go"
	"github.com/reading-tribe/zula/src/api/pkg/db"
	"github.com/reading-tribe/zula/src/api/pkg/models"
	"github.com/reading-tribe/zula/src/api/pkg/nucliox"
	"github.com/reading-tribe/zula/src/api/pkg/repository"
)

type funcRegisterEvent struct {
	Email string `json:"email"`
}

func Handler(ctx *nuclio.Context, event nuclio.Event) (interface{}, error) {
	logger := nucliox.LoggerFromContext(ctx)
	fnCtx, cancel := context.WithCancel(context.Background())
	defer cancel()

	logger.Info("API-Auth: func_register execution started")

	logger.Debug("Parsing event")
	var evt funcRegisterEvent
	parsingErr := json.Unmarshal(event.GetBody(), &evt)
	if parsingErr != nil {
		return nil, parsingErr
	}

	logger.Debug("Validation")
	email := models.Email(evt.Email)
	if emailValidationErr := email.Validate(); emailValidationErr != nil {
		return nil, emailValidationErr
	}

	logger.Debug("Inferring DSN from environment")
	dsn, getDSNErr := db.DSNFromEnv()
	if getDSNErr != nil {
		return nil, getDSNErr
	}

	logger.Debug("Validating DSN")
	if dsnValidationErr := dsn.Validate(); dsnValidationErr != nil {
		return nil, dsnValidationErr
	}

	logger.Debug("Establishing database connection")
	client, getClientErr := db.NewDatabaseConnection(fnCtx, dsn)
	if getClientErr != nil {
		return nil, getClientErr
	}

	logger.Debug("Instantiating user repository")
	userRepo := repository.NewUserRepository(client)

	logger.Debug("Checking if user with that email already exists")
	userExists, checkUserExistsErr := userRepo.CheckExistence(fnCtx, email)
	if checkUserExistsErr != nil {
		return nil, checkUserExistsErr
	}
	if userExists {
		return nil, fmt.Errorf("user already exists")
	}

	logger.Debug("Creating new user")
	newUser, newUserErr := userRepo.Create(fnCtx, func(newUser *models.User) {
		newUser.Email = email
	})
	if newUserErr != nil {
		return nil, newUserErr
	}

	logger.Debug("Preparing response")
	resp, toBytesErr := newUser.ToBytes()
	if toBytesErr != nil {
		return nil, toBytesErr
	}

	return resp, nil
}
