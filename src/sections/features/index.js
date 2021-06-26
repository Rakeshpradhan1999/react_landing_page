import React from 'react'
import { useStyles } from './style'
import { useTheme } from "@material-ui/core/styles"
import { SectionTitle, FeatureCard, SideTitle, Text } from "../../components"
import { Grid, Typography, Box, List, ListItem, ListItemIcon, ListItemText, Container } from "@material-ui/core"
import { FiMonitor } from "react-icons/fi"
import { FaRegChartBar } from "react-icons/fa"
import { BiSupport } from "react-icons/bi"
import { IoSpeedometerOutline } from "react-icons/io5"
import { TiTick } from "react-icons/ti"
import { BasicButton } from "../../components/button"


import Slider from '../../components/Slider'
import image1 from "./images/co1.png"
import image2 from "./images/co2.png"
import image3 from "./images/co3.png"
import image4 from "./images/co4.png"
import image5 from "./images/co5.png"
import image6 from "./images/co6.png"
const images = [image1, image2, image3, image4, image5, image6]


const cardData = [
    { icon: <FiMonitor />, title: "Monitoring" },
    { icon: <BiSupport />, title: "Support Chat" },
    { icon: <FaRegChartBar />, title: "System Analysis" },
    { icon: <IoSpeedometerOutline />, title: "First Run" },
]
const listData = [
    { primary: "ROCKET FAST", secondary: "Elderly is detract tedious assured private", },
    { primary: "CUSTOM FRAMEWORK", secondary: "Do travelling companions contrasted", },
    { primary: "MINIMAL DESIGN", secondary: "Mistress strongly remember up", }
]

const Index = () => {
    const theme = useTheme()
    const classes = useStyles()
    return (
        <Container>
            <div className={classes.root} style={theme.section} id="features">
                <Grid container spacing={3} item xs={12}>
                    <Grid item xs={12} sm={12} md={6} >
                        <Box className={classes.clientContent}>
                            <Typography variant="h3">We're Trusted by <span style={{ color: theme.palette.primary.main, fontSize: "30px" }}>2500+</span> Customer</Typography>
                            <Typography variant="body2">Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.</Typography>
                        </Box>

                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <Slider images={images} />
                    </Grid>

                </Grid>

                <CardSection />
                <Box mt={10}>
                    <Grid container item spacing={5}>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Box className={classes.image} >
                                <img src="/assets/sideImage.png" alt="featureImage" />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <div className={classes.content}>
                                <SideTitle />
                                <Text>
                                    Both rest of know draw fond post as. It agreement defective to excellent. Feebly do engage of narrow. Extensive repulsive belonging depending if promotion be zealously as. Preference inquietude ask now are dispatched led appearance. Small meant in so doubt hopes.
                                </Text>
                                <List>
                                    {
                                        listData.map((value, index) => (
                                            <ListItem key={index}>
                                                <ListItemIcon className={classes.icon}><TiTick /></ListItemIcon>
                                                <ListItemText primary={value.primary} secondary={value.secondary} />
                                            </ListItem>

                                        ))
                                    }
                                </List>
                                <BasicButton>Read More</BasicButton>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </Container>
    )
}




export default Index





const CardSection = () => (
    <Grid container spacing={3}>
        <Grid item xs={12}>
            <Box mt={15} style={{ textAlign: "center" }}>
                <SectionTitle />
            </Box>
        </Grid>
        <Grid container item xs={12} spacing={3}>
            {cardData.map((value, i) => (
                <Grid item xs={12} sm={6} md={6} lg={3} xl={3} key={i}>
                    <FeatureCard title={value.title} icon={value.icon} />
                </Grid>

            ))}

        </Grid>
    </Grid>
)