import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core/'

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
        marginBottom: 150,
        marginTop: "-5px",
        color: theme.color,
        position: "relative",
        "& h5": {
            fontWeight: 800,
            marginBottom: 10,
            textTransform: "uppercase",
            color: theme.color,
            letterSpacing: 0,
            fontSize: 30,
            "& span": {
                color: theme.palette.primary.main,
            }

        },
        "& p": {
            fontSize: 18,
            letterSpacing: 0,
            color: "inherit",
            marginBottom: "15px"

        },
        "&::after": {
            content: "''",
            position: "absolute",
            background: theme.palette.primary.main,
            bottom: -25,
            height: "2px",
            left: " 50 %",
            marginLeft: "-25px",
            width: "50px",

        }

    }

}))


const SectionTitle = ({ title1 = "Awesome", title2 = "Features", caption = "CheakOut Our Leatest Features" }) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Typography variant="h5">
                {title1}<span style={{ marginLeft: "5px" }}>{title2}</span>
            </Typography>
            <Typography variant="body2" >
                {caption}
            </Typography>
        </div>
    )
}

export default SectionTitle
