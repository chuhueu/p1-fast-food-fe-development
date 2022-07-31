/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        screens: {
            'phone-sm': { max: '420px' },
            phone: { max: '600px' },
            tablet: { max: '767px' }
        },
        extend: {
            colors: {
                'yellow-light': '#FFCE00',
                'orange-light': '#F5AD11',
                'gray-blur': '#e5e5ea'
            }
        }
    },
    plugins: []
};