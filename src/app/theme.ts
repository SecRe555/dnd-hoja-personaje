'use client';
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    cssVariables: true,
    colorSchemes: {
        dark: true
    },  
    typography: {
        fontFamily: 'var(--font-geist-sans) var(--font-geist-mono)'
    },
    components: {
        MuiButton: {
            defaultProps: {
                "variant": "contained"
            },
            styleOverrides: {
                root: {
                    borderRadius: 15,
                    textTransform: 'none'
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderRadius: "15px"
                    }
                }
            }
        }
    }
})

export default theme;