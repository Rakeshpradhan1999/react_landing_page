import { makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles((theme) => ({
    root: {},
    imageBox: {
        width: "100%",
        height: "100%",

        "& img": {
            width: "100%",
            height: "100%",
            objectFit: "fill",

        },
    },
    contentBox: {
        marginTop: "-5px",
        boxShadow: "0 0 10px #cccccc",
        textAlign: "center",
        padding: theme.spacing(3),
        color: theme.color,
        position: "relative",
        "& h5": {
            textTransform: "capitalize",
            color: "inherit",
            fontWeight: "bold",

        },

        "& p": {
            textTransform: "uppercase",
            color: theme.palette.primary.main,
            fontWeight: "bold",


        },


    },
    iconBox: {
        boxShadow: "0 0 10px #cccccc",
        position: "absolute",
        left: " 50%",
        top: 0,
        transform: "translate(-50%, -50%)",

        backgroundColor: theme.palette.secondary.main,
        "&:hover": {
            backgroundColor: theme.palette.secondary.main
        },
        "& svg": {
            fontSize: "24px",
            color: theme.palette.primary.main


        }
    }
}))