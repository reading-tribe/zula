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
	"github.com/nuclio/nuclio-sdk-go"
)

func Handler(context *nuclio.Context, event nuclio.Event) (interface{}, error) {
	return "Handler called", nil
}
