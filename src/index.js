console.log('%c HI', 'color: firebrick')
// was having an issue setting const div = document.querySelector('div')? outside of the function... need a reminder why? you forgot someting about 'scope'(mouthwash hehehe)

////////////////////////Challenge 1///////////////////////////////////////////
document.addEventListener('DOMContentLoaded', event => {
  getDogs();
  listDogs();
});

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"


function getDogs() {
  let dogImg = document.querySelector('div')
  fetch(imgUrl)
    .then(res => res.json())
    .then(data => {
      data.message.forEach(url => {
        dogImg.innerHTML += `<img src=${url}>`

      })
    })
}
// challenge 1 done a messy was but done cause the way I was delagating the responsibility was not working IDK why

//////////////////////////////Challenge 2//////////////////////////////////////
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function listDogs() {
  let dogUl = document.querySelector('#dog-breeds')
  fetch(breedUrl)
    .then(res => res.json())
    .then(data => {
      let dogBreeds = Object.keys(data.message)
      let dropDownMenu = document.querySelector('#breed-dropdown')
      dogBreeds.forEach(breed => {

        dogUl.innerHTML += `<li id="doggieLi" >${breed}</li>`
      })
//////////////////////////////Challenge 4///////////////////////////////////////////////
      dropDownMenu.addEventListener('change', event => {
        let selectLetter = event.target.value
        let filteredBreeds = dogBreeds.filter(dog => dog.startsWith(selectLetter))
        dogUl.innerHTML = ""
        filteredBreeds.forEach(breed => {

          dogUl.innerHTML += `<li id="doggieLi" >${breed}</li>`
        })

      })
    })
}
////////////////////////////Challenge 3/////////////////////////////////////////

document.addEventListener('click', event => {
  if (event.target.id === "doggieLi") {
    event.target.style.color = "#d5d313"
  }
})
