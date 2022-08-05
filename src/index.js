import Notiflix from 'notiflix';
const debounce = require('lodash.debounce');
import './css/styles.css';
import {fetchCountries} from './data/fetchCountries';

const DEBOUNCE_DELAY = 300;
const inputCountryEl = document.querySelector('#search-box');
const litsCountresEl = document.querySelector('.country-list');

inputCountryEl.addEventListener('input', debounce(onInputChange, DEBOUNCE_DELAY));

function onInputChange(e) {
    const searchName = e.target.value.trim().toUpperCase();
    fetchCountries (searchName);
}

const filterNecessaryCountries = (array) => {
    if (array.length === 1) {
        clearListCountriesEl();
        return createOneItem(array[0]);
    } else if (array.length < 10 && array.length > 0) {
        clearListCountriesEl();
        insertContent (array);
    } else if (array.length > 10) {
        clearListCountriesEl();
        Notiflix.Notify.failure("Too many matches found. Please enter a more specific name.");
    } else { 
        clearListCountriesEl();
        Notiflix.Notify.failure("Oops, there is no country with that name");}
}
const clearListCountriesEl = () => {
    litsCountresEl.innerHTML = "";
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
export {filterNecessaryCountries};