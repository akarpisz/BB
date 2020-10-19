import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme)=>({
    root: {
        margin: theme.spacing(6, 0, 3),
      },
      centered: {
        textAlign: "center",
      },
}));

const ContactDeveloper = () => {
    const classes = useStyles();
    return (
        <div style={{ paddingTop: "70px" }}>
            <Container >
            <Grid md>
                <Typography variant="h4" className={classes.centered}>
                    About The Developer:
                </Typography> 
                <br/>
                <Grid className={classes.centered} xs>
                    <Typography className={classes.root} >
                    <span>Andrew Karpisz is a Full-Stack Developer from the University of Denver.</span><br/>
                    <span>He specializes in the MERN stack, and is always advancing himself professionally.</span><br/>
                    <span>He can be reached at <a href="mailto:andrew.karpisz@gmail.com">andrew.karpisz@gmail.com</a> or <a href="https://www.linkedin.com/in/the-andrew-ak" target="_blank" rel="noopener noreferrer">LinkedIn</a></span>
                    </Typography>
                </Grid>
            </Grid>
            </Container>
        </div>
    )
}
export default ContactDeveloper;