import React from "react";
import {
  Grid,
  Divider,
  Link,
  Typography,
  Box,
  Container,
  CssBaseline,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
//import { compose, spacing, palette } from "@material-ui/system";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(6, 0, 3),
  },
  centered: {
    textAlign: "center",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div style={{ paddingTop: "40px" }}>
      <CssBaseline />
      <Container component="main" maxWidth="md">
        <Grid>
          <Typography
            className={classes.root}
            variant="h3"
            color="textSecondary"
            style={{ textAlign: "center" }}
          >
            Welcome To BBoard &#x1F601;
          </Typography>
          <Divider />
          <Typography variant="h6" color="textSecondary">
            <Box variant="span" className={classes.centered}>
              {" "}
              <Link href="/signin">Sign in</Link> or{" "}
              <Link href="/signup">sign up</Link> to get started!
            </Box>
          </Typography>
        </Grid>
      </Container>
    </div>
  );
};
export default Home;
