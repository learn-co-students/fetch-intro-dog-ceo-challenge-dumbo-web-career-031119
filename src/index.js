console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function(){
  console.log("inside DOMContentLoaded");
  let dogImageContainer = document.getElementById('dog-image-container')
  let dogUL = document.querySelector('#dog-breeds')

  // Challenge 1

  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(response => {
    return response.json()
  })
  .then(function(jsonObject){

    let arrayOfDogUrls = jsonObject.message
    arrayOfDogUrls.forEach(url => {
      dogImageContainer.innerHTML += makeImageTagString(url)
    })
  })

  // Challenge 2


  fetch("https://dog.ceo/api/breeds/list/all")
  .then(response => response.json())
  .then(response => {
    let dogBreeds = Object.keys(response.message)
    dogBreeds.forEach((breed) => {
      dogUL.innerHTML += `<li>${breed}</li>`
    })
  })

  // Challenge 3

  dogUL.addEventListener("click", function(event){
    if (event.target.tagName === "LI") {
      // if (event.target.dataset.info === "breed") {
      event.target.style.color = "green"
    }
  })


  // Challenge 4

  let dogSelect = document.getElementById("breed-dropdown")
  dogSelect.addEventListener('change',(event) => {
    makeFetchHappen()
    .then(res => {
      let dogBreedsArr = Object.keys(res.message)

      let filteredArray = dogBreedsArr.filter(breed => {
        return breed.startsWith(event.target.value)
      })
      dogUL.innerHTML = ""
      filteredArray.forEach((breed) => {
        dogUL.innerHTML += `<li>${breed}</li>`
      })
    })
  })

  function makeFetchHappen() {
    return fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
  }

  // DOMContentLoaded

})
function makeImageTagString(url){
  return `<img src="${url}"/>`
}
