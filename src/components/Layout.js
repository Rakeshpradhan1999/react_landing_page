import React from 'react'
import Header from "./header"
import { makeStyles } from "@material-ui/core/styles"
import { Footer } from "../sections"
const useStyles = makeStyles(() => ({
    root: {
        "& main": {
            minHeight: "90vh",
            height: "auto",

        }
    }
}))

const Layout = ({ children }) => {

    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Header />
            <main>
                {children}

            </main>
            <Footer />
        </div>
    )
}

export default Layout
