import { DialogContent, DialogTitle } from "@material-ui/core";
import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Button from "./Button";
import ActionButton from "./ActionButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors/grey";
import { brown } from "@material-ui/core/colors/brown";
const theme = createMuiTheme({
  palette: {
    primary: grey,
    secondary: brown,
  },
  contrastThreshold: 3,
  tonalOffset: 0.2,
});

export default function Popup(props) {
  const { children, openPopup, setOpenPopup } = props;
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
        <DialogContent dividers>{children}</DialogContent>
      </Dialog>
    </ThemeProvider>
  );
}
