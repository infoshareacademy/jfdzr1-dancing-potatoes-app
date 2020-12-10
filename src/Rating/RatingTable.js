import React from 'react';
import Typography from "@material-ui/core/Typography";
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';

import AddRating from "../Rating/AddRating"


const DATABASE_URL = 'https://dancing-app-77d2a.firebaseio.com'

class RatingTable extends React.Component {

    state = {
        ratingList: [],
        root: {
            display: 'flex',
            flexDirection: 'column',
            '& > * + *': {
              marginTop: '10px',
            },
          },
    }

    fetchRating = () => {
        fetch(`${DATABASE_URL}/ratings.json`)
        .then(r => r.json())
        .then(data => {
            if (!data) {
                this.setState({
                    ratingList: []
                })
            } else {
                const formattedData = Object.keys(data)
                .map(key => {
                    return {
                        id: key,
                        ...data[key]
                    }
                })
                console.log(formattedData);
                this.setState({
                    ratingList: formattedData
                })
            }
            
        })
    }

    componentDidMount() {
        this.fetchRating()
    }


    render() {
        return(
        <>
            <TableContainer 
            component={Paper}
            style={{ width: '50%' }}
            >
                <Typography variant="h3" style={{ display: 'flax', textAlign: 'center' }} >Opinie</Typography>
                    <TableHead  >
                        <TableRow  >
                            <TableCell>Autor</TableCell>
                            <TableCell>Komentarz</TableCell>
                            <TableCell>Ocena</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.ratingList.map(rating => (
                            <TableRow key={rating.id}>
                                <TableCell>{rating.name}</TableCell>
                                <TableCell>{rating.opinion}</TableCell>
                                <TableCell>
                                <div className={this.state.root}>
                                    <Rating 
                                    name="size-large" 
                                    value={rating.rate}
                                    defaultValue={0}
                                    disabled={true} 
                                    size="large"
                                    />
                                </div>
                                </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
            </TableContainer>
            <AddRating onAddOpinion={this.fetchRating}/>
        </>
        )
    }
}

export default RatingTable;