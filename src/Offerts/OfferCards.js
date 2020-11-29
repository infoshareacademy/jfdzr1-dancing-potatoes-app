import React from "react";
import OfferCard from "./OfferCard";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const DATABASE_URL = 'https://dancing-app-77d2a.firebaseio.com'


class Cards extends React.Component {
  state = {
    offers: [],
    sorter: undefined,
    name: "",
    level: "",
  };

  componentDidMount() {
    fetch(`${DATABASE_URL}/offers.json`)
    .then(response => response.json())
    .then(data => {
        const formattedData = Object.keys(data)
    .map(key => ({
      id: key,
      ...data[key]
    }));
    this.setState({
      offers: formattedData
    })
    })
  }

  sortByName = () => {
    this.setState(() => ({
      sorter: (a, b) => a.title.localeCompare(b.title),
    }));
  };

  sortByLevel = () => {
    this.setState(() => ({
      sorter: (a, b) => a.level.localeCompare(b.level),
    }));
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
            marginLeft: "340px"
          }}
          onClick={this.sortByName}
        >
          Sortuj według nazwy
        </Button>
        <Button
          component="div"

          variant="contained"
          color= "palette.primary.light"
          style={{
            width: "200px",
            height: "50px",
            margin: "3px",
            textAlign: "center",

          }}
          onClick={this.sortByLevel}

        >
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
