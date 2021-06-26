import React from 'react'
import { useStyles } from './style'
import { Grid, Container, Avatar, Typography, Divider, Box, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core'
import { Text } from "../../components"
import { FaFacebookF, FaTwitter, FaHome, FaPhoneAlt } from "react-icons/fa"
import { AiFillDribbbleCircle, AiFillInstagram, AiFillMail } from "react-icons/ai"

const linkData = [
    { title: "Company", links: ["Home", "About us", "company History", "Features", "Blog Page"] },
    { title: "Resources", links: ["Career", "LeaderShip", "Strategy", "Services", "History"] }
]

const Index = () => {

    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={6} lg={3} xl={3} className={classes.gap}>
                        <FirstGrid classes={classes} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={3} xl={3} className={classes.gap}>
                        <LinkList classes={classes} content={linkData[0]} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={3} xl={3} className={classes.gap}>
                        <LinkList classes={classes} content={linkData[1]} />
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={3} xl={3} className={classes.gap}>
                        <LastGrid classes={classes} />
                    </Grid>

                </Grid>
            </Container>
            <Box className={classes.footer}>
                <Typography variant='caption'> &#169; Copyright 2019. All Rights Reserved By solocode</Typography>
            </Box>
        </div>
    )
}

export default Index

const FirstGrid = ({ classes }) => (
    <Box>
        <Typography variant="h6" className={classes.logo}> Logo Here</Typography>
        <Text>Celebrated conviction stimulated principles day.
            Sure fail or in said west. Right my front it wound cause fully am sorry if.
            She jointure goodness interest debating did outweigh.
        </Text>
        <Divider />
        <Box className={classes.iconBox} >
            <Avatar variant="square" className={classes.icon} >
                <FaFacebookF />
            </Avatar>
            <Avatar variant="square" className={classes.icon}>
                < FaTwitter />
            </Avatar>
            <Avatar variant="square" className={classes.icon}>
                <AiFillInstagram />
            </Avatar>
            <Avatar variant="square" className={classes.icon}>
                <AiFillDribbbleCircle />
            </Avatar>
        </Box>
    </Box>

)

const LinkList = ({ classes, content }) => (
    <Box>
        <Typography variant='h6' className={classes.linkTitle}>
            {content.title}
        </Typography>
        <List >
            {
                content.links.map((link) => (
                    <ListItem key={link}>
                        <ListItemText primary={link} className={classes.linkText} />
                    </ListItem>

                ))
            }
        </List>
    </Box>
)


const contactData = [
    { icon: <FaHome />, primary: "website", secondary: "www.xyz.com" },
    { icon: <AiFillMail />, primary: "Email", secondary: "support@xyz.com" },
    { icon: <FaPhoneAlt />, primary: "Phone", secondary: "+44737733636" },
]
const LastGrid = ({ classes }) => (
    <Box >
        <Typography variant="h6" className={classes.linkTitle}>
            CONTACT INFO
        </Typography>
        <Text>
            Possible offering at contempt mr distance stronger an. Attachment excellence announcing
        </Text>
        <List className={classes.contactList}>
            {
                contactData.map((v, i) => (
                    <ListItem key={i}>
                        <ListItemIcon>
                            {v.icon}
                        </ListItemIcon>
                        <ListItemText primary={v.primary} secondary={v.secondary} />
                    </ListItem>

                ))
            }
        </List>

    </Box>

)