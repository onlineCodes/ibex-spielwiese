/** @type {import('tailwindcss').Config} */
module.exports = {
    /* um Tailwind zu anzuwenden*/
    content: ["index.html","./src/**/*.{html,js}"], /* bei react mit jsx */
    darkMode: ['class','.night'],
    theme: {
        darkMode: ['media'], // standard verwendet @media(user-perfered-theme:dark)
        darkMode: ['class'], // verwendet jetzt die Klasse .dark
        darkMode: ['class', '.night'], // ändert .dark zu Klasse .night
        colors: {
            // class .text-gold .bg- .border-purple 
            'purple': '#7e5bef',   
            'gold': '#FFD700',
        },
        fontFamily: {
            sans: ['Grafik', 'sans-serif'],
            serif:['Merriweather', 'serif']
        },
        extend: {
            spacing: {
                /* nur in Ausnahmen */
            }

        },
    },
    plugins: [],
    prefix: '', //'tw-',
    /* macht das Tailwind immer mit tw- im HTML class benutzt werden muss */
}
