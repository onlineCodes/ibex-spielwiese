// @ts-nocheck
export const API = {
    fetchCountries: async () => {
        const RESPONSE = await fetch('https://restcountries.com/v3.1/all');
        const data = await RESPONSE.json();

        if (!RESPONSE.ok) {
            console.log("Couldn't fetch Data");
        }

        return data;
    },
    getCountriesData: async () => {
        if (!window.countries) {
            const countries = await API.fetchCountries();
            window.countries = countries;
        } else {
            return window.countries;
        }
    },
};
