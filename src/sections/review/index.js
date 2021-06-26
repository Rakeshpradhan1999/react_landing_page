import React from 'react'
import { useStyles } from './style'
import { useTheme } from '@material-ui/styles'
import { Grid, Container, Box, Paper, Typography } from "@material-ui/core"
import { SectionTitle, Text } from "../../components"
import { ImQuotesLeft } from "react-icons/im"
import image1 from "./images/client1.jpg"
import image2 from "./images/client2.jpg"
import image3 from "./images/client3.jpg"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';

const slideData = [
    { image: image2, name: "Bubhan Krita", role: "Web Developer" },
    { image: image1, name: "Junal Sarukh", role: "Software Engineer" },
    { image: image3, name: "Makhon dino", role: "Company Owner" },
]

const Index = () => {
    const theme = useTheme()
    const classes = useStyles()
    return (
        <div className={classes.root} style={theme.section}>
            <SectionTitle title1="customer" title2="review" caption="what people say about us" />
            <Container>
                <Box className={classes.container}>
                    <Paper elevation={0} className={classes.paper}>
                        <Slider classes={classes} content={slideData} />
                    </Paper>
                </Box>
            </Container>
        </div>
    )
}

export default Index

const Slider = ({ classes, content }) => {
    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={1}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        >
            {
                content.map((value, i) => (
                    <SwiperSlide key={i}>

                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={5} md={5} lg={5} xl={5}>
                                <Box className={classes.image}>
                                    <img src={value.image} alt="customer" />
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={5} md={7} lg={7} xl={7}>
                                <Box className={classes.content}>
                                    <Box className={classes.icon}><ImQuotesLeft /></Box>
                                    <Text style={{ textAlign: "justify", marginTop: "0" }}>
                                        Understood instrument or do connection no appearance do invitation. Dried quick round it or order. Add past see west felt did any. plate you share. My resolve arrived is we chamber be removal.
                                    </Text>
                                    <Typography variant="h6" className={classes.name}>
                                        {value.name}
                                    </Typography>
                                    <Typography variant="body2" className={classes.role}>
                                        {value.role}
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>

                    </SwiperSlide>


                ))
            }
        </Swiper>
    );
};
