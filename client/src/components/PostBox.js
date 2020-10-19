import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({}));

export default function PostBox (props) {
    const classes = useStyles();
//key = post.id
//title = post.title
//body= post.body
    return (
        <div>
            <Card >
                <CardContent>
    <Typography></Typography>
                </CardContent>
                <CardActions>
                    <Button>Delete</Button>
                </CardActions>
            </Card>
        </div>
    )
}