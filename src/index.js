import Notiflix from 'notiflix';
const debounce = require('lodash.debounce');
import './css/styles.css';
import {fetchCountries} from './data/fetchCountries';
import {refs} from './js/refs';
import {filterCountries} from './js/filterCountries';

const DEBOUNCE_DELAY = 300;

refs.inputCountryEl.addEventListener('input', debounce(onInputChange, DEBOUNCE_DELAY));

function onInputChange(e) {
    const searchName = e.target.value.trim().toUpperCase();
    console.log();
    fetchCountries(searchName)
    .then((data) => {
        console.log(data);
        filterCountries(data);
    })
    .catch((error) => {
        console.log(error);
    })
}
