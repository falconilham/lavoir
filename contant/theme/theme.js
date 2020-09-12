/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import { configureFonts, DefaultTheme } from 'react-native-paper';

let fontConfig = {
    default: {
        regular: {
            fontFamily: 'sans-serif',
            fontWeight: 'normal',
        },
        medium: {
            fontFamily: 'sans-serif-medium',
            fontWeight: 'normal',
        },
        light: {
            fontFamily: 'sans-serif-light',
            fontWeight: 'normal',
        },
        thin: {
            fontFamily: 'sans-serif-thin',
            fontWeight: 'normal',
        },
    },
};

let theme = {
    ...DefaultTheme,
    fonts: configureFonts(fontConfig),
    dark: true,
};

export default theme;
