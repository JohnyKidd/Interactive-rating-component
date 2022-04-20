//select the rating numbers by class and create nodelist from them

let rateList = document.querySelectorAll(".rating")

//declare a selected boolean and other variable to store the selected value

let ratingSelected = false
let selectedRating = null

//foreach for radiobutton style behaviour

rateList.forEach(rating =>{
    rating.addEventListener("click",()=>{
        if (!ratingSelected){
            rating.style.background = "#fb7413"
            selectedRating = rating
            ratingSelected = true
        }
        else{
            selectedRating.style.background = "#121417"
            rating.style.background = "#fb7413"
            selectedRating = rating
        }
    })
})

//selecting the submit button, the ratingText div and create a click function for the button to modify innerHTML

let submitButton = document.querySelector("#sendForm")
let ratingText = document.querySelector("#ratingText")

submitButton.addEventListener("click",()=>{
    if (selectedRating == null){
        alert("Select a rating please!")
    }
    else{
        //delete the innerhtml of ratingtext
        ratingText.innerHTML = ""
        //creating the thank you logo and append it to ratingtext
        let thankLogo = document.createElement("img")
        thankLogo.src = "images/illustration-thank-you.svg"
        ratingText.appendChild(thankLogo)
        //creting h1 for thank you title
        let thankHeader = document.createElement("h1")
        thankHeader.innerText = "Thank you!"
        ratingText.appendChild(thankHeader)
        //creating the x out of y text and append it
        let outOfText = document.createElement("p")
        outOfText.innerHTML = `You selected ${selectedRating.innerHTML} out of 5.`
        outOfText.classList.add("selectedText")
        ratingText.appendChild(outOfText)
        //creating the thank you text and append it
        let thankText = document.createElement("p")
        thankText.innerHTML = "We appreciate you taking the time to give a rating.<br>If you ever need more support, don't hesitate to<br>get in touch!"
        ratingText.appendChild(thankText)
        ratingText.style.textAlign = "center"
    }
})