const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";


//Challenges 1/2
fetch(imgUrl)
.then(resp => resp.json())
.then(data => data.message.forEach(element => {
    renderImage(element)
}));

function renderImage(dogImage) {
    const dogImageContainer = document.getElementById('dog-image-container');
    const imageElement = document.createElement('img');
    imageElement.src = dogImage;
    imageElement.width = 300;

    dogImageContainer.append(imageElement);
}


//Challenges 3/4
fetch(breedUrl)
.then(resp => resp.json())
.then(data => {
    addBreed(Object.keys(data.message));
    filterBreeds(Object.keys(data.message));
})

function addBreed(breeds) {
    const dogBreedList = document.getElementById('dog-breeds');
    dogBreedList.replaceChildren();
    for (const breed of breeds) {
        const breedListItem = document.createElement('li');
        breedListItem.textContent = breed;
        breedListItem.addEventListener('click', () => {
            breedListItem.style.color = 'red';
        })
        dogBreedList.append(breedListItem);

    }
}

function filterBreeds(breeds) {
    const breedDropdown = document.getElementById('breed-dropdown');

    breedDropdown.addEventListener('change', e => {
        e.preventDefault();
        const dropdownValue = breedDropdown.value;
        const filteredBreeds = breeds.filter(breed => breed.startsWith(dropdownValue));
        addBreed(filteredBreeds);
    })
}
