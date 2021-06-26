import React from 'react'
import { useStyles } from './style'
import { useTheme } from '@material-ui/core/styles'
import { SectionTitle } from "../../components"
import { Grid, Container, Box } from "@material-ui/core"
import { PricingCard } from '../../components'
import { AiOutlineRocket } from "react-icons/ai"
import { TiTick } from "react-icons/ti"
import { GiCutDiamond } from "react-icons/gi"

const pricingData = [
    { icon: <AiOutlineRocket />, title: "Trial version", price: "Free", priceAlt: "", list: ["update", "file compressed", "Commercial use", "2 Database", "Documentation"], btnTxt: "Try For Free", active: false },
    { icon: <TiTick />, title: "Regular", price: "$29", priceAlt: "/year", list: ["Demo File", "update", "file compressed", "Commercial use", "support", "5 Database", "Documentation"], btnTxt: "Ge started", active: true },
    { icon: <GiCutDiamond />, title: "Extended", price: "$59", priceAlt: "/year", list: ["Demo File", "update", "file compressed", "Commercial use", "support", "10 Database", "Documentation"], btnTxt: "Ge started", active: false },
]
const Index = () => {
    const theme = useTheme()
    const classes = useStyles()
    return (
        <div className={classes.root} id="pricing" style={theme.section}>
            <Container>
                <SectionTitle title1="Pricing" title2="plan" caption={"List of Our Pricing Packages"} />
                <Grid container spacing={3}>
                    {
                        pricingData.map((data, i) => (
                            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} key={i}>
                                <Box className={classes.card}>
                                    <PricingCard data={data} />
                                </Box>
                            </Grid>

                        ))
                    }
                </Grid>
            </Container>
        </div>
    )
}

export default Index
