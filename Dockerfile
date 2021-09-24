FROM golang:1.16-alpine

RUN mkdir /app

WORKDIR /app

COPY go.mod ./
COPY go.sum ./

RUN go mod download

ADD . /app

EXPOSE 1323

RUN go build -o zula cmd/api/main.go

CMD [ "./zula" ]