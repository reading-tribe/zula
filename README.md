# Zula, The Reading Tribe
Zula is on a mission to amplify diversity and inclusion in children's libraries and bookshelves around the globe!

We are aiming to develop an open-source + premium subscription online library for inclusive childrens books.
## Project Setup

- Backend written in Golang
- Frontedn written in JavaScript using React

### Folder Structure

```
src/
  api/
    cmd/
      api/ -- contains API Server start command
    pkg/
      api/ -- contains API Server code
        test/ -- contains Go tests
  webapp/
    public/  -- contains frontend public assets
    src/  -- contains React frontend code
```

## Running the project locally

The recommended way to run the program locally is to use docker.

    $ docker-compose up --build

You can then visit the homepage at `localhost:8080` or use the API at `localhost:1323`