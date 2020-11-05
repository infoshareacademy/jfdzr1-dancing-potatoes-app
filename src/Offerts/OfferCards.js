import React from "react";
import { offers } from "./OffersList";
import OfferCard from "./OfferCard";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button'

class Cards extends React.Component {
  state = {
    offers: offers,
    name: "",
    level: "",
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
    return (
      <div>
        <TextField
          label="Filtruj po nazwie"
          value={this.state.name}
          onChange={(name)=>{this.handleNameChange(name)}}
          variant='filled'
          style={{
              width: "250px",
              marginRight: "8px",
              marginLeft: "20px",
              backgroundColor: "rgb(230, 250, 255)"
          }}
        />
        <TextField
          label="Filtruj po poziomie trudności"
          value={this.state.level}
          onChange={(level) => {this.handleLevelChange(level)}}
          variant='filled'
          style={{
              width:"250px",
              backgroundColor: "rgb(230, 250, 255)"
              
          }}
        />
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
