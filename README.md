# Zula, The Reading Tribe

Zula is on a mission to amplify diversity and inclusion in children's libraries and bookshelves around the globe!

We are aiming to develop an open-source + premium subscription online library for inclusive childrens books.

Find out more on our [wiki](https://github.com/reading-tribe/zula/wiki)

## Project Setup

- Backend written in Golang
- Frontend written in TypeScript using React

### Folder Structure

```
src/
  api/
    cmd/
      api/ -- contains API Server start command
      seeder/ -- contains seeder start command
    pkg/
      api/ -- contains API Server code
        test/ -- contains Go tests
  go2ts/ -- contains script to generate TS interfaces
  webapp/
    public/  -- contains frontend public assets
    src/  -- contains React frontend code
```

## Running the project locally

The recommended way to run the program locally is to use docker.

    $ docker-compose up --build

You can then visit the homepage at `localhost:8080` or use the API at `localhost:1323`

## Local Development

Running Zula in local development mode requires:
- bash
- go (1.16)
- npm (7.15.1) and node (v16.3.0)

**Note:** Stop any running docker containers for the api, seeder or webapp before starting the system in local development mode

First, start mongo and mongo express

    $ docker-compose up -d --build mongo mongo-express

Next, move into the api folder

    $ cd src/api

If necessary, install go dependencies

    $ go mod download

Run the seeder in development mode (if needed)

    $ ./start-dev -c seeder

Once it has completed, start the api in development mode

    $ ./start-dev -c api

In another terminal we can start the webapp in local development mode

    $ cd ../webapp

If necessary, install NPM dependencies

    $ npm i

Run the webapp server in local development mode

    $ ./start-dev -c webapp

At this point the webapp should be accessible at `localhost:3000` or use the API at `localhost:1323`