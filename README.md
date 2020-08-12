# React Weather App 

## Installation

Install Rails

```sudo gem install rails```

Create new project using React as webpack, skip support for test or coffee script

```rails new ruby-react-weather  -T --webpack=react --skip-coffee```

Add React router

```yarn add react-router-dom```

Add Weather Controller

```rails g controller Weather index```

Add Material UI for basic UI

```yarn add @material-ui/core  @material-ui/icons```

Run the rails server

```rails s```


## How it works

* I have used webpacker for React integration. 
* And then created basic routing.
* Using functional components to keep things simple
* The JS Pack loads the React
  * React then load the App.jsx component / should be container though
  * Then App is loading routers/index for extensibility
  * routers has a route defined for / which loads Weather component
* Weather component makes the call to Geo location
  * if location exists then only make API call using fetch 
  * Once we get the response, we load the WeatherWidget function
* WeatherWidget function is free from business logic of fetching the data and renders the on the basis of props passed


There are couple of known issues as such the code is constantly tracking user's location and it will continue to update the Weather while it can be stopped after first attempt through the effects

