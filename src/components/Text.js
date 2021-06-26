import React from 'react'
import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    root: {
        color: "#666666",
        lineHeight: "26px",
        margin: "0 0 15px",
        marginTop: "20px",
        textTransform: "none",
        fontWeight: 400,
    }
}))

const Text = ({ children, ...props }) => {
    const classes = useStyles()
    return (
        <Typography variant="body2" className={classes.root} {...props}>
            {children}
        </Typography>
    )
}

export default Text
