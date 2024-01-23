let URL = 'https://randomuser.me/api/';

fetch(URL)
    .then((Response) => (Response.json()))
    .then(data => render_general(data))
    
    .catch((error) => console.log(error))

function render_general(data) {

    console.log(data)
    let clon = document.querySelector('template').content.cloneNode(true);

    clon.querySelector('h5').innerText = data.results.gender;

    clon.querySelector('img').src = data.results.picture

    document.querySelector('.card-content').append(clon);
}