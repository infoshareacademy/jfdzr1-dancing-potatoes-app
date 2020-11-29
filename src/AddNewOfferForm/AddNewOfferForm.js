import React, { useState, useEffect } from "react";
import { Grid, TextField, makeStyles } from "@material-ui/core";
import VehiclesModal, { vehiclesModal } from "./VehiclesModal";
import LevelModal from "./LevelModal";
import { useStyles } from "./OfferStyles";
import Button from "./Button";

const DATABASE_URL = 'https://dancing-app-77d2a.firebaseio.com'


class AddNewOfferForm extends React.Component {
  constructor(props){
    super(props);
    this.state={
      id: "",
      title: "",
      onePerson: "",
      twoPeople: "",
      Group: "",
      vehicles: "",
      city: "",
      river: "",
      postalCode: "",
      street: "",
      streetNumber: "",
      description: "",
      level: "",
      imageURL: "",
    };
const {handleOnSubmit}=props  }
  
  handleOnSubmit = (event) => {
    event.preventDefault();
    const newOffer = {
      id: Math.round(Math.random() * 10),
      title: this.state.title,
      onePerson: this.state.onePerson,
      twoPeople: this.state.twoPeople,
      Group: this.state.group,
      vehicles: this.state.vehicles,
      city: this.state.city,
      river: this.state.river,
      postalCode: this.state.postalCode,
      street: this.state.street,
      streetNumber: this.state.streetNumber,
      description: this.state.description,
      level: this.state.level,
      imageURL: this.state.imageURL,
    }
    fetch(`${DATABASE_URL}/offers.json`, {
      method: 'POST',
      body: JSON.stringify(newOffer)
    })

  }
  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render(props) {
    this.onSubmit = props;
    return (
      <form  onSubmit={this.handleOnSubmit}>
        <div class="diwek">
          <TextField
            variant="outlined"
            label="Jak się nazywa Twoja firma?"
            onChange={this.handleOnChange}
            value={this.state.title}
            name="title"
          />
        </div>
        <div
          style={{
            display: "flex",
            alignSelf: "center",
            lineHeight: 1.1,
            width: "100%",
            marginTop: "10px",
          }}
        >
          <LevelModal />
          <div style={{ display: "flex", width: "81%" }}>
            <TextField
              variant="outlined"
              label="Cena za osobę"
              onChange={this.handleOnChange}
              style={{ marginLeft: "10px" }}
              value={this.state.onePerson}
              name="onePerson"
            />
            <TextField
              variant="outlined"
              label="Cena za dwie osoby"
              onChange={this.handleOnChange}
              style={{ marginLeft: "10px" }}
              name="twoPeople"
              value={this.state.twoPeople}
            />
            <TextField
              variant="outlined"
              label="Cena za osobę dla grup"
              onChange={this.handleOnChange}
              style={{ marginLeft: "10px" }}
              name="group"
              value={this.state.group}
            />
            <VehiclesModal />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <div style={{ display: "flex" }}>
            <TextField
              variant="outlined"
              label="W jakim mieście?"
              onChange={this.handleOnChange}
              name="city"
              value={this.state.city}
            />
            <TextField
              variant="outlined"
              label="Na jakiej wodzie?"
              onChange={this.handleOnChange}
              style={{ marginLeft: "10px" }}
              name="river"
              value={this.state.river}
            />
            <TextField
              variant="outlined"
              label="Podaj kod pocztowy."
              onChange={this.handleOnChange}
              style={{ marginLeft: "10px" }}
              name="postalCode"
              value={this.state.postalCode}
            />
            <TextField
              variant="outlined"
              label="Na jakiej ulicy?"
              onChange={this.handleOnChange}
              style={{ marginLeft: "10px" }}
              name="street"
              value={this.state.street}
            />
            <TextField
              variant="outlined"
              label="Jaki jest numer lokalu?"
              onChange={this.handleOnChange}
              style={{ marginLeft: "10px" }}
              name="streetNumber"
              value={this.state.streetNumber}
            />
          </div>
        </div>
        <div style={{ display: "flex", width: "100%" }}>
          <TextField
            variant="outlined"
            label="Opisz swoje miejsce"
            onChange={this.handleOnChange}
            style={{ marginTop: "10px", width: "100%" }}
            name="description"
            value={this.state.description}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            marginTop: "10px",
          }}
        ></div>
        
      </form>
    );
  }
}
export default AddNewOfferForm;
