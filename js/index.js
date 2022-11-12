document.addEventListener('DOMContentLoaded', () => {
    console.log('page loaded')
    getSpacecraft()

    const feedbackForm = document.getElementById('feedbackForm')
    feedbackForm.addEventListener('submit', addFeedback) 
    const buttonDiv = document.getElementById('buttonDiv')
    buttonDiv.addEventListener('click', buttonClick)

})

const BASE_URL = "http://localhost:3000/spacecraft"


function getSpacecraft () {
    let fullList = document.getElementById('fullList')
    fetch(`${BASE_URL}`)
    .then(resp => resp.json())
    .then (data => {
        console.log(data)
        data.forEach (spacecraft => {
	        fullList.innerHTML +=
	            `<tr>
	                <td>
	                    ${spacecraft.name}
	                </td>
	                <td>
	                    ${spacecraft.agency.name}
	                </td>
	            </tr>`
            })
        })
   }




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