import { makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles((theme) => ({
    root: {

    },
    card: {
        height: '100%',
    },
    media: {
        width: "100%",
        height: "300px",
    },
    title: {
        lineHeight: 1.4,
        fontWeight: 600,
        textTransform: "capitalize",
        transition: "all 0.5s",
        marginBottom: "20px",
        "&:hover": {
            color: theme.palette.primary.main
        }
    },
    actionchild: {
        display: "flex",
        alignItems: "center",
        "& p": {
            textTransform: "uppercase",
            fontWeight: 400,
            color: "#999999"

        }
    },




}))