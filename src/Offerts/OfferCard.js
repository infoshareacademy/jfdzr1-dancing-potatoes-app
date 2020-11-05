import {CardActions, CardContent} from '@material-ui/core';
import React from 'react';
import Card from "@material-ui/core/Card";
import Button from "../AddNewOfferForm/Button";


class OfferCard extends React.Component {

    render() {

        return (
            <div
            style={{
                display: "flex",
                width: "320px"
            }}>
                <Card className="OffersContainer"
                style={{
                    width: "100%",
                    height: "350px",
                    margin: "8px"
                }}>

                    <CardContent>
                        <h2 className="title"
                        style={{
                            textAlign: "center",
                            marginBottom: "3px"
                        }}>
                            {this.props.offer.title}
                        </h2>
                        <p style={{
                            textAlign: "center",
                            margin: "2px"
                        }}>
                          Poziom trudności: {this.props.offer.level}
                        </p>
                        <div className="imgContainer">
                            <img src={this.props.offer.imageUrl}
                                className="offerImage"
                                alt="offerImage"
                                style={{
                                    width: "100%",
                                    height: "180px"}}
                                    />
                        </div>
                    </CardContent>
                    <CardActions className="cardActions"
                    style={{display: "flex", justifyContent: "center"}}>
                       <Button 
           text = "Zobacz więcej!"
           variant = "contained"
           type = 'submit'/>
                    </CardActions>

                </Card>
            </div>
        )
    }

}

export default OfferCard;