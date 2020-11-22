import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Link,
  Typography,
  Box,
  Divider,
} from "@material-ui/core";
import API from "../../util/API";
import PostBox from "../PostBox";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(6, 0, 3),
  },
  centered: {
    textAlign: "center",
  },
}));

const Main = () => {
  const [userPosts, setPosts] = useState([]);

  useEffect(() => {
    //API call for posts
    API.getPosts().then((res) => {
      console.log(res.data);

      setPosts(res.data);
    });
  }, []);
  const classes = useStyles();

  return (
    <div style={{ paddingTop: "40px" }}>
      <Container component="main" maxWidth="md">
        <Grid>
          <Typography
            className={classes.root}
            variant="h3"
            color="textSecondary"
            style={{ textAlign: "center" }}
          >
            Your Board
          </Typography>
          <Box variant="span" className={classes.centered}>
            {" "}
            <Link href="/addpost">Add Post</Link>
          </Box>
          <Divider />
          {/* this is where the array of posts will be mapped */}
          {userPosts.map((p) => {
            return (
              <div key={p.id}>
                <PostBox key={p.id} props={p} />
                <br />
              </div>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default Main;
