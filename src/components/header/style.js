import { makeStyles } from '@material-ui/core/styles'


export const useStyles = makeStyles((theme) => ({
    root: {
        height: '60px',
        display: "flex",
        backgroundColor: "transparent",

    },
    activeRoot: {
        height: '60px',
        display: "flex",
        backgroundColor: theme.palette.primary.maisn,

    },
    logo: {
        flexGrow: 1,
        fontWeight: "bold",
    },
    navBar: {
        display: "none",
        fontSize: 18,
        color: "white",
        [theme.breakpoints.down('sm')]: {
            display: "inline-block",
        },
    }
    ,
    navItems: {
        [theme.breakpoints.down('sm')]: {
            display: "none"
        },
        "& ul": {
            display: "flex",
            listStyle: "none",
            "& li": {
                padding: theme.spacing(1, 2.5),
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: "14px",
            }
        },



    }
}))