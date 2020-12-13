import React from "react";
import { Switch, Route } from "react-router-dom";
import { mainStyles } from "./MainStyles";
import { withScriptjs, withGoogleMap } from "react-google-maps";
import Home from "./Home/Home.js";
import OfferCards from "./Offers/OfferCards.js";
import Map from "./Map/Map.js";
import Signup from "../SignupLogin/Signup.js";
import Login from "../SignupLogin/Login.js";

function Main() {
  const classes = mainStyles();
  const WrappedMap = withScriptjs(withGoogleMap(Map));

  return (
    <main className={classes.content}>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/kayak">
          <OfferCards />
        </Route>
        <Route path="/mapa">
            <WrappedMap
              googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyABXq7l1yJ16e4DGL-Wpup5WJ_AlIJdISk`}
              loadingElement={<div style={{ height: "100%" }} />}
              containerElement={<div style={{ height: "100%" }} />}
              mapElement={<div style={{ height: "100%" }} />}
            />
        </Route>
        <Route path='/logowanie'>
            <Login />
        </Route>
        <Route exact path='/rejestracja'>
            <Signup />
        </Route>
      </Switch>
    </main>
  );
}

export default Main;
