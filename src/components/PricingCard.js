import React from 'react'
import { Paper, Typography, Box } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { CustomButton } from "./button"
const useStyles = makeStyles((theme) => ({
    root: {
        color: theme.color,
        position: "relative",
        width: "100%",
        textAlign: "center",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",

    },
    cardHead: {
        padding: "40px 0",
        borderBottom: `1px solid #e5e5e5`,
        paddingTop: "60px"
    },
    icon: {
        position: "absolute",
        top: "0%",
        left: "50%",
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        transform: "translate(-50%,-50%)",
        backgroundColor: "#fff",

        "& svg": {
            fontSize: "50px",
            marginTop: "50px",
            transform: "translateY(-50%)",
            color: "inherit"

        }
    },
    title: {
        fontWeight: 600,
        textTransform: "uppercase",

    },
    price: {
        fontWeight: 900,
        textTransform: "capitalize",
        fontSize: "50"
    },
    list: {
        textAlign: "center",
        listStyle: "none",
        textTransform: "capitalize",
        padding: 0,
        color: "#666666",
        fontWeight: 500,
        "& li": {

            margin: "10px 0",
        }

    }
}))


const PricingCard = ({ data }) => {
    const classes = useStyles()
    const theme = useTheme()

    return (
        <Paper className={classes.root}>
            <Box className={classes.icon} style={{ backgroundColor: data.active ? theme.palette.primary.main : "#fff", color: data.active ? "#fff" : theme.color }}>
                {data.icon}
            </Box>
            <Box className={classes.cardHead} style={{ backgroundColor: data.active ? theme.palette.primary.main : "#fff", color: data.active ? "#fff" : theme.color }}>
                <Typography variant="h5" className={classes.title}>
                    {data.title}
                </Typography>
                <Typography variant="h2" className={classes.price}>
                    {data.price}
                    <Typography variant="caption" className={classes.price}>
                        {data.priceAlt}
                    </Typography>
                </Typography>
            </Box>
            <Box >
                <ul className={classes.list}>
                    {data.list.map((item, i) => (
                        <li key={i} >{item}</li>

                    ))}
                </ul>
            </Box>

            <Box style={{ margin: "30px", }}>
                <CustomButton variant={data.active ? "contained" : "outlined"} color={data.active ? "primary" : "secondary"} >{data.btnTxt}</CustomButton>
            </Box>
        </Paper >
    )
}

export default PricingCard
