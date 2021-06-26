import { makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.secondary.light,

    },
    container: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"

    },
    paper: {
        maxWidth: 600,
        width: "100%",
        backgroundColor: theme.palette.secondary.light,
    },

    image: {
        width: "100%",
        height: "100%",
        "& img": {
            width: "100%",
            height: "100%"
        }
    },
    name: {
        color: theme.color,
        fontWeight: 600,
        marginBottom: 5,
        textTransform: "capitalize"
    },
    role: {
        color: theme.palette.primary.main,
        textTransform: "uppercase",
        fontWeight: 600,

    },
    icon: {
        color: theme.color,
        fontSize: theme.spacing(3),
        opacity: "0.6"
    }



}))