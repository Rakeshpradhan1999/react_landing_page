import { makeStyles } from '@material-ui/core/styles'


export const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: "url(/assets/bg.png)",
        backgroundPosition: "bottom center",
        backgroundSize: "cover",
        color: theme.color

    },
    content: {
        color: "#fff",
        "& h3": {
            fontSize: theme.spacing(3),
            textTransform: "capitalize",
            marginBottom: theme.spacing(3.8),
            fontWeight: "bold",
            "& strong": {
                display: "block",
                fontWeight: 800,
                fontSize: "60px",

            }
        }
    },
    registerform: {
        boxShadow: "0 0 10px #cccccc",
        padding: theme.spacing(6),
        color: "inherit",
        [theme.breakpoints.down('md')]: {
            marginTop: "50px"
        },
        "& h5": {
            fontWeight: 500,

        },
        "& .MuiTextField-root": {
            marginTop: theme.spacing(3)
        }

    }
}))