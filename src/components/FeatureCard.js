import React from 'react'
import { Paper, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "60px 30px",
        textAlign: "center",
        color: theme.color,
        boxShadow: " 0 0 10px #cccccc",
        borderRadius: 8,
        borderTopRightRadius: 30,
        "& svg": {
            color: theme.palette.primary.main,
            fontSize: 50,
            marginBottom: 20,
        },
        "& h6": {
            marginBottom: 20,

        },
        "& p": {
            lineHeight: "26px",
            fontSize: 14,
            color: theme.color
        }

    }
}))



const FeatureCard = ({ icon, title, text = "Right my front it wound cause fully am sorry if. She jointure goodness interest debating did outweigh." }) => {
    const classes = useStyles()
    return (
        <Paper className={classes.root} >
            {icon}
            <Typography variant="h6">
                {title}
            </Typography>
            <Typography variant="body2">{text}</Typography>
        </Paper>
    )
}

export default FeatureCard
