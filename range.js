const uri = 'http://localhost:8080/api';

let h = new Headers();
let req = new Request(uri, {});

fetch(req)
    .then( (response) => {

    })
    .then( (jsonData) => {
        
    })
    .catch( (err) => {
        console.log('ERROR:', err.message);
    });