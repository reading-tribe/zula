import axios from "axios";

const header = {
  "Content-type": "application/json"
}

export const bookEndpoint = axios.create({
  baseURL: "https://8oufr7mu4f.execute-api.eu-central-1.amazonaws.com",
  headers: header
});

export const userEndpoint = axios.create({
  baseURL: "https://81qrzgok36.execute-api.eu-central-1.amazonaws.com",
  headers: header
});

export const translationEndpoint = axios.create({
  baseURL: " https://fgxdnldga8.execute-api.eu-central-1.amazonaws.com",
  headers: header
});
