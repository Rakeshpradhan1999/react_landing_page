import React from 'react'
import { useStyles } from './style'
import { useTheme } from '@material-ui/core/styles'
import { Container, Grid, Typography, Paper, TextField } from "@material-ui/core"
import { BasicButton } from '../../components/button'

const Index = () => {
    const theme = useTheme()
    const classes = useStyles()
    return (
        <div className={classes.root} style={theme.section} id="home">
            <Container style={{ marginTop: "100px" }}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <div className={classes.content}>
                            <Content />
                        </div>
                    </Grid>
                    <Grid item md={2} lg={2} xl={2} />
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <Paper className={classes.registerform}>
                            <Typography variant="h5">Sign up today and receive<br /><span style={{ color: theme.palette.primary.main, fontWeight: 'bold' }}> 30 days</span> FREE trial.</Typography>
                            <form action="">
                                <Input type="text" placeholder="Name" label="Name" />
                                <Input type="email" placeholder="Email" label="Email" />
                                <Input type="password" placeholder="Password" label="Password" />

                                <BasicButton type="submit">Register For Free</BasicButton>
                            </form>

                        </Paper>
                    </Grid>

                </Grid>
            </Container>
        </div>
    )
}

export default Index

const Content = () => (
    <>
        <Typography variant="h3">
            It's time to create your
            <strong>
                Own Bussiness scheme
            </strong>
        </Typography>
        <Typography variant="body1">Celebrated delightful an especially increasing instrument am. Indulgence contrasted sufficient.</Typography>
        <BasicButton variant="outlined" color="secondary">Get Started</BasicButton>
    </>
)
const Input = ({ label, type, placeholder }) => (
    <>
        <TextField variant="filled" size="small" label={label} required fullWidth type={type} placeholder={placeholder} />
    </>
)






