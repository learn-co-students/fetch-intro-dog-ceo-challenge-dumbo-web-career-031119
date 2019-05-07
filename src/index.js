console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');


const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

const dogImageContainer = document.getElementById('dog-image-container');

const makeImageTagString = url => {
    return `<img src="${url}"/>`
}

fetch(imgUrl)
.then(res => res.json())
.then((arrOfDogURLs) => {
    // use .message on the parsed response object
    arrOfDogURLs.message.forEach(url => {
        dogImageContainer.innerHTML += makeImageTagString(url)
    })
})

const allBreedUrl = 'https://dog.ceo/api/breeds/list/all'
// After the first challenge is completed, add javascript so that:

// on page load, fetch all the dog breeds using the url above ⬆️
// add the breeds to the page in an <ul> (take a look at the included index.html)

const dogBreedsUL = document.getElementById('dog-breeds')


fetch(allBreedUrl)
.then(res => res.json())
.then((dogBreedObject) => {
    Object.keys(dogBreedObject.message).forEach((breed) => {
        //must include the li tags in breed
        // innerHTML > innerText, innerText will literally add the string text to DOM
        dogBreedsUL.innerHTML += `<li data-info="breed">${breed}</li>`
    })
})

// Once all of the breeds are rendered in the <ul>, add javascript so that the font color of a particular <li> changes on click. This can be a color of your choosing.

// When the user clicks any of the dog breed list items, the color the text should change.
dogBreedsUL.addEventListener('click', (event) => {
    // don't forget to include event.target to target the element you want to click
    // add data-info="breed" to the inside of the li tag that we appended earlier to add dataset information
    if (event.target.dataset.info === 'breed') {
        event.target.style.color = 'purple'
    }
})

// Once we are able to load all of the dog breeds onto the page, add javascript so that the user can filter breeds that start with a particular letter using a dropdown.

// For example, if the user selects 'a' in the dropdown, only show the breeds with names that start with the letter a. For simplicity, the dropdown only includes the letters a-d. However, we can imagine expanding this to include the entire alphabet

const breedFilterDropdown = document.getElementById('breed-dropdown')
    breedFilterDropdown.addEventListener('change', (event) => {
        // use fetch to get all of your dogs first
        fetch(allBreedUrl)
        .then(res => res.json())
        .then((parsedResp) => {
            // we're going to take the dogBreedsArray again and get the keys
            let dogBreedArray = Object.keys(parsedResp.message)
                //dogBreedArray from our parsed response with the .filter method
                let filteredArray = dogBreedArray.filter(breed => {
                //.value will give you the value in the list
                //event.target.value
                return breed.startsWith(event.target.value)
            })
            dogBreedsUL.innerHTML = ''
            
            filteredArray.forEach((breed) => {
                dogBreedsUL.innerHTML += `<li data-info="breed">${breed}</li>`
            })
        })
        
    })



// DOMContentLoaded
})