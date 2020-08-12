import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import WarningIcon from '@material-ui/icons/Warning';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: 25,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function WeatherWidget(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const { data } = props;

  if (props.error)
    return (
      <Card className={classes.root}>
        <CardContent>
          
          <Typography variant="h5">
          <WarningIcon/> {props.error}
        </Typography>
        </CardContent>
      </Card>
    );

 

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {data.name || "Unknown"}
        </Typography>
        <Typography variant="h5" component="h2">
          {data.weather && data.weather[0].description || "Unknown"}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Wind Speed: {data.wind &&data.wind.speed || "Unknown"}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          target="_blank"
          href={`https://openweathermap.org/city/${data.id}`}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
