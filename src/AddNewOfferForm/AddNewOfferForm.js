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
              value={values.title}
            />
          </div>
          <div style={{display: "flex", alignSelf:"center", lineHeight:1.10, width: "100%", marginTop: '20px'}}>
            <LevelModal />
            <div style={{display: "flex", width: "61%"}}>
            <TextField
              variant="outlined"
              label="Cena za osobę"
              value={values.onePerson}
              style={{marginLeft : "10px"}}
            />
            <TextField
              variant="outlined"
              label="Cena za dwie osoby"
              value={values.twoPeople}
            />
            <TextField
              variant="outlined"
              label="Cena za osobę dla grup"
              value={values.Group}
            />
          </div></div>
 
          <div style={{display: "flex", justifyContent: "center"}}>
            <div style={{display: "flex"}}>
            <TextField
              variant="outlined"
              label="W jakim mieście?"
              value={values.city}
            />
            <TextField
              variant="outlined"
              label="Na jakiej wodzie?"
              value={values.rier}
            />
            </div>
            <div style={{display: "flex"}}>
            <TextField
              variant="outlined"
              label="Podaj kod pocztowy."
              value={values.postalCode}
            />
            <TextField
              variant="outlined"
              label="Na jakiej ulicy?"
              value={values.street}
            />
            <TextField
              variant="outlined"
              label="Jaki jest numer lokalu?"
              value={values.streetNumber}
            />
            </div>
          </div>
          <div style={{display: "flex", lineHeight:1.1, justifyContent:"space-evenly"}}>
          <VehiclesModal />
          <div style={{display: "flex", width:"75%"}}>
          <TextField
            variant="outlined"
            label="Poziom trudności"
            value={values.level}
          />
          <TextField
            variant="outlined"
            label="Opisz swoje miejsce"
            value={values.description}
          />
          </div>
          </div>
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
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
