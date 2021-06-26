import { makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles((theme) => ({
    form: {
        marginTop: theme.spacing(2)
    },
    avatar: {
        color: theme.palette.primary.main,
        backgroundColor: "#f6f6f6",
        border: "1px solid #f9f9f9",
    },
    contactData: {
        [theme.breakpoints.down('md')]: {
            marginTop: "100px"
        }
    }
}))