import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
const DATABASE_URL = 'https://dancing-app-77d2a.firebaseio.com'

export default class Carousel extends React.Component {
  state = {
    comments: []
  }
  componentDidMount() {
    fetch(`${DATABASE_URL}/ratings.json`)
    .then(response => response.json())
    .then(data => {
      const formattedData = Object.keys(data)
    .map(key => ({
      id: key,
      ...data[key]
    }))
    this.setState({
      comments: formattedData
    })
    })
  }
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
        style={{marginRight: '100px'}}
      >
        <Slider
        style={{
            width: "300px",
            height: "300px",
        
        }}>

          {this.state.comments
          .map((comment) => (
            <Slide index={comment.id} style={{textAlign: 'center', justifyContent: 'center'}}>
                        <div style={{display: 'flex', justifyContent: "center", height: '300px', alignItems: "center"}}>
                <Typography variant="h3"><i>{comment.opinion}</i><br/>
                <b>{comment.name}</b><br/>
                <Rating value={comment.rate} size="large" style={{marginBottom: '10px'}} readOnly/>
                </Typography>
                </div>
            </Slide>
          
          ))}

        </Slider>
        <div
        style={{display: 'flex', justifyContent: 'center'}}>
        <ButtonBack style={{
            border: 'none',
            width: '70px',
            height: '45px'
        }}>Back</ButtonBack>
        <ButtonNext style={{
            border: 'none',
            width: '70px',
            height: '45px'
        }}>Next</ButtonNext>
        </div>
      </CarouselProvider>
    );
  }
}