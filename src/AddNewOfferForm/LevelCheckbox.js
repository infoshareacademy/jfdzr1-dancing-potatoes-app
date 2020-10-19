import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function LevelsCheckbox() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    easy: true,
    medium: false,
    hard: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { easy, medium, hard } = state;
  const error = [easy, medium, hard].filter((v) => v).length !== 2;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Wybierz poziom trudności</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={easy} onChange={handleChange} name="easy" />}
            label="Łatwy"
          />
          <FormControlLabel
            control={<Checkbox checked={medium} onChange={handleChange} name="medium" />}
            label="Średni"
          />
          <FormControlLabel
            control={<Checkbox checked={hard} onChange={handleChange} name="hard" />}
            label="Trudny"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}