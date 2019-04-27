console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', (event) => {
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
fetch(imgUrl)
  .then( (resp) => {
    return resp.json()
  }).then( (response) =>{
    imageContainer = document.getElementById('dog-image-container')
    response.message.forEach( (dogImg) =>{
      imgTag = document.createElement('img')
      imgTag.src = dogImg
      imageContainer.append(imgTag)
    })
  })


 const dogBreedsUrl = 'https://dog.ceo/api/breeds/list/all'
 const dogBreedUl = document.getElementById('dog-breeds')

function dogBreed(filterLetter){
  fetch(dogBreedsUrl)
    .then( (resp) => {
      return resp.json()
    }).then( (response) => {
    // console.log(response.message)
    let dogBreedsArr = Object.keys(response.message)
    dogBreedsArr.forEach((breed) => {
      console.log(breed)
    if(breed.startsWith(filterLetter)){

      const dogBreedLi = document.createElement('li')
      dogBreedUl.append(dogBreedLi)
      dogBreedLi.append(breed)
      }
    })
  })
}
  dogBreedUl.addEventListener('click', (colorChange) =>{
    // console.log(colorChange)
    if (colorChange.target.tagName == 'LI'){
      colorChange.target.style.color = 'coral'
    }
  })

  const selectBreed = document.getElementById('breed-dropdown')
  console.log(selectBreed)
  selectBreed.addEventListener('change', (event) => {
  dogBreedUl.innerHTML = ''
    let filterLetter = event.target.value
    dogBreed(filterLetter)
  })




console.log('DOM fully loaded and parsed');
});
