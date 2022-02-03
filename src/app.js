import axios from "axios";

console.log('Hallo daar!');

// 1. installeer de dependencies via npm install.
// 2. installeer Axios en import deze bovenin het app.js bestand. (vergeet type = "module" niet toe te voegen in het script in HTML!)
// 3. Benodigde endpoint: https://restcountries.com/v2/all
// 4. Schrijf een asynchrone functie om de gegevens uit de endpoint op te halen.
// 5. Log dit resultaat.
// 6. Probeer het 1e land te loggen om te zien welk pad ik moet volgen.

async function fetchCountries () {
    try {
        const result = await axios.get('https://restcountries.com/v2/all');
        console.log(result);
        console.log(result.data[0].name);
    } catch (error) {
        console.log(error);
    }
}

fetchCountries();

////////
