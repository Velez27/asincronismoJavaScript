let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const API = 'https://rickandmortyapi.com/api/character/'

function fetchData(urlApi, callback){
    let xhttp = new XMLHttpRequest();
    // true activa el asincronismo en xhttp, el valor por defecto es true
    xhttp.open('GET', urlApi, true);
    xhttp.onreadystatechange = function(event){
        // 4 es el estado en el que se encuentra.
        // Lista de estados
        // 0 = inicializado
        // 1 = cargando
        // 2 = ya se cargo
        // 3 = descarga o informacion
        // 4 = completado
        if(xhttp.readyState === 4){
            // Para saber el status, si todo esta correcto
            // 200 = OK, 400 = no encontro algo, 500 = algo fallo, etc...
            if(xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText))
            } else{
                const error = new Error('Error' + urlApi);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}

fetchData(API, function(error1, data1){
    if(error1) return console.error(error1);
    fetchData(API + data1.results[0].id, function(error2, data2){
        if(error2) return console.error(error2);
        fetchData(data2.origin.url, function(error3, data3){
            if(error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        })
    })
});