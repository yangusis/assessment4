const express = require("express")
const cors = require("cors")
const userController = require("./controller")

const app = express();

app.use(express.json())
app.use(cors())

app.get("/", getHouses)
app.post("/", createHouse)
app.put("/:id", updateHouse)
app.delete("/:id", deleteHouse)

app.listen(4000, () => console.log("app running on port 4000"));