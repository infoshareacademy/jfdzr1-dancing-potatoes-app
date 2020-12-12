import React, { useState, useEffect } from "react";
import { Grid, TextField, makeStyles } from "@material-ui/core";
import VehiclesModal, { vehiclesModal } from "./VehiclesModal";
import LevelModal from "./LevelModal";
import { useStyles } from "./OfferStyles";
import {default as UUID} from "node-uuid";import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import Button from "./Button";
const DATABASE_URL = "https://dancing-app-77d2a.firebaseio.com";

export default class AddNewOfferForm extends React.Component {
state = {
      title: "",
      id: UUID.v4(),
      offer:[
        {
            type: "kajak jednoosobowy",
            numberOfPeople: 1,
            price: 15
        },
        {
            type: "kajak dwusobowy",
            numberOfPeople: 2,
            price: 25
        },
        {
            type: "kajak group",
            numberOfPeople: 10,
            price: 66
        },
        {
            type: "rowerek 4 osobowy",
            numberOfPeople: 4,
            price: 12
        }
      ],
    level: "",
    location: {},
    imageUrl: "",
    description: ""
  };

  handleOnChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
}

  handleOnLocationChange = (event) => {
    this.setState({ location: {...this.state.location,  [event.target.name]: event.target.value}})
  }
  handleOnPriceChange = (event) => {
        let pricing = this.state.offer.map((offer) => {
          console.log(offer.type)
          return event.target.name == offer.type;
        
        })
        console.log(pricing)
        .then(this.setState({offer: {...this.state.offer, [pricing]: event.target.value}}))
  }

handleOnSubmit = (event) => {
  event.preventDefault();

  fetch(`${DATABASE_URL}/offers.json`, {
      method: 'POST',
      body: JSON.stringify(this.state)
  }).then(() => {
      this.props.setOpenPopup();
  })
}

  render() {
    const { setOpenPopup } = this.props;
    return (
      <form className={this.classes}
      onSubmit={this.handleOnSubmit}
      >
        <div class="diwek">
     
          <TextField
            variant="outlined"
            label="Jak się nazywa Twoja firma?"
            value={this.state.title}
            name="title"
            onChange={this.handleOnChange}
            required
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
         <FormControl component="fieldset">
      <FormLabel component="legend">Poziom trudności</FormLabel>
      <RadioGroup aria-label="level" name="level" value={this.state.level} onChange={this.handleOnChange}>
        <FormControlLabel value="łatwy" control={<Radio />} label="Łatwy" />
        <FormControlLabel value="średni" control={<Radio />} label="Średni" />
        <FormControlLabel value="trudny" control={<Radio />} label="Trudny" />      </RadioGroup>
    </FormControl>
          <div style={{ display: "flex", width: "81%" }}>
            <TextField
              variant="outlined"
              label="Cena za kajak jednoosobowy"
              name="kajak jednoosobowy"
              value={this.state.price}
              style={{ marginLeft: "10px" }}
              onChange={this.handleOnPriceChange}
              required
            />
            <TextField
              variant="outlined"
              label="Cena za kajak dwuosobowy"
              name="kajak dwuosobowy"
              value={this.state.price}
              style={{ marginLeft: "10px" }}
              onChange={this.handleOnPriceChange}
              required
            />
            <TextField
              variant="outlined"
              label="Cena za osobę dla grup"
              name="kajak group"
              value={this.state.price}
              style={{ marginLeft: "10px" }}
              onChange={this.handleOnPriceChange}
              required
            />
              <TextField
              variant="outlined"
              label="Cena za rower wodny"
              name="rowerek 4 osobowy"
              value={this.state.price}
              style={{ marginLeft: "10px" }}
              onChange={this.handleOnPriceChange}
              required
            />
           
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
              name="city"
              value={this.state.city}
              onChange={this.handleOnLocationChange}
              required
            />
            <TextField
              variant="outlined"
              label="Na jakiej wodzie?"
              value={this.state.river}
              name="river"
              style={{ marginLeft: "10px" }}
              onChange={this.handleOnLocationChange}
              required
            />
            <TextField
              variant="outlined"
              label="Podaj kod pocztowy."
              value={this.state.postalCode}
              style={{ marginLeft: "10px" }}
              name="postalCode"
              onChange={this.handleOnLocationChange}
              required
            />
            <TextField
              variant="outlined"
              label="Na jakiej ulicy?"
              value={this.state.street}
              style={{ marginLeft: "10px" }}
              onChange={this.handleOnLocationChange}
              required
              name="street"
            />
            <TextField
              variant="outlined"
              label="Jaki jest numer lokalu?"
              value={this.state.streetNumber}
              style={{ marginLeft: "10px" }}
              onChange={this.handleLocationOnChange}
              name="streetNumber"
              required
            />
          </div>
        </div>
        <div style={{ display: "flex", width: "100%" }}>
          <TextField
            variant="outlined"
            label="Opisz swoje miejsce"
            value={this.state.description}
            style={{ marginTop: "10px", width: "100%" }}
            onChange={this.handleOnChange}
            name="description"
            required
          />  <TextField
          variant="outlined"
          label="Dodaj adres URL zdjęcia"
          value={this.state.imageUrl}
          name="imageUrl"
          onChange={this.handleOnChange}
          required
        />
        </div>
     
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            component="div"
            color="primary"
            type="submit"
            text="Dodaj"
            // className={this.classes.ButtonAdd}
            style={{
              width: "100px",
              margin: "3px",
            }}
            onClick={this.handleOnSubmit}
          />
          <Button
            component="div"
            type="reset"
            color="primary"
            text="Resetuj"
            // className={this.classes.ButtonReset}
            style={{
              width: "100px",
              margin: "3px",
            }}
            onClick={() => {
              setOpenPopup(false);
            }}
          />
        </div>
      </form>
    );
  }
}
