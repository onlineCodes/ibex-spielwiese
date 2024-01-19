// @ts-nocheck
import { API } from './src/services/API';
import { UI } from './src/services/UI';

// Render Countries // Search & Filter Countries //
window.addEventListener('DOMContentLoaded', async () => {
    const searchInput = document.getElementById('search');
    const selectInput = document.getElementById('filter');

    await API.getCountriesData();

    UI.renderRegionOptions(selectInput);
    UI.renderCountries(window.countries);

    searchInput.addEventListener('input', (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const filteredCountries = [...window.countries].filter((country) =>
            country.name.common.toLowerCase().includes(searchTerm)
        );

        UI.renderCountries(filteredCountries);
    });

    selectInput.addEventListener('change', (event) => {
        const selectedRegion = event.target.value;
        const filteredCountries = [...window.countries].filter((country) =>
            selectedRegion === '' ? country : country.region === selectedRegion
        );

        UI.renderCountries(filteredCountries);
    });
});


