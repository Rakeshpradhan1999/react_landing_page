import React from 'react'
import { useStyles } from './style'
import { useTheme } from '@material-ui/core/styles'
import { Container, Grid, Paper, Typography, Box, IconButton } from "@material-ui/core"
import { SectionTitle } from "../../components"
import { RiMailOpenLine } from "react-icons/ri"

import image1 from "./images/m1.jpg"
import image2 from "./images/m2.jpg"
import image3 from "./images/m3.jpg"

const teamData = [
    { image: image1, name: "Ahmed Kamal", role: "Chairman of Softing" },
    { image: image2, name: "Drunal Park", role: "Manager of softing" },
    { image: image3, name: "Munia Ankor", role: "Founder of Softing" },

]

const Index = () => {
    const theme = useTheme()
    const classes = useStyles()
    return (
        <div className={classes.root} id="team" style={theme.section}>
            <Container>
                <SectionTitle title1="INNOVATIVE " title2="team" caption="Meet Our Awesome And Expert Team Members" />
                <Grid container spacing={3}>

                    {teamData.map((value, i) => (
                        <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={i}>
                            <Card classes={classes} content={value} />
                        </Grid>
                    ))}

                </Grid>
            </Container>
        </div>
    )
}

export default Index


const Card = ({ classes, content }) => (
    <Paper className={classes.card}>
        <div className={classes.imageBox}>
            <img src={content.image} alt="thumbnail" />
        </div>
        <Box className={classes.contentBox}>
            <Typography variant="h5">{content.name}</Typography>
            <Typography variant="body2">{content.role}</Typography>
            <IconButton className={classes.iconBox}><RiMailOpenLine /></IconButton>
        </Box>
    </Paper>

)

