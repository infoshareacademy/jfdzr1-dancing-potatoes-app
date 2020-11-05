import React from 'react';
import { offers } from './OffersList';
import OfferCard from './OfferCard';
import TextField from "@material-ui/core/TextField";


class Cards extends React.Component {

    state =  {
        offers : offers,
        filter: ''
    }

    handleOnChange = (event) => {
        this.setState({
            filter: event.target.value
        })
    }

render() {
    return <div>
    <TextField
    label="Filter"
    value={this.state.filter}
    onChange={this.handleOnChange}
/>
    <div
    style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        margin: "5px",
        width: "100%"
    }}>

            {this.state.offers
            .filter(offer => offer.title.includes(this.state.filter))
            .map(offer => (
                <div key={offer.id}>
                    <OfferCard offer={offer} />
                </div>
            ))}

    </div>
    </div>
}
}

export default Cards;