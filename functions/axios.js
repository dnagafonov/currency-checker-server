const axios = require("axios");

const nbrbAPI = axios.create({
  baseURL: " https://www.nbrb.by/api/exrates/rates/dynamics"
});

module.exports = { nbrbAPI };