import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const inputCountryEl = document.querySelector('#search-box');
const litsCountresEl = document.querySelector('.country-list');

const URL = 'https://restcountries.com/v2/all?fields=name,capital,population,flag,languages';

inputCountryEl.addEventListener('input', onInputChange);

function onInputChange(e) {
    const searchName = e.target.value.trim().toUpperCase();
    console.log(searchName);
    fetchCountries (searchName);
}

function fetchCountries (searchName) {
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            const necessaryCountries = data.filter(contry => contry.name.toUpperCase().includes(searchName));
            console.log(necessaryCountries);
            filterNecessaryCountries (necessaryCountries);     
        })
        .catch((error) => { console.log(error); })
}

const filterNecessaryCountries = (array) => {
    if (array.length === 1) {
        litsCountresEl.innerHTML = "";
        console.log(array[0]);
        return createOneItem(array[0]);
    } else if (array.length < 10) {
        insertContent (array);
    } else if (array.length > 10) {
        console.log("It's too much");
    }

}

const createOneItem = (item) => {
   const itemResult = `<li>
<h2>Country: ${item.name}</h2>
<p>Capital: ${item.capital}</p>
<p>Popolation: ${item.population}</p>
<img src="${item.flag}" alt="flag of ${item.name}" width="50">
<p>Languages: ${item.languages[0].nativeName}</p>
</li>`;
litsCountresEl.insertAdjacentHTML('beforeend', itemResult);
}

const createListItems = (item) => `<li>
<img src="${item.flag}" alt="flag of ${item.name}" width="50">
<h2>${item.name}</h2></li>`

const generateContent = (array) =>
    array.reduce((acc, item) => acc + createListItems(item), "");

const insertContent = (array) => {
    const result = generateContent(array);
    litsCountresEl.insertAdjacentHTML('beforeend', result);
}