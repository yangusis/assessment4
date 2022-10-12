const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, putFlower, addKeyword, deleteKeyword } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)

app.post("/api/keyword", addKeyword)
app.put("/api/flower2", putFlower)
app.delete("/api/keyword/:keyword", deleteKeyword)

app.listen(4000, () => console.log("Server running on 4000"));
