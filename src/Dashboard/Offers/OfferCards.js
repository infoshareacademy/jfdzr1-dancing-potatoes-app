import React from "react";
import { offers } from "./OffersList";
import OfferCard from "./OfferCard";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {
  faSortAlphaDown,
  faSortAlphaUp,
  faSortAmountDownAlt,
  faSortAmountUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RangeSlider from "./DifficultySliderbar";

export default class Cards extends React.Component {
  state = {
    offers: offers,
    sorter: undefined,
    sortDirection: "",
    name: "",
    level: "",
    difficultyFilter: [],
    levelSortDirection: "",
  };

  handleChange = (event, newValue) => {
    this.setState({
      value: newValue,
    });

    console.log(this.state.value);
  };

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
      difficultyFilter: newValue,
    });
  };

  render() {
    return (
      <>
        <div
          style={{
            display: "grid",
            gridTemplateAreas: `
            'filterInput slider sortByName sortByLevel'
            `,
            alignSelf: 'center',
            width: '100%',
          }}
        >
          <TextField
            label="Filtruj po nazwie"
            value={this.state.name}
            onChange={(name) => {
              this.handleNameChange(name);
            }}
            variant="filled"
            style={{
              width: "100%",
              height: "100%",
              gridArea: "filterInput",
              padding: 'auto 0',
            }}
          />
          <RangeSlider
            handleChange={this.handleChange}
            style={{ gridArea: "slider" }}
          />
          <Button
            component="div"
            variant="contained"
            color="secondary.light"
            style={{
              // width: "200px",
              // height: "50px",
              // margin: "3px",
              // textAlign: "center",
              // marginLeft: "340px",
              gridArea: "sortByName",
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


          <Button
            component="div"
            variant="contained"
            style={{
              // width: "200px",
              // height: "50px",
              // margin: "3px",
              // textAlign: "center",
              gridArea: "sortByLevel",
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
        </div>

        {this.state.offers
          .sort(this.state.sorter)
          .filter((offer) => offer.title.includes(this.state.name))
          .filter((offer) => offer.level.includes(this.state.level))
          .map((offer) => (
            <OfferCard offer={offer} />
          ))}
      </>
    );
  }
}
