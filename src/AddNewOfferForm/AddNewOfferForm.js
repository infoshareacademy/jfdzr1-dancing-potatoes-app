import React, { useState, useEffect } from "react";
import { Grid, TextField, makeStyles } from "@material-ui/core";
import VehiclesModal, { vehiclesModal } from "./VehiclesModal";
import LevelModal from "./LevelModal";
import { useStyles } from "./OfferStyles";
import Button from "./Button";

const initialValues = {
  id: 0,
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

export default function AddNewOfferForm() {
  const classes = useStyles();
  const [values, setValues] = useState(initialValues);

  return (
    <form className={classes.root}>
          <div class="diwek">
            <TextField
              variant="outlined"
              label="Jak się nazywa Twoja firma?"
              value={setValues.title}
            />
          </div>
          <div style={{display: "flex", alignSelf:"center", lineHeight:1.10, width: "100%", marginTop: '10px'}}>
            <LevelModal />
            <div style={{display: "flex", width: "81%"}}>
            <TextField
              variant="outlined"
              label="Cena za osobę"
              value={setValues.onePerson}
              style={{marginLeft : "10px"}}
            />
            <TextField
              variant="outlined"
              label="Cena za dwie osoby"
              value={setValues.twoPeople}
              style={{marginLeft : "10px"}}
            />
            <TextField
              variant="outlined"
              label="Cena za osobę dla grup"
              value={setValues.Group}
              style={{marginLeft : "10px"}}
            />
            <VehiclesModal />
          </div></div>
 
          <div style={{
            display: "flex", 
            justifyContent: "center",
            marginTop: "10px"}}>
            <div style={{display: "flex"}}>
            <TextField
              variant="outlined"
              label="W jakim mieście?"
              value={setValues.city}
            />
            <TextField
              variant="outlined"
              label="Na jakiej wodzie?"
              value={setValues.rier}
              style={{marginLeft : "10px"}}
            />
            <TextField
              variant="outlined"
              label="Podaj kod pocztowy."
              value={setValues.postalCode}
              style={{marginLeft : "10px"}}
            />
            <TextField
              variant="outlined"
              label="Na jakiej ulicy?"
              value={setValues.street}
              style={{marginLeft : "10px"}}
            />
            <TextField
              variant="outlined"
              label="Jaki jest numer lokalu?"
              value={setValues.streetNumber}
              style={{marginLeft : "10px"}}
            />
            </div>
          </div>
          <div style={{display: "flex", width:"100%"}}>
          <TextField
            variant="outlined"
            label="Opisz swoje miejsce"
            value={setValues.description}
            style={{marginTop : "10px", width: "100%"}}
          />
          </div>
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%", marginTop:"10px" }}
        >
          <Button
            component="div"
            type="submit"
            text="Dodaj"
            className={classes.ButtonAdd}
            style={{ display: "flex", margin: "3px" }}
          />
          <Button
            component="div"
            type="reset"
            color="secondary"
            text="Resetuj"
            className={classes.ButtonReset}
            style={{ display: "flex", margin: "3px" }}
          />
        </div>
    </form>
  );
}
