import React from 'react'
import { useStyles } from './style'
import { Typography, Grid, Box } from '@material-ui/core'
import { Text } from "../../components"
import { CustomButton } from "../../components/button"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';

const content = [
    { primary: 'Distrusts procuring be oh frankness existence believing instantly' },
    { primary: 'Front no party young abode state up Saved he do fruit woody' },
    { primary: 'Square new horses and put better and Sincerity collected' }
]
const Index = () => {
    const classes = useStyles()
    return (
        <div className={classes.root} >
            <Grid container item xs={12} >
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Box className={classes.bg} />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Box className={classes.content}>
                        <Typography variant="h5">successfull sories</Typography>
                        <Slider content={content} />
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Index



const Slider = ({ content }) => {
    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={1}
        >
            {
                content.map((content, i) => (
                    <SwiperSlide key={i}>
                        <Typography variant="h4">{content.primary}</Typography>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam est at dolor ad reprehenderit nam sequi. Mollitia ipsa nostrum laboriosam possimus, aperiam quis rem minus eos, eaque debitis necessitatibus provident!
                        </Text>
                        <CustomButton>Know More</CustomButton>
                    </SwiperSlide>

                ))
            }
        </Swiper>
    );
};