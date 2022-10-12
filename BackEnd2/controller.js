const database = require("./db.json")
let currentHouseId = 4

module.exports = {
    getHouses: (req, res) => {

    },
    deleteHouse: (req, res) => {

    },
    createHouse: (req, res) => {
        const {id, address, price, imageURL} = req.body

        if(address !== "" && typeof price !== "string" && imageURL !== "") {
            res.status(200).send(currentHouseId, address, price, imageURL)
            currentHouseId++
        } else {
            res.status(404).status("incorrect value")
        }
    },
    updateHouse: (req, res) => {

    }
}