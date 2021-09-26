FROM golang:1.16-alpine

RUN apk add --update npm

RUN mkdir /app

WORKDIR /app

COPY pkg/api/static/public/ /app/pkg/api/static/public/
COPY pkg/api/static/src/ /app/pkg/api/static/src/
COPY pkg/api/static/package.json /app/pkg/api/static/package.json
COPY pkg/api/static/package-lock.json /app/pkg/api/static/package-lock.json
COPY pkg/api/static/yarn.lock /app/pkg/api/static/yarn.lock

RUN cd pkg/api/static && npm i && npm run build

COPY go.mod ./
COPY go.sum ./

RUN go mod download

COPY cmd/ /app/cmd/

COPY pkg/api/*.go /app/pkg/api/

EXPOSE 1323

RUN go build -o zula cmd/api/main.go

CMD [ "./zula" ]