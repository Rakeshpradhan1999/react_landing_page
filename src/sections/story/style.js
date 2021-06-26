import { makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 50,
        backgroundColor: "#f6f6f6"
    },
    bg: {
        backgroundImage: "url(/assets/successbg.jpg)",
        backgroundRepeat: "no-repeat",
        minHeight: "400px",
        height: "100%",
        width: "100%",
        backgroundSize: "cover",

    },
    content: {
        padding: 80,
        [theme.breakpoints.down('sm')]: {
            padding: 20
        },
        "& h5": {
            color: theme.palette.primary.main,
            fontWeight: 600,
            textTransform: "uppercase",
            fontSize: "18px",
            marginBottom: theme.spacing(3)
        },
        "& h4": {
            color: theme.color,
            fontWeight: 600,
            marginBottom: theme.spacing(3),
            lineHeight: 1.2,
        },
        "& button": {
            marginTop: theme.spacing(2)
        }


    }



}))