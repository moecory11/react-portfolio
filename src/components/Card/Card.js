import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Row from "../Row/Row";
import img from "../images/weather-dashboard-screenshot.png";
import img2 from "../images/Screenshot (57).png";
import img3 from "../images/food&bev.png";
import "./style.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    margin: "15px",
    padding: "20px",
    display: "center",
    color: "black",
  },
  media: {
    height: 90,
    color: "black",
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div className="cardsRow">
      <h1 className="titles">Projects:</h1>
      <Row>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={img}
              title="Weather Dashboard"
            />
            <CardContent>
              <Typography
                color="primary"
                gutterBottom
                variant="h5"
                component="h2"
              >
                Weather Dashboard
              </Typography>
              <Typography variant="body2" color="primary" component="p">
                This project was designed to create a weather dashboard that
                gives you the forecast for the upcoming week and current
                weather.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              variant="contained"
              size="small"
              color="primary"
              href="https://github.com/moecory11/weather-dashboard"
              target="blank"
            >
              Weather Dashboard GitHub
            </Button>
          </CardActions>
        </Card>

        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={img2}
              title="Pokedex IRL"
            />
            <CardContent>
              <Typography
                color="primary"
                gutterBottom
                variant="h5"
                component="h2"
              >
                Pokedex IRL
              </Typography>
              <Typography variant="body2" color="primary" component="p">
                Allows users to create a pokedex of pokemon cards that they can
                record, track and calculate values of.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              variant="contained"
              size="small"
              color="primary"
              href="https://github.com/iGotYu/spicy-project2"
              target="blank"
            >
              Pokedex GitHub
            </Button>
          </CardActions>
        </Card>

        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={img3}
              title="Food and Bev"
            />
            <CardContent>
              <Typography
                color="primary"
                gutterBottom
                variant="h5"
                component="h2"
              >
                Food and Bev
              </Typography>
              <Typography variant="body2" color="primary" component="p">
                Created to solve the problem of what to make with all the
                mismatched food and liquor you have in the kitchen.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              variant="contained"
              size="small"
              color="primary"
              href="https://github.com/moecory11/food-bev"
              target="blank"
            >
              Food and Bev GitHub
            </Button>
          </CardActions>
        </Card>
      </Row>
    </div>
  );
}
