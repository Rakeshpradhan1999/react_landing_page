import React from 'react'
import { useStyles } from './style'
import { useTheme } from '@material-ui/styles'
import { SectionTitle } from "../../components"
import { Container, TextField, Grid, Typography, List, ListItem, ListItemAvatar, ListItemText, Avatar } from "@material-ui/core"
import { BasicButton } from "../../components/button"
import { RiSendPlaneFill, RiMailOpenFill } from "react-icons/ri"
import { FaPhone, FaMapMarkedAlt } from "react-icons/fa"


const Index = () => {
    const theme = useTheme()
    const classes = useStyles()
    return (
        <div className={classes.root} id="contact" style={theme.section}>
            <Container>
                <SectionTitle title1={"Contact"} title2={"us"} caption="Do you have any questions?" />
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                        <Typography variant="h4" style={{ fontWeight: 600, color: theme.color }}>Let's Lalk About Your Idea</Typography>
                        <Form classes={classes} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <Location theme={theme} classes={classes} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Index

const formData = [
    { xs: 12, type: "text", pholder: "Name", label: "Name", multiline: false },
    { xs: 6, type: "email", pholder: "Email", label: "Email", multiline: false },
    { xs: 6, type: "number", pholder: "Phone", label: "Phone", multiline: false },
    { xs: 12, type: "text", pholder: "Tell Us About Project", label: "Tell us About Project", multiline: true },

]


const Form = ({ classes }) => (
    <div>
        <form action="" className={classes.form}>
            <Grid item container spacing={2}>
                {
                    formData.map((input, i) => (
                        <Grid item xs={input.xs} key={i}>
                            <TextField type={input.type} required fullWidth variant="outlined" placeholder={input.pholder} label={input.label} multiline={input.multiline} rows={input.multiline ? 10 : 0} />
                        </Grid>
                    ))
                }

            </Grid>
            <BasicButton endIcon={<RiSendPlaneFill />}>send message</BasicButton>
        </form>

    </div>
)

const locationData = [
    {
        title: "Office location", icon: < FaMapMarkedAlt />, text: "22 Baker Street,London, United Kingdom,W1U 3BW"
    },
    {
        title: "Phone", icon: < FaPhone />, text: "+44-20-7328-4499"
    },
    {
        title: "Email", icon: < RiMailOpenFill />, text: "info@yourdomain.com"
    },
]
const Location = ({ theme, classes }) => (
    <div className={classes.contactData}>
        {
            locationData.map((v, i) => (
                <List key={i}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={classes.avatar}>
                                {v.icon}
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={v.title} secondary={v.text} />
                    </ListItem>
                </List>
            ))
        }
    </div>
)