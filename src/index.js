console.log('%c HI', 'color: firebrick')

const imageContainer = document.getElementById('dog-image-container');
const nameContainer = document.getElementById('dog-breeds');
const ulTags = document.querySelector('ul');

let filterValue = 'a'

const addToDom = (stringItem) => {
    // let newList = ""
    // ulTags.innerHTML = ""
    if (stringItem[0] == filterValue) {
        ulTags.innerHTML += `<li>${stringItem}</li>`
    }
    // console.log(newList)
    // nameContainer.innerHTML += newList
    // console.log(nameContainer)
}

const addImgToDom = (stringItem) => {
    imageContainer.innerHTML += `<img src="${stringItem}">`
}

const turnPink = (event) => {
    event.target.style.color = "pink"
}

fetch('https://dog.ceo/api/breeds/image/random/4')
    .then((response) => {
        return response.json();
    }).then((myJason) => {
        myJason.message.forEach(item => {
            addImgToDom(item);
        });
    });

const fetchDogNames = () => {
    fetch('https://dog.ceo/api/breeds/list/all')
        .then((response) => {
            return response.json();
        }).then((myJason) => {
            for (var key in myJason.message) {
                // console.log(myJason.message[key])
                addToDom(key)
            }
        });
}

fetchDogNames()

const eventMethod = () => {
    ulTags.addEventListener('click', (event) => {
        turnPink(event)
    })
}

eventMethod();

// id="breed-dropdown" 

const changedRadio = (radioValue) => {
    ulTags.innerHTML = ''
    console.log(ulTags.innerHTML)
    filterValue = radioValue //prints radio value
    fetchDogNames()
}

const updateUl = () => {
    console.log(ulTags.innerHTML)
}

document.getElementById('breed-dropdown').addEventListener('ValueChange', (event) => changedRadio(event.srcElement.value))