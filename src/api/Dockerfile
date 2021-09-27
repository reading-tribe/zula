FROM golang:1.16-alpine

WORKDIR /app

COPY go.mod ./
COPY go.sum ./

RUN go mod download

COPY cmd /app/cmd/

COPY src/api/pkg/api/*.go /app/pkg/api/

EXPOSE 1323

RUN go build -o zula cmd/api/main.go

CMD [ "./zula" ]