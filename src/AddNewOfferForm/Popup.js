import { DialogContent, DialogTitle } from "@material-ui/core";
import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Button from "./Button";
import ActionButton from "./ActionButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { useStyles } from "./OfferStyles";
const theme = createMuiTheme({
  palette: {
    primary: {
        light: '#8d6e63',
        main: '#795548',
        dark: '#4e342e',
    },
    secondary: {
        light: '#eeeeee',
        main: '#9e9e9e',
        dark: '#424242',
    },
  contrastThreshold: 3,
  tonalOffset: 0.2,
  }});

export default function Popup(props) {
  const { children, openPopup, setOpenPopup, onSubmit, handleOnSubmit } = props;
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Dialog open={openPopup} maxWidth="xl">
        <DialogTitle>
          <div style={{ display: "flex" }}>
            <Typography variant="h5" component="div" style={{ flexGrow: 1 }}>
              Dodaj swoją ofertę
            </Typography>

            <ActionButton
              color="primary"
              onClick={() => {
                setOpenPopup(false);
              }}
            >
              <CloseIcon />
            </ActionButton>
          </div>
        </DialogTitle>
        <DialogContent>{children} </DialogContent>
        <div style={{
          display: "flex",
          justifyContent: "center"
        }}>
        <Button
            component="div"
            color="primary"
            type="submit"
            text="Dodaj"
            onSubmit={handleOnSubmit}
            className={classes.ButtonAdd}
            style={{ 
              width: "100px", 
              margin: "3px" }}
            onClick={() => {
              setOpenPopup(false);
            }}
 
          />
          <Button
            component="div"
            type="reset"
            color="primary"
            text="Resetuj"
            className={classes.ButtonReset}
            style={{ 
              width: "100px", 
              margin: "3px" }}
            onClick={() => {
              setOpenPopup(false);
            }}
          
          />
          </div>
      </Dialog>
    </ThemeProvider>
  );
}
