import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const bb_red = '#9E0E06';
const bb_blue = '#2A3F75';
const error = '#FFBE00';
const bb_ivory = '#fffff0'
const standardWhite = '#fff'
const standardBlack = '#404040'
//const bb_earth: '#4C3E31';



// $breakpoint: 675px;

const fancyFont = '"Fruktur", cursive;';
const mainFont = "'Roboto', sans - serif;";


// A custom theme for this app
const theme = {
    palette: {
        mode:'light',
        primary: {
            main: bb_blue,
            contrastText: standardWhite
        },
        secondary: {
            main: bb_red,
            contrastText: standardWhite
        },
        error: {
            main: error,
            contrastText: standardBlack
        },
        text: {
            primary: standardBlack
        },
        background: {
            paper: bb_ivory,
            default: standardWhite,
        },
        divider: bb_blue
    },
    typography: {
        fontFamily: mainFont,
        lineHeight: "1.6",
        h1:{
            fontSize: "2rem"
        },
        h2: {
            fontSize: "1.7em",
            fontFamily: fancyFont
        },
        h3: {
            fontSize: "1.5em"
        },
        label: {
            fontFamily: fancyFont
        }
    }
} as const;


declare module '@mui/material/styles' {
    interface TypographyVariants {
        label: React.CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        label?: React.CSSProperties;
    }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        label: true;
    }
}
export default responsiveFontSizes(createTheme(theme));
