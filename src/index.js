console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {
  let dogImageContainer = document.getElementById('dog-image-container')

  let dogUL = document.querySelector('#dog-breeds')
  console.log(dogUL)

  console.log(dogImageContainer)
  // challenge 1
  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => {
      return response.json()})
    .then(jsonObject => {
      jsonObject.message.forEach(url => {
        dogImageContainer.innerHTML += makeImgTag(url)
      })
    })

  // challenge 2
  fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => {
      return response.json()
    })
    .then( response => {
      let dogBreedsArr = Object.keys(response.message)
      dogBreedsArr.forEach( breed => {
        dogUL.innerHTML += `<li class="breed-li">${breed}</li>`
      })
    })

  // challenge 3
  dogUL.addEventListener('click', (event) => {
    if (event.target.tagName === "LI") {
      event.target.style.color = "pink"
    }
  })
  // challenge 4
  dogSelect = document.getElementById('breed-dropdown')
  dogSelect.addEventListener("change", (event) => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(response => {
        return response.json()})
      .then(res => {
        let dogBreedsArr = Object.keys(res.message);
        let filteredArray = Object.keys(res.message).filter(breed => {
          return breed.startsWith(event.target.value)
        })
        dogUL.innerHTML = ""
        filteredArray.forEach((breed) => {
          dogUL.innerHTML += `<li class="breed-li">${breed}</li>`
        })
      })
  })

})

const makeImgTag = (url) => {
  return `<img src="${url}"/>`
}
