import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider() {
  const marks = [
    {
      value: 1,
      label: 'łatwy',
    },
    {
      value: 3,
      label: 'średni',
    },
    {
      value: 5,
      label: 'trudny',
    },
  ];

  const classes = useStyles();
  const [value, setValue] = useState([1,5]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        Poziom trudności
      </Typography>
      <Slider
        value={value}
        defaultValue={[1,5]}
        onChange={handleChange}
        valueLabelDisplay="off"
        aria-labelledby="discrete-slider"
        getAriaValueText={valuetext}
        marks={marks}
        step={2}
        min={1}
        max={5}
      />
    </div>
  );
}