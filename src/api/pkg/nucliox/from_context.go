package nucliox

import (
	"github.com/nuclio/logger"
	"github.com/nuclio/nuclio-sdk-go"
)

func LoggerFromContext(ctx *nuclio.Context) logger.Logger {
	return ctx.Logger
}
