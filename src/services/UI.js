// @ts-nocheck
export const UI = {
    renderlabel: (htmlElement,txt = "") => {
        const labelcount  = document.getElementById('anzahl');
        labelcount.innerHTML += txt;
    },
    renderRegionOptions: (htmlElement) => {
        const continents = [...new Set(window.countries.map((country) => (country = country.region)))];

        for (const continent of continents) {
            const selectOption = document.createElement('option');

            selectOption.setAttribute('value', continent);
            selectOption.innerHTML = continent;

            htmlElement.appendChild(selectOption);
        }
    },
    renderCountries: (filteredCountries) => {
        const labelcount  = document.getElementById('anzahl');
        labelcount.innerHTML = filteredCountries.length

        const countriesWrapper = document.querySelector('countries-wrapper');
        countriesWrapper.innerHTML = '';

        if (filteredCountries.length === 0) {
            countriesWrapper.innerHTML = 'Not found';
        } else {
            for (const country of filteredCountries) {
                const countryItem = document.createElement('country-item');
                const countryInfo = document.createElement('div');

                countryInfo.classList.add('country-info');

                countryItem.innerHTML = `
                    <img src=${country.flags.svg} width="200px" />
                `;

                countryInfo.innerHTML = `
                    <h2>${country.name.common}</h2>
                    <p>
                        <b>Population</b>: ${country.population.toLocaleString('de-DE')}
                        <br />
                        <b>Region</b>: ${country.region}
                        <br />
                        <b>Capital</b>: ${country.capital}
                    </p>
            `;

                countryItem.appendChild(countryInfo);
                countriesWrapper.appendChild(countryItem);
            }
        }
    },
};
