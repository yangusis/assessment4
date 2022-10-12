const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const flowerPut = document.getElementById("flowerBox")
const keywordStorage = document.getElementById("keyword")
const deleteBtn = document.getElementById("delete")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/").then(res => {
        const data = res.data;
        alert(data)
    })
}

const putFlower = () => {
    axios.put("http://localhost:4000/api/:flower").then(res => {
        const data = res.data
        alert(data)
    })
}

const addKeyword = () => {
    const keyword = document.querySelector("keyword").value
    const body = { keyword }

    axios.post("localhost:4000/api/keyword", body).then(res => {
        alert("Keyword added")
        .catch(console.log)
    })
}

const deleteKeyword = () => {
    axios.delete("localhost:4000/api/keyword/:keyword", (req, res) => {
        let currentKeyword = req.params.keyword
        for(i = 0; i < keyword.length; i++) {
            if(keyword[i] === currentKeyword) {
                keyword.splice(i, 1)
                res.status(200).send("Keyword removed")
                return
            }
        }
        res.status(400).send("Keyword not found")
    })
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
keywordStorage.addEventListener("click", addKeyword)
flowerPut.addEventListener("click", putFlower)
deleteBtn.addEventListener("click", deleteKeyword)