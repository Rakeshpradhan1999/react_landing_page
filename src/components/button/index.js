import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
    root: {
        padding: "10px 40px",
        fontSize: "14px",
        fontWeight: "bold",

        borderRadius: "30px",
        margin: "30px 10px 0 0 ",

        "&.MuiButton-contained": {
            "&:hover": {
                backgroundColor: theme.palette.primary.main,

            }
        },

        "&.MuiButton-outlined": {
            border: "2px solid",
            transition: "all 0.5s",
            "&:hover": {
                backgroundColor: "#ffffff",
                border: "2px solid #fff",
                color: theme.color
            }
        }
    },
    CustomButtonRoot: {
        padding: "10px 40px",
        fontSize: "14px",
        fontWeight: "bold",
        borderRadius: "5px",
        margin: "30px 10px 0 0 ",

        "&.MuiButton-containedPrimary": {
            "&:hover": {
                backgroundColor: theme.palette.primary.main,
            }

        },

        "&.MuiButton-outlinedSecondary": {
            border: `2px solid ${theme.color}`,
            color: theme.color,
            transition: " all 0.5s",
            "&:hover": {
                backgroundColor: theme.color,
                border: `2px solid ${theme.color}`,
                color: "#fff",
            }
        }
    }



}))


export const BasicButton = ({ children, variant = "contained", color = "primary", ...props }) => {
    const classes = useStyles()
    return (
        <Button variant={variant} color={color} className={classes.root} {...props}>
            {children}
        </Button>
    )
}

export const CustomButton = ({ children, variant = "contained", color = "primary", ...props }) => {
    const classes = useStyles()
    return (
        <Button variant={variant} color={color} className={classes.CustomButtonRoot} {...props}>
            {children}
        </Button>
    )
}



