// Easy Bank Theme
import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
    colors: {
        "primary_1": "#2d2f3d",
        "primary_2": "hsl(136, 65%, 51%)",
        "primary_3": "hsla(192, 70%, 51%, 0.7)",
        "neutral_1": "hsl(233, 8%, 62%)",
        "neutral_2": "hsl(220, 16%, 96%)",
        "neutral_3": "hsl(0, 0%, 98%)",
        "white": "hsl(0, 0%, 100%)"
    },
    // breakpoints for mobile and desktop
    breakpoints: {
        sm: '17em',         // smallest screen size supported
        xl: '90em',
    },
    // Easy bank font family
    fonts: {
        heading: `'Open Sans', sans-serif`,
        body: `'Open Sans', sans-serif`,
    },
});
