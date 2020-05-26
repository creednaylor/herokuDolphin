function grabStarWarsData(path, onSuccess, onFailure) {
  axios.get('https://swapi.dev/api' + path)
  .then(function(response) {
    const data = response.data; 
    console.log('data fetched properly', data)
    onSuccess(data);
  })
  .catch(function(error) {
    console.log('data failed');
    console.log(error)
  })  
}


