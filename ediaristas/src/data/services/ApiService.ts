// configurando o axios para acessar a API

import axios from "axios";

const url = "http://127.0.0.1:8000";

export const ApiService = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  }
});
