// @ts-nocheck
import { API } from './src/services/API';
import { UI } from './src/services/UI';

// Render Countries // Search & Filter Countries //
window.addEventListener('DOMContentLoaded', async () => {
    const searchInput = document.getElementById('search');
    const selectInput = document.getElementById('filter');
    const labelcount  = document.getElementById('anzahl');
    searchInput.value = "h";
    //UI.renderlabel(labelcount,"Stefan");

    await API.getCountriesData();
    UI.renderRegionOptions(selectInput);

    //UI.renderCountries(window.countries);
    UI.renderCountries([...window.countries].filter((country) => country.name.common.toLowerCase().includes(searchInput.value)));
    const uniCodePoint = 0x1F308;
    UI.renderlabel(labelcount," first run " + String.fromCodePoint(uniCodePoint));
  
    searchInput.addEventListener('input', (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const filteredCountries = [...window.countries].filter((country) =>
            country.name.common.toLowerCase().includes(searchTerm)
        );

        UI.renderCountries(filteredCountries);
        //console.log(filteredCountries); debugger;
    });

    selectInput.addEventListener('change', (event) => {
        const selectedRegion = event.target.value;
        const filteredCountries = [...window.countries].filter((country) =>
            selectedRegion === '' ? country : country.region === selectedRegion
        );

        UI.renderCountries(filteredCountries);
    });
    UI.renderlabel(labelcount,` ${searchInput.value} _`);
});


