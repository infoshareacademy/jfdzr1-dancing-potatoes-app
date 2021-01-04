import React from "react";
import { Switch, Route } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { mainStyles } from "./MainStyles";
import Map from "../Maps/Map";
import { withScriptjs, withGoogleMap } from "react-google-maps";
import Home from "../Home/Home";
import OfferCards from "../Offers/OfferCards";
import Signup from "../SignupLogin/Signup.js";
import Login from "../SignupLogin/Login.js";
import { AuthProvider } from "../contexts/AuthContext";
import { useAuth, unsubscribe } from "../contexts/AuthContext";
import firebase from "firebase";
import Button from "@material-ui/core/Button";
function Main() {
  const classes = mainStyles();
  const WrappedMap = withScriptjs(withGoogleMap(Map));
  const currentUser = useAuth();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <AuthProvider>
        <Switch>
          <Route path="/home" exact={true}>
            <Home />
          </Route>
          {/* 
                    <Route path = '/ulubione'>
                    <Typography paragraph> Ulubione </Typography>
                  </Route> */}

          <Route path="/kayak">
            <OfferCards />
          </Route>

          <Route path="/mapa">
            <div style={{ width: "100%", height: "87vh" }}>
              <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyABXq7l1yJ16e4DGL-Wpup5WJ_AlIJdISk`}
                loadingElement={<div style={{ height: "100%" }} />}
                containerElement={<div style={{ height: "100%" }} />}
                mapElement={<div style={{ height: "100%" }} />}
              />
            </div>
          </Route>
 
            <>
              <Route path="/logowanie">
                <Login />
              </Route>
              <Route exact path="/rejestracja">
                <Signup />
              </Route>
            </>
  
        </Switch>
      </AuthProvider>
    </main>
  );
}

export default Main;
