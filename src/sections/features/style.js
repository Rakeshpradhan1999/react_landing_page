import { makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles((theme) => ({
    root: {

    },
    image: {
        "& img": {
            width: "100%",

        }
    },
    icon: {
        color: theme.palette.primary.main,
        fontSize: 20,
    },
    clientContent: {
        "& h3": {
            fontWeight: 600,
            color: theme.color,
            fontSize: theme.spacing(3)
        },
        "& p": {
            color: " #666666",
            marginTop: "20px",
            textTransform: "none",
            fontWeight: 400
        }
    },
    content: {
        [theme.breakpoints.down('md')]: {
            marginTop: "20px"
        }
    }

}))