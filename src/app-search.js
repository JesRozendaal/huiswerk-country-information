import axios from "axios";

// uitleg opdracht: https://github.com/hogeschoolnovi/frontend-javascript-country-information-prt2

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
// 12. Zorg ervoor dat de foutmelding verdwijnt als vervolgens een goed land wordt gezocht.
// 13. Stylen maar!
// 14. Bonus talen:
//     Maak een functie die door de array van talen loopt en deze als een string teruggeeft op de pagina.

console.log("Hallo!");

async function fetchCountryData(name) {
    const screenError = document.getElementById("country-data");
    screenError.innerHTML = ' ';

    try {
        const result = await axios.get(`https://restcountries.com/v2/name/${name}`);
        console.log(result.data);

showCountries(result.data[0]);

    } catch (error) {
        console.log(error);
screenError.innerHTML = `
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
<img src="${countries.flag}" alt="flag-of-country" class="flag" width="35px"/>
<h3>${countries.name}</h3>
<hr color="lightgray">
<p>${countries.name} is situated in ${countries.subregion}. It has a population of ${countries.population}.</p>
<p>The capital is ${countries.capital} ${getCurrencies(countries.currencies)}</p>
<p>${getLanguages(countries.languages)}</p>`
}

const searchForm = document.getElementById("search-form");
searchForm.addEventListener('submit', searchingCountries);

function searchingCountries(e) {
    e.preventDefault();

    const inputField = document.getElementById("search-country");

    fetchCountryData(inputField.value);

    inputField.innerHTML = ' ';
    }

    function getLanguages (languages) {
if (languages.length === 1) {
    return `They speak ${languages[0].name}.`
}
else if (languages.length === 2) {
    return `They speak ${languages[0].name} and ${languages[1].name}.`
}
else if (languages.length === 3) {
    return `They speak ${languages[0].name}, ${languages[1].name} and ${languages[2].name}.`
}
else if(languages.length === 4) {
    return `They speak ${languages[0].name}, ${languages[1].name}, ${languages[2].name} and ${languages[3].name}.`
}
    }

// Ik heb het geprobeerd op te lossen via onderstaande for-loop. Dit werkt wel, maar helaas lukt het mij dan niet om op het einde het woord "and" toe te voegen.
// Heb je misschien een tip hoe ik dit wel voor elkaar had kunnen krijgen op een makkelijkere manier dan ik nu heb gedaan?

//else {
// let moreLanguages = "They speak " + languages[0].name;
//   for (let i = 1; i < languages.length; i++) {
//moreLanguages = moreLanguages + " , " + languages[i].name;
//   }
//   return moreLanguages;
//}
// }


