import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    root: {
        "& h6": {
            color: theme.palette.primary.main,
            fontWeight: 600,
            textTransform: "uppercase",
            marginBottom: 10,
        },

        "& h4": {
            color: theme.color,
            fontWeight: 600,

            lineHeight: 1.4

        },

    }
}))

const SideTitle = ({
    title = "why choose us", subtitle = "Designed for startups", subtitle2 = " with expert developer" }) => {

    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Typography variant="h6" >{title}</Typography>
            <Typography variant="h4">{subtitle}</Typography>
            <Typography variant="h4">{subtitle2}</Typography>
        </div>
    )
}

export default SideTitle
