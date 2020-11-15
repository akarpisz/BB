import React,{useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";
import API from "../../util/API";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(6, 0, 3),
  },
  centered: {
    textAlign: "center",
  },
}));

const Main = () => {

  useEffect(()=>{
      console.log("useEffect hook");
      //API call for posts
     
      API.getPosts()
  })  
  const classes = useStyles();

  return (
    <div style={{paddingTop: "40px"}}>
      <Container component="main" maxWidth="md">
        <Grid>
          <Typography
            className={classes.root}
            variant="h3"
            color="textSecondary"
            style={{ textAlign: "center" }}
          >
              Your Board
              {/* this is where the array of posts will be mapped */}
          </Typography>
        </Grid>
      </Container>
    </div>
  );
};

export default Main;
