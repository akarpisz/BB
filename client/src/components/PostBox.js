import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Divider } from "@material-ui/core";
import API from "../util/API";
const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 14,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  body: {
    fontSize:12,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2)
},
}));

export default function PostBox({ props }) {
  const classes = useStyles();

  const handleDel = (e) => {
    e.preventDefault();
  };
  //key = post.id
  //title = post.title
  //body= post.body
  return (
    <div>
      <Card key={props.id}>
        <CardContent>
          <Typography className={classes.title} variant="h6" component="h2">
            {props.title}
          </Typography>
          <Divider />

          <Typography className={classes.body} variant="body2" component="p">
            {props.body}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined" color="secondary" onClick={handleDel}>Delete</Button>
        </CardActions>
      </Card>
    </div>
  );
}
