import { makeStyles } from '@material-ui/core/styles'


export const useStyles = makeStyles((theme) => ({
    root: {
        height: '60px',
        display: "flex",
        alignItems: 'center',
        backgroundColor: "transparent",
        transition: "all 0.5s",

    },
    activeRoot: {
        height: '60px',
        display: "flex",
        alignItems: 'center',
        backgroundColor: theme.palette.secondary.main,
        color: theme.color,
        transition: "all 0.5s",
        "& svg": {
            color: theme.color
        }

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