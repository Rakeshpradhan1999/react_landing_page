import { makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles((theme) => ({
    card: {
        height: "100%",
        [theme.breakpoints.down('md')]: {
            marginTop: 100,

        }
    }
}))