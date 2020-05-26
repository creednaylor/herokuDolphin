function addOnPage(characterData) {
    const movieCharacterElement = document.createElement('div');
    movieCharacterElement.appendChild(document.createElement('div')).innerText = 'Name: ' + characterData.name;
    movieCharacterElement.appendChild(document.createElement('div')).innerText = 'Hair Color: ' + characterData.hair_color;
    movieCharacterElement.appendChild(document.createElement('div')).innerText = 'Gender: ' + characterData.gender;
    movieCharacterElement.appendChild(document.createElement('p'));

    document.querySelector('#star-wars-character-container').appendChild(movieCharacterElement);
}

function handleOnSuccess(characterData) {
    addOnPage(characterData);
}

function handleOnFailure() {
    alert('failed to get data');
}

function getRandomNumberForApi() {
    const limitExclusiveCountForPeopleApi = 83;
    return Math.floor(limitExclusiveCountForPeopleApi * Math.random()) + 1
}

function getStarWarsInfo() {
    const randomNumber = getRandomNumberForApi(); 
    const path = '/people/' + randomNumber;
    grabStarWarsData(path, handleOnSuccess, handleOnFailure);
}