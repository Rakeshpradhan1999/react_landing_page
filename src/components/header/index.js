import React, { useState } from 'react'
import { AppBar, Toolbar, Box, Typography, IconButton, Container } from '@material-ui/core'
import { useStyles } from './style'
import { GiHamburgerMenu } from "react-icons/gi"
const Header = () => {
    const [active, setActive] = useState(false)
    const classes = useStyles(active)

    const scrollHandler = () => {
        if (window.scrollY >= 50) {
            setActive(true)
        } else {
            setActive(false)
        }
    }


    window.addEventListener('scroll', scrollHandler)



    return (
        <AppBar className={!active ? classes.root : classes.activeRoot} position="fixed" >
            <Container >
                <Toolbar>
                    <Typography variant="body1" className={classes.logo}>
                        Logo
                    </Typography>
                    <Box className={classes.navItems}>
                        <ul>
                            <li>
                                <a href="#home">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#features">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="#pricing">
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="#team">
                                    Team
                                </a>
                            </li>
                            <li>
                                <a href="#contact">
                                    Contact
                                </a>
                            </li>

                        </ul>
                    </Box>
                    <IconButton className={classes.navBar}>
                        <GiHamburgerMenu />
                    </IconButton>

                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
