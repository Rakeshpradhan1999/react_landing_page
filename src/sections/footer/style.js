import { makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: 120,

        "& .MuiListItem-gutters": {
            paddingLeft: 0,
            paddingRight: 0,

        }
    }, logo: {
        fontSize: 30,
        margin: "20px 0",
        fontWeight: 600,
        color: theme.color
    },
    icon: {
        backgroundColor: "transparent",
        color: theme.color,
        border: `1px solid rgba(0,0,0,0.3) `,
        marginRight: 10
    },
    iconBox: {
        display: "flex",
        marginTop: 20,
        alignItems: "center"
    },
    linkTitle: {
        fontWeight: 600,
        color: theme.color,
        textTransform: "uppercase",
    },
    linkText: {
        fontSize: 12,
        color: "#999999",
        transition: "all 0.5s",
        cursor: "pointer",
        "&:hover": {
            color: theme.palette.primary.main
        }
    }, contactList: {
        "& .MuiListItem-root": {
            "& .MuiListItemIcon-root": {
                color: theme.palette.primary.main
                , fontSize: "30px"
            }
        }
    }, footer: {
        padding: 20,
        backgroundColor: "#f6f6f6",
        textAlign: "center"
    },
    gap: {
        [theme.breakpoints.down('md')]: {
            marginTop: "50px"
        }
    }
}))