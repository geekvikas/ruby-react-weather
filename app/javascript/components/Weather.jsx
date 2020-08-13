import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import WeatherWidget from "./WeatherWidget";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  AppBar,
  Typography,
  Button,
	Paper,
	Toolbar
} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  location: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  widgetContainer: {
    fontSize: 14,
		
  },
}));

export default function Weather() {
  const classes = useStyles();
  const [weather, setWeather] = useState({});
  const [error, setError] = useState(null);
  const mockAPI = require("./mockapi.json");
  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) {
      setError("Geolocation is not supported");
      return;
    }
    const watcher = geo.watchPosition(onChange, onError);
    return () => geo.clearWatch(watcher);
  }, []);


  
  const onChange = ({ coords }) => {
    if (coords && coords.latitude) {
      const lat = coords.latitude;
      const lon = coords.longitude;
      

      const apiUrl = `/api/v1/weather?lat=${lat}&lon=${lon}`;
      
      fetch(apiUrl)
        .then((response,error) => {
            if(error)
              setError(error)
            return response.json()
        })
        .then((data) => {
          if (data.cod == 200) setWeather(data);
          else setWeather(mockAPI);
        });
    }
  };

  const onError = (error) => {
    setError(error.message);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Weather App
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        <Paper elevation={3}>
          <div className={classes.widgetContainer}>
            {<WeatherWidget data={weather} error={error}/>}
          </div>
        </Paper>
      </Container>
    </div>
  );
}

      