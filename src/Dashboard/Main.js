import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { mainStyles } from './MainStyles'
import { useTheme } from '@material-ui/core/styles';

function Main() {
        const classes = mainStyles();
        const theme = useTheme();
        const [open, setOpen] = React.useState(false);

        const handleDrawerOpen = () => {
            setOpen(true);
          };
        
          const handleDrawerClose = () => {
            setOpen(false);
          };

        return (
            <div className={classes.root}>
                <main className={classes.content} >
                <div className={classes.toolbar} />
                <Switch> 
                    <Route path = '/home'>
                        <Typography paragraph> Home </Typography>
                    </Route>

                    <Route path = '/ulubione'>
                        <Typography paragraph> Ulubione </Typography>
                    </Route>

                    <Route path = '/kayak'>
                        <Typography paragraph> Kayak </Typography>
                    </Route>

                    <Route path = '/mapa'>
                        <Typography paragraph> Mapa </Typography>
                    </Route>
                
                </Switch>
                </main>
            </div>
        )
}

export default Main;