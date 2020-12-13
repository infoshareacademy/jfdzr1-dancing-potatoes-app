import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const DATABASE_URL = 'https://dancing-app-77d2a.firebaseio.com'


class AddRating extends React.Component {

  state = {
    name: "",
    opinion: "",
    rate: 0,
    open: false,
  }

  openModal = () => {
    this.setState({
        open: true,
    })
  }

  closeModal = () => {
    this.setState({
        open: false,
    })
  }

  handleOnChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = (event) => {
      event.preventDefault();
      const newOpinion = {
          name: this.state.name,
          opinion: this.state.opinion,
          rate: this.state.rate,
      }

      fetch(`${DATABASE_URL}/ratings.json`, {
          method: 'POST',
          body: JSON.stringify(newOpinion)
      }).then(() => {
          this.closeModal();
          this.props.onAddOpinion();
      })
  }

  render() {
    return (
      <>
        <Button 
        style={{ marginTop: '10px', width: '20%', }}
        variant="contained" 
        color='primary'
        onClick={this.openModal}
        >
          Dodaj opinię
        </Button>

        <Modal
                open={this.state.open}
                onClose={this.closeModal}
                closeAfterTransition
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                    <Fade in={this.state.open}>
                        <Paper style={{ padding: '20px' }} >
                        <Typography variant='h6'>Dodaj opinię</Typography>
                            <form
                            onSubmit={this.handleOnSubmit}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: '300px'
                            }}
                            >
                                <TextField 
                                    label='Imę' 
                                    name='name' 
                                    onChange={this.handleOnChange} 
                                    value={this.state.name} />
                                <TextField 
                                    label='Komentarz'
                                    name='opinion'
                                    onChange={this.handleOnChange} 
                                    value={this.state.opinion} />
                                    <div style={{ marginTop: '10px' }}>
                                      <Rating 
                                      name="rate" 
                                      value={this.state.rate}
                                      defaultValue={0} 
                                      size="large"
                                      onChange={this.handleOnChange}
                                      />
                                    </div> 
                                <Button
                                    style={{marginTop: '10px'}}
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                >
                                    Wyślij
                                </Button>
                            </form>
                        </Paper>
                    </Fade> 
                </Modal>
      </>
      
    );
  }
  
}

export default AddRating;
