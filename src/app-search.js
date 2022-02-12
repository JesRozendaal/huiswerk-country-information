import axios from "axios";

//https://github.com/hogeschoolnovi/frontend-javascript-country-information-prt2

// Stappen:
// 1. Maak nieuwe HTML, JS en CSS aan. Koppel deze aan elkaar.
// 2. Koppel de 2 HTML pagina's aan elkaar.
// 3. Maak een async functie om de data op te halen.
//    Benodigde endpoint: https://restcountries.com/v2/name/{name}
// 4. Log dit resultaat.
// 5. Maak een variabele aan om de resultaten in op te slaan.
// 6. Maak een container in HTML.
// 7. Zorg ervoor dat de informatie over Nederland in deze container op het scherm komt.
// 8. Maak een functie die altijd de juiste zin teruggeeft bij valuta.
//    Dus: 1 valuta: and you can pay with [currency]'s
//         2 valuta's: and you can pay with [currency]'s and [currency]'s
// 9. Maak een inputveld met zoekknop op de pagina.
//    De data mag pas opgehaald worden als de gebruiker op Enter of 'zoek' drukt.
// 10. Zorg ervoor dat de input waarde als dynamische waarde wordt gebruikt in het GET request.
// 11. Zorg ervoor dat de gebruiker een foutmelding krijgt als een ongeldig land ingevoerd wordt.

console.log("Hallo!");

async function fetchCountryData(name) {
    const errorMessage = document.getElementById("error-message");
    errorMessage.innerHTML = ' ';

    try {
        const result = await axios.get(`https://restcountries.com/v2/name/${name}`);
        console.log(result.data);

showCountries(result.data[0]);

    } catch (error) {
        console.log(error);
errorMessage.innerHTML = `
<p class="error">${name} hasn't been found, please try again 😃</p>`
    }
}

function getCurrencies(currencies) {
    if(currencies.length === 2) {
        return `and you can pay with ${currencies[0].name}'s and ${currencies[1].name}'s.`
    } else {
        return `and you can pay with ${currencies[0].name}'s.`
    }
}

function showCountries (countries) {
    const containerResult = document.getElementById("country-data");

    containerResult.innerHTML = `
<img src="${countries.flag}" class="flag" width="35px"/>
<h3>${countries.name}</h3>
<p>${countries.name} is situated in ${countries.subregion}. It has a population of ${countries.population}.</p>
<p>The capital is ${countries.capital} ${getCurrencies(countries.currencies)}</p>`
}

const searchForm = document.getElementById("search-form");
searchForm.addEventListener('submit', searchingCountries);

function searchingCountries(e) {
    e.preventDefault();

    const inputField = document.getElementById("search-country");

    fetchCountryData(inputField.value);

    inputField.innerHTML = ' ';
    }


