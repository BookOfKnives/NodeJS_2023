//1202 2023 første forsøg på GET server i node
"use strict";
console.log("This is index.js running. 2023.");

const birdData = require('./modules/dataAccess');
const birds = new birdData();
const express = require('express');
const app = express();
app.use(express.json());

app.get("/hello", (req, res) => {
    res.send({message: "Hello from first! 2023 iis a good year."})
});

app.get("/birds", (req, res) => {
    res.send({"All Birds":birds.getBirds()});
});

app.get("/birds/:row/:id", (req, res) => {
    const dataAccessStringRow = req.params.row;
    const dataAccessStringId = req.params.id;
    res.send({"This is the bird you wanted, sir":birds.getBirdsId(dataAccessStringRow, dataAccessStringId)})

  //  res.send({"The bird chosen": birdLists[req.params.row][req.params.id]});
});

app.listen(8080);