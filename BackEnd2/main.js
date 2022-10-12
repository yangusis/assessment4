const formElement = document.querySelector("form")

formElement.addEventListener("submit", (event) => {
    event.preventDefault()

    const address = document.querySelector(".address").value
    const price = document.querySelector(".price").value
    const imageURL = document.querySelector(".imageURL").value
    const body = { address, price, imageURL }

    console.log({ address, price, imageURL })

    /* this would be used for something that would scale much larger, login-form-input being the class of objects
    const formData = document.querySelector(".login-form-input")
    const body = {}
    for(i = 0; i < formData.length; i++) {
        body[formdData[i].name] = formData[i].value
    }
    console.log(body)
    */
})