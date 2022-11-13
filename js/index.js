document.addEventListener('DOMContentLoaded', () => {
    console.log('page loaded')
    fetchSpacecraft()



})

const BASE_URL = "http://localhost:3000/spacecraft"

function fetchSpacecraft () {
    fetch(`${BASE_URL}`)
    .then(resp => resp.json())
    .then(data => {
        console.log(data)

            const spacecraftList = document.querySelector('#spacecraftList')
            data.forEach (spacecraft => {
                spacecraftList.innerHTML +=
                    `<li class="tm-list-group-item">
                        ${spacecraft.name} | ${spacecraft.agency.name}
                    </li>`
            })
        }) 
    }

/*             singleSpacecraft.innerHTML +=
            `
                <h1>${spacecraft.name}</h1>
                <h3>Country: ${spacecraft.agency.country_code}</h3>
                <h3>Agency: ${spacecraft.agency}</h3>
                <h3>Status ${spacecraft.in_use}</h3>
                <h3>Human-rated: ${spacecraft.human_rated}</h3>
                <h3>Capability: ${spacecraft.capability}</h3>
                <h3>Crew Capacity: ${spacecraft.crew_capacity}</h3>
                <h3>Maiden Voyage: ${spacecraft.maiden_flight}</h3>
                <p>${spacecraft.description}</p>
            `
       })
    })
} */ 

        /* let spacecraftCard = document.getElementByID ('#spacecraftCard')
        data.forEach (spacecraft => {
            spacecraftCard.innerHTML +=
            //add image grid
                `
                    <h1>${spacecraft.name}</h1>
                    <h3>Country: ${spacecraft.agency.country_code}</h3>
                    <h3>Agency: ${spacecraft.agency}</h3>
                    <h3>Status ${spacecraft.in_use}</h3>
                    <h3>Human-rated: ${spacecraft.human_rated}</h3>
                    <h3>Capability: ${spacecraft.capability}</h3>
                    <h3>Crew Capacity: ${spacecraft.crew_capacity}</h3>
                    <h3>Maiden Voyage: ${spacecraft.maiden_flight}</h3>
                    <p>${spacecraft.description}</p>
                `
            })
        })
    }
 */

/*         const allSpacecraft = document.querySelector('#allSpacecraftContainer')
        allSpacecraft.innerHTML = showAllSpacecraft(data)
 */   

/* function showAllSpacecraft (allSpacecraft) {
    return allSpacecraft.map(oneSpacecraft => showSingleSpacecraft(oneSpacecraft)).join(" ")
}
 */
/* function showSingleSpacecraft (spacecraft) {
    
    let spacecraftCard = document.getElementById ('spacecraftCard')
    spacecraftCard.innerHTML =+
        //add image grid
        return `
            <div class="spacecraftCard" id="${spacecraft.id}>
                <h1>${spacecraft.name}</h1>
                <h3>Country: ${spacecraft.agency.country_code}</h3>
                <h3>Agency: ${spacecraft.agency.}</h3>
                <h3>Status ${spacecraft.in_use}</h3>
                <h3>Human-rated: ${spacecraft.human_rated}</h3>
                <h3>Capability: ${spacecraft.capability}</h3>
                <h3>Crew Capacity: ${spacecraft.crew_capacity}</h3>
                <h3>Maiden Voyage: ${spacecraft.maiden_flight}</h3>
                <p>${spacecraft.description}</p>
            `
}
 

 /*   function getOneSpacecraft () {

   }
 */
/* function renderForm () {
    const feedbackForm = document.getElementById('feedbackForm')
    feedbackForm.addEventListener('submit', addFeedback) 
    const buttonDiv = document.getElementById('buttonDiv')
    buttonDiv.addEventListener('click', buttonClick)
}

function addFeedback () {

    const addFeedback = (event) => {
    event.preventDefault()
    console.log('submitted')
    //form is target of submit
    //grabs value of user comment inside of its input ID in the form, stores it in a variable, 


    const userFeedback = event.target.querySelector('#new-feedback') //grabs user input
    const addFeedback = document.createElement('p')
    addFeedback.textContent = userFeedback.value
    const feedback = document.getElementById('#feedbackContainer')
    feedback.appendChild(addFeedback)
    userFeedback.value = "" //resets feedback field
    }
}

function optionButtons () {
    const buttonClick = () => {
        console.log("clicked button")
        console.log(event.target.dataset)

        const name = event.target.dataset.name //grab btn name

        if (name === 'button1') {
            window.alert('button1')
        } else if (name === 'button2')  {
            window.alert('button2')
        } else {
            window.alert('button3')
        }
    }
} */