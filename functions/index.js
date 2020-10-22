const app = require(`express`)();
const functions = require("firebase-functions");
const cors = require("cors");
const bodyParser = require("body-parser");
const { nbrbAPI } = require("./axios");

app.use(cors());
app.use(bodyParser.json());

app.get("/exchange", async (req, res) => {
  try {
    const { startDate, endDate, currencyID } = req.query;
    const rates = await nbrbAPI.get(`${currencyID}?startDate=${startDate}&endDate=${endDate}`).then(res => res.data);
    res.json(rates);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

module.exports.app = functions.https.onRequest(app);
