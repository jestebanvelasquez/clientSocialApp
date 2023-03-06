import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme, } from "@mui/material/styles";




 const colorTokens = {
    grey: {
        0: "#FFFFFF",
        10: "#F6F6F6",
        50: "#F0F0F0",
        100: "#E0E0E0",
        200: "#C2C2C2",
        300: "#A3A3A3",
        400: "#858585",
        500: "#666666",
        600: "#4D4D4D",
        700: "#333333",
        800: "#1A1A1A",
        900: "#0A0A0A",
        1000: "#000000",
    },
    primary: {
        50: "#E6FBFF",
        100: "#CCF7FE",
        200: "#99EEFD",
        300: "#66E6FC",
        400: "#33DDFB",
        500: "#00D5FA",
        600: "#00A0BC",
        700: "#006B7D",
        800: "#00353F",
        900: "#001519",
    },
};

// configurando el tema Mui:

const themeConfig = (mode) => {
    return {
        palette: {
            mode: mode,
            ...(mode === 'dark') ?
                {
                    // configuracion modo dark:
                    primary: {
                        dark: colorTokens.primary[200],
                        main: colorTokens.primary[500],
                        light: colorTokens.primary[800],
                    },
                    neutral: {
                        dark: colorTokens.grey[100],
                        main: colorTokens.grey[200],
                        mediunMain: colorTokens.grey[300],
                        medium: colorTokens.grey[400],
                        light: colorTokens.grey[700]
                    },
                    background: {
                        default: colorTokens.grey[900],
                        alt: colorTokens.grey[800]
                    }
                }
                :
                {
                    // configuracion modo light:
                    primary: {
                        dark: colorTokens.primary[700],
                        main: colorTokens.primary[500],
                        light: colorTokens.primary[50],
                    },
                    neutral: {
                        dark: colorTokens.grey[700],
                        main: colorTokens.grey[500],
                        mediunMain: colorTokens.grey[400],
                        medium: colorTokens.grey[300],
                        light: colorTokens.grey[50]
                    },
                    background: {
                        default: colorTokens.grey[10],
                        alt: colorTokens.grey[0]
                    }
                }
        },
        typography: {
            fontFamily: ['Rubik', 'san-serif',].join(','),
            fontSize: 12,
            h1: {
                fontFamily: ['Rubik', 'san-serif',].join(','),
                fontSize: 40,
            },
            h2: {
                fontFamily: ['Rubik', 'san-serif',].join(','),
                fontSize: 32,
            },
            h3: {
                fontFamily: ['Rubik', 'san-serif',].join(','),
                fontSize: 24,
            },
            h4: {
                fontFamily: ['Rubik', 'san-serif',].join(','),
                fontSize: 20,
            },
            h5: {
                fontFamily: ['Rubik', 'san-serif',].join(','),
                fontSize: 16,
            },
            h6: {
                fontFamily: ['Rubik', 'san-serif',].join(','),
                fontSize: 14,
            }
        }

    }
}



const ThemeApp = ({ children } ) => {

    const mode = useSelector(state => state.mode);
    const theme = useMemo(() => createTheme(themeConfig(mode), [mode]))


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
    )
}

export default ThemeApp

