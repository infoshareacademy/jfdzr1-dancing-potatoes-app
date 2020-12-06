import React, { useState } from "react";
import { offers } from "./OffersList";
import OfferCard from "./OfferCard";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { createMuiTheme } from "@material-ui/core/styles";
import {
  faSortAlphaDown,
  faSortAlphaUp,
  faSortAmountDownAlt,
  faSortAmountUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RangeSlider from './cosik'


class Cards extends React.Component {
  state = {
    offers: offers,
    sorter: undefined,
    sortDirection: "",
    name: "",
    level: "",
    levelFilter: '',
    levelSortDirection: "",
  };

  marks = [
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

  sortByName = () => {
    if (this.state.sortDirection === "alphabetically") {
      this.setState(() => ({
        sorter: (a, b) => b.title.localeCompare(a.title),
        sortDirection: "revesedAlphabetically",
      }));
    } else {
      this.setState(() => ({
        sorter: (a, b) => a.title.localeCompare(b.title),
        sortDirection: "alphabetically",
      }));
    }
  };

  sortByLevel = () => {
    if (this.state.levelSortDirection === "fromLowToHigh") {
      this.setState(() => ({
        sorter: (a, b) => b.level.localeCompare(a.level),
        levelSortDirection: "fromHighToLow",
      }));
    } else {
      this.setState(() => ({
        sorter: (a, b) => a.level.localeCompare(b.level),
        levelSortDirection: "fromLowToHigh",
      }));
    }
  };

  handleNameChange = (name) => {
    this.setState({
      name: name.target.value,
    });
  };

  handleLevelChange = (level) => {
    this.setState({
      level: level.target.value,
    });
  };

  handleSliderChange = (event, newValue) => {
    this.setState({
      levelFilter: newValue
    })
    console.logn(newValue)
  };

  render() {

    const theme = createMuiTheme({
      palette: {
        primary: {
          light: "#8d6e63",
          main: "#795548",
          dark: "#4e342e",
        },
        secondary: {
          light: "#eeeeee",
          main: "#9e9e9e",
          dark: "#424242",
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
      },
    });
    function valuetext(value) {
      return `${value}`;
    }

    return (
      <div>
        <TextField
          label="Filtruj po nazwie"
          value={this.state.name}
          onChange={(name) => {
            this.handleNameChange(name);
          }}
          variant="filled"
          style={{
            width: "250px",
            marginRight: "8px",
            marginLeft: "20px",
            backgroundColor: "rgb(230, 250, 255)",
          }}
        />
        <TextField
          label="Filtruj po poziomie trudności"
          value={this.state.level}
          onChange={(level) => {
            this.handleLevelChange(level);
          }}
          variant="filled"
          style={{
            width: "250px",
            backgroundColor: "rgb(230, 250, 255)",
          }}
        />
        <Button
          component="div"
          variant="contained"
          color="secondary.light"
          style={{
            width: "200px",
            height: "50px",
            margin: "3px",
            textAlign: "center",
            marginLeft: "340px",
          }}
          onClick={this.sortByName}
        >
          {this.state.sortDirection === "alphabetically" ? (
            <FontAwesomeIcon icon={faSortAlphaDown} />
          ) : (
            <FontAwesomeIcon icon={faSortAlphaUp} />
          )}
          Sortuj według nazwy
        </Button>

        <Typography id="range-slider" gutterBottom>
        </Typography>
       <RangeSlider />

        <Button
          component="div"
          variant="contained"
          color="palette.primary.light"
          style={{
            width: "200px",
            height: "50px",
            margin: "3px",
            textAlign: "center",
          }}
          onClick={this.sortByLevel}
        >
          {this.state.levelSortDirection === "fromLowToHigh" ? (
            <FontAwesomeIcon icon={faSortAmountDownAlt} />
          ) : (
            <FontAwesomeIcon icon={faSortAmountUp} />
          )}
          Sortuj według trudności
        </Button>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            margin: "5px",
            width: "100%",
          }}
        >
          {this.state.offers
            .sort(this.state.sorter)
            .filter((offer) => offer.title.includes(this.state.name))
            .filter((offer) => offer.level.includes(this.state.level))
            .map((offer) => (
              <div key={offer.id}>
                <OfferCard offer={offer} />
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default Cards;
