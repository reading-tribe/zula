FROM node:16.3.0-alpine as build

ARG REACT_APP_API_URL

WORKDIR /app

COPY public /app/public/
COPY src /app/src/
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN echo $REACT_APP_API_URL

RUN npm i && REACT_APP_API_URL=$REACT_APP_API_URL npm run build

FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]