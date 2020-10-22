import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import LevelCheckbox from "./LevelCheckbox";
import ActionButton from "./ActionButton";
import CloseIcon from "@material-ui/icons/Close"

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function LevelModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [ openModal, setOpenModal ] = useState(false);
  return (
    <div>
      <button type="button" 
      className="LevelButton" 
      onClick={() => setOpenModal(true)}>
        Wybierz poziom trudności
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open = {openModal}
        onClose={handleClose}
        onRequestClose={()=> setOpenModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
       
          <LevelCheckbox>
          

          </LevelCheckbox>
      
      </Modal>
    </div>
  );
}
