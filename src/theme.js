import { createMuiTheme } from "@material-ui/core"

export const theme = createMuiTheme({
    color: "#323a45",

    overrides: {
        MuiCssBaseline: {
            "@global": {
                html: {

                    scrollBehavior: "smooth",
                },
                body: {
                    fontFamily: "'Poppins', 'sans-serif'",
                    backgroundColor: "#fff"
                },
                a: {
                    color: "inherit",
                    textDecoration: "none",
                    display: "inline-block"
                }
            }
        }
    },
    section: {
        minHeight: "100vh",
        padding: "80px 0",


    },
    typography: {
        fontFamily: ["'Poppins', 'sans-serif'"].join(","),
    },
    palette: {
        primary: {
            main: "#FF5A6E",
            contrastText: "#fff"

        },
        secondary: {
            main: "#fff",
            light: "#f9f9f9",
            contrastText: "#323a45"
        }

    }
})