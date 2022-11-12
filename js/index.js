document.addEventListener('DOMContentLoaded', () => {
    console.log('page loaded')
    fetchSpacecraft()



})

const BASE_URL = "http://localhost:3000/spacecraft"

function fetchSpacecraft () {
    let fullList = document.getElementById('fullList')
    fetch(`${BASE_URL}`)
    .then(resp => resp.json())
    .then(data => {
        console.log(data)

        const allSpacecraft = document.querySelector('#spacecraftContainer')
        allSpacecraft.innerHTML = showAllSpacecraft(data)
    }
}

function showAllSpacecraft (allSpacecraft) {
    return allSpacecraft.map(spacecraft => showSingleSpacecraft(spacecraft)).join(" ")
}

        /* data.forEach (spacecraft => {
	        fullList.innerHTML +=
	            `<tr>
	                <td>
	                    ${spacecraft.name}
	                </td>
	                <td>
	                    ${spacecraft.agency.name}
	                </td>
	            </tr>`
            })*/
        }) 
   }

   function getOneSpacecraft () {

   }

function renderForm () {
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
}