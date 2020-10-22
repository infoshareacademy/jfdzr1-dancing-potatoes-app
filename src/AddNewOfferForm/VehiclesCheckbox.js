import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from './Button';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: 'white',
    width: '35%'

  },
  formControl: {
    margin: theme.spacing(3),
  },
  Button:{
    marginLeft : 'auto',
    marginRight : 'auto'
  }
}));

export default function VehiclesCheckbox(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    classic: true,
    sports: false,
    pedalo: false,
    boat: false,
    rowing: false
  });

  const handleChange = (event) => {
    setState({ ...state, openPopup, [event.target.name]: event.target.checked });
  };
  const {openPopup, setOpenPopup} = props;
  const { classic, sports, pedalo, boat, rowing } = state;
  const error = [classic, sports, pedalo, boat, rowing].filter((v) => v).length !== 2;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl} >
        <FormLabel component="legend">Dostępne łódki</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={classic} onChange={handleChange} name="classic" />}
            label="Kajaki rekreacyjne"
          />
            <FormControlLabel
            control={<Checkbox checked={sports} onChange={handleChange} name="sports" />}
            label="Kajaki sportowe"
          />
            <FormControlLabel
            control={<Checkbox checked={pedalo} onChange={handleChange} name="pedalo" />}
            label="Rowery wodne"
          />
          <FormControlLabel
            control={<Checkbox checked={boat} onChange={handleChange} name="boat" />}
            label="Łódki"
          />
          <FormControlLabel
            control={<Checkbox checked={rowing} onChange={handleChange} name="rowing" />}
            label="Łodzie wioślarskie"
          />
        </FormGroup>
        <Button 
           text = "Zapisz"
           variant = "contained"
           startIcon = {<AddIcon />}
           className = {classes.newButton}
           type = 'submit'
           />
        
      </FormControl>
    </div>
  );
}