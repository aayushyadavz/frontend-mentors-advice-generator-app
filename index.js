const api_Url = "https://api.adviceslip.com/advice"
const adviceId = document.querySelector("#advice-id")
const advice = document.querySelector("#advice")
const diceBtn = document.querySelector(".dice-circle")

async function getAdvice(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        
        adviceId.innerHTML = `ADVICE #${data.slip.id}`
        advice.innerHTML = `"${data.slip.advice}"` 
    } catch (error) {
        adviceId.innerHTML = "Failed to load ID"
        advice.innerHTML = "Failed to load Advice"
        console.error("Error fetching Advice: ", error)
    }
    
}
getAdvice(api_Url)

diceBtn.addEventListener("click", () => {
    getAdvice(api_Url)
})