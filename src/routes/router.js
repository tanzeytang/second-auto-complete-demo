const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/api/autocomplete/:query", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const endpoint = `${process.env.ENDPOINT}?app_id=${process.env.APP_ID}&app_code=${process.env.APP_CODE}&query=${req.params.query}&beginHighlight=<b>&endHighlight=</b>`;
  //const endpoint = `http://autocomplete.geocoder.api.here.com/6.2/suggest.json?app_id=4IKCkjwaZesTZW0WqFrA&app_code=CIfJLMF_at6bUUK09tHyAg&query=${req.params.query}&beginHighlight=<b>&endHighlight=</b>`;
  console.log(process.env.ENDPOINT, process.env.APP_ID, process.env.APP_CODE);
  axios({
    method: "GET",
    url: endpoint,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      res.send(JSON.stringify(response.data));
    })
    .catch(error => {
      res.send(JSON.stringify(error), 400);
    });
});

router.get("/ping", (req, res) => {
  res.send("pong");
});
router.use("/", express.static("client"));

module.exports = router;
