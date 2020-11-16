import React, { useState } from "react";
import {
    Grid,
    Divider,
    Link,
    Typography,
    Box,
    Container,
    Button,
    TextField,
    FormControlLabel,
  } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import API from "../../util/API";
  //import { compose, spacing, palette } from "@material-ui/system";
  
  const useStyles = makeStyles((theme) => ({
    root: {
      margin: theme.spacing(6, 0, 3),
    },
    centered: {
      textAlign: "center",
    },
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
  }));
  
 
   
const AddPost = () => {
    const classes = useStyles();
    const [newPost, setPost] = useState({
        title: "",
        body: ""
    })
    const history = useHistory();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
    
        setPost({
          ...newPost,
          [name]: value,
        });
      };

    const handleSubmit = () => {
        API.newPost(newPost).then((res)=>{
            if(res.status === 200) {
                history.push("/main");
            }
        })
    }


    return (
    <div style={{ paddingTop: "60px" }}>
        <Container>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="title"
            label="Title"
            name="title"
            type="text"
            onChange={handleInputChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            multiline={true}
            rows={5}
            rowsMax={10}
            required
            fullWidth
            name="body"
            label="Body"
            type="text"
            id="body"
            onChange={handleInputChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Post
          </Button>
          
        </form>
        </Container>
    </div>
    )
}

export default AddPost;