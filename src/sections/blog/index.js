import React from 'react'
import { useStyles } from './style'
import { useTheme } from '@material-ui/styles'
import { Container, Typography, Box, Card, CardMedia, CardContent, Button, CardActions, IconButton } from '@material-ui/core'
import image1 from "./images/image1.jpg"
import image2 from "./images/image2.jpg"
import image3 from "./images/image3.jpg"
import { FaUser, FaRegCalendarAlt, FaComments } from "react-icons/fa"
import { BiChevronsRight } from "react-icons/bi"
import { Text, SectionTitle } from "../../components"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';


const cardData = [
    { image: image1, title: "attended desirous raptures declared assistance", tags: ["assets", "Earning"] },
    { image: image2, title: "Justic improve age article between projection", tags: ["success", "Product"] },
    { image: image3, title: "Prosperous continuing entreat unreserved assistance", tags: ["startup", "Business"] },
    { image: image1, title: "attended desirous raptures declared assistance", tags: ["assets", "Earning"] },
]

const Index = () => {
    const theme = useTheme()
    const classes = useStyles()
    return (
        <div className={classes.root} style={theme.section}>
            <Container>
                <SectionTitle title1="Latest" title2="blog" caption="Have a look to our latest blogs" />
                <BlogSLide classes={classes} />
            </Container>
        </div>
    )
}

export default Index


const BlogSLide = ({ classes }) => {
    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
                "640": {
                    "slidesPerView": 2,
                    "spaceBetween": 20
                },
                "768": {
                    "slidesPerView": 3,
                    "spaceBetween": 40
                },
                "1024": {
                    "slidesPerView": 3,
                    "spaceBetween": 50
                }
            }}
        >
            {
                cardData.map((v, i) => (
                    <SwiperSlide key={i}>
                        <BlogCard classes={classes} content={v} />
                    </SwiperSlide>
                ))
            }

        </Swiper>
    );
};

const BlogCard = ({ classes, content }) => (
    <Card className={classes.card}>
        <CardMedia image={content.image} title={"thumbnail"} className={classes.media} />
        <CardContent className={classes.content}>
            <Typography variant="body1" className={classes.title}>{content.title}</Typography>
            <CardActions className={classes.action}>
                <Box className={classes.actionchild}>
                    <IconButton size={"small"}>
                        <FaUser />
                    </IconButton>
                    <Typography variant="body2">user</Typography>
                </Box>
                <Box className={classes.actionchild}>
                    <IconButton size={"small"}>
                        <FaRegCalendarAlt />
                    </IconButton>
                    <Typography variant="body2">25 Jun, 2021</Typography>
                </Box>
                <Box className={classes.actionchild}>
                    <IconButton size={"small"}>
                        <FaComments />
                    </IconButton>
                    <Typography variant="body2">24</Typography>
                </Box>
            </CardActions>
            <Text>
                Friendship sufficient assistance can prosperous met. As game he show it park do. Was has unknown few certain
            </Text>
            <Box style={{ width: '100%', display: "flex", justifyContent: "flex-end" }}>
                <Button color="primary" size="small" style={{ marginLeft: "auto" }} endIcon={<BiChevronsRight />} > Read More</Button>

            </Box>
        </CardContent>

    </Card>
)