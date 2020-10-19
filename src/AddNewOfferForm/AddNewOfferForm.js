import React, { useState, useEffect } from "react";
import { Grid, TextField, makeStyles } from '@material-ui/core';
import VehiclesModal, {vehiclesModal} from "./VehiclesModal";
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
    <form className = {classes.root}> 
      <Grid container>
        <Grid item xs={6}>
            <TextField
            variant="outlined"
            label="Jak się nazywa Twoja firma?"
            value={values.title}
            />
            <LevelModal />
            <div>
             <TextField
            variant="outlined"
            label="Cena za osobę"
            value={values.onePerson}
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
            </div>
            <VehiclesModal />
            <div>
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
            
        </Grid>
        <Grid item xs={6}></Grid>
        <div>
          <Button
          type="submit"
          text="Submit"
          />
           <Button
          type="reset"
          color="secondary"
          text="Reset"
          />
        </div>
      </Grid>
    </form>
  );
}
