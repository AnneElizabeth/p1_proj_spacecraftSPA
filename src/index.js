let dataArray = []

document.addEventListener('DOMContentLoaded', () => {
    fetchSpacecraft()
    headerButtons()
    addForm()
})

function fetchSpacecraft() {
    fetch("http://localhost:3000/spacecraft")
    .then(resp => resp.json())
    .then(data => {        
        dataArray = data   
        data.push(dataArray)
    })
}

function headerButtons() {
    const launchButton = document.getElementById('launch')
    launchButton.addEventListener('click', launchSpacecraft)
    
    const feedbackBtn = document.getElementById('feedbackBtn')
    feedbackBtn.addEventListener('click', showForm)
}

function launchSpacecraft() {
    const audioElement = new Audio("sounds/launch-85216.mp3")
    audioElement.play()
    dataArray.forEach(addInfoCard)
}

function addInfoCard (spacecraft) {
    const infoCard = document.getElementById('grid-wrapper')
    infoCard.innerHTML +=
        `
        <div class="infocard">
            <img src="${spacecraft.img}" style="width: 100%">
            <div class="card-details">
                <h3>${spacecraft.name}</h4> 
                <p><b>Country:</b> ${spacecraft.agency.country_code}</p>
                <p><b>Agency:</b> ${spacecraft.agency.name}</p>
                <p><b>Maiden Voyage</b>: ${spacecraft.maiden_flight}</p>
                <p class="inUse" style="display: none;">${spacecraft.in_use}</>
            </div>
        </div>
        `
}

function addForm() {
    formContainer = document.getElementById('formContainer')
    formContainer.innerHTML += 
        `
        <div class="formCard">
            <form id="feedbackForm" action="http://localhost:3000/comments" method="POST">
                <p>We'd love to hear your <b>positive and constructive</b> feedback about this application.</p>
                
                <label for="name">Your Name:</label>
                <input type="text" id="name" name="name">

                <label for="email">Your Email:</label>
                <input type="text" id="email" name="email">
            
                <label for="feedback">Your Feedback:</label>
                <input type="textarea" id="feedback" name="feedback">
                
                <button type="submit" id="submit" class="btnSubmit"><span class="material-symbols-outlined">satellite_alt</span>  SEND FEEDBACK</button>
            </form>
        </div>
        `
        submitForm()
/*     const feedbackForm = document.getElementById('feedbackForm')
    feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault()
        submitData()
        window.alert('Thank you for your feedback!')
    })
 */}

function showForm () {
    const findHiddenForm = document.getElementById('feedback')
    findHiddenForm.classList.remove('hideForm')
    findHiddenForm.classList.add('showForm')
    location.href = '#feedback'
}

function submitForm () {
    const feedbackForm = document.getElementById('feedbackForm')
    feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault()
        submitData()
        window.alert('Thank you for your feedback!')
    })
}

function submitData (name, email, feedback) {
    return fetch ('http://localhost:3000/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify ({
            name,
            email,
            feedback
        })
    })
    .then (function (response) {
        return response.json()
    })
    .catch (function (error) {
        document.body.innerHTML = error.message
    })
}