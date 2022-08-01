/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        screens: {
            'phone-sm': { max: '420px' },
            phone: { max: '600px' },
            tablet: { max: '767px' },
            'tablet-lg': { min: '800px' },
            'large-desktop': { min: '1200px' },
            '4k-desktop': { min: '1600px' }
        },
        extend: {
            colors: {
                'yellow-light': '#FFCE00',
                'orange-light': '#F5AD11',
                'gray-blur': '#e5e5ea',
                'gray-fade': '#f2f2f7'
            }
        }
    },
    plugins: []
};