/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.html'],
    content: [],
    theme: {

        screens: {
            sm: '768px',
            md: '808px',
            lg: '960px',
            xl: '1200px',
        },
        fontFamily: {
            primary: 'Poppins',
            secondary: 'Lato',
        },
        // borderRadius: {
        //     50: '50%',
        // },

        extend: {
            colors: {

                light: '#f9f9f9',
                blue: '#3c91e6',
                lightBlue: '#cfe8ff',
                grey: '#eeeeee',
                darkGrey: '#aaa',
                dark: '#343e4a',
                red: '#db504a',
                yellow: '#ffce26',
                lightYellow: '#fff2c6',
                orange: '#fd7238',
                lightOrange: '#fac895',
                primaryDEFAULT: '#292f36',

                accentDEFAULT: '#cda274',
                accentsecondary: '#f4f0ec',
                accenthover: '#b88c5d',

                secondary: '#4d5053',
            }
        },
    },
    plugins: [],
}