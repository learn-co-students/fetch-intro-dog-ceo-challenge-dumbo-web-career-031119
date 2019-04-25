.then(res => {
    let dogBreedArr = Object.keys(res.message)

    let filteredArray = dogbreedArr.filter(breed => {
        return breed.startsWith(event.target.value)
    })
})