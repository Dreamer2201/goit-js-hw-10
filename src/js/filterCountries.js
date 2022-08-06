import Notiflix from 'notiflix';
import {insertContent} from './createListCountries';
import {createOneItem} from './createOneContry';
import {clearListCountriesEl} from './clearListCountries';

export const filterCountries = (array) => {
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
