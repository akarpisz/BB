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
    return (
        <div>
            <Container>
            <Grid>
                <Typography>
                </Typography> 
            </Grid>
            </Container>
        </div>
    )
}
export default ContactDeveloper;