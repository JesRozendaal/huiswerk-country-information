import axios from "axios";

// Stappen:
// 1. Maak nieuwe HTML, JS en CSS aan. Koppel deze aan elkaar.
// 2. Koppel de 2 HTML pagina's aan elkaar.
// 3. Maak een async functie om de data op te halen.
//    Benodigde endpoint: https://restcountries.com/v2/name/{name}
// 4. Log dit resultaat.

console.log("Hallo!");

async function fetchCountries () {

    try {
        const result = await axios.get('https://restcountries.com/v2/name/netherlands');
        console.log(result.data);

    } catch (error) {
        console.log(error);
    }
}

fetchCountries();

