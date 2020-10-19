import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
import LogoWioslo from '../img/logo_wioslo.png';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import RowingIcon from '@material-ui/icons/Rowing';
import MapIcon from '@material-ui/icons/Map';
import { useStyles } from './nav-styles';
import { Switch, Route, Link } from 'react-router-dom';

export default function MiniDrawer() {
  const classes = useStyles();
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
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar >
        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          
            {/* <Typography  className={classes.toolbar}>
              Wiosło 
            </Typography>

            <Typography  className={classes.toolbar}>
              Oferta
            </Typography> */}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar} >
          <img className={classes.logo} src={LogoWioslo} />
            <IconButton onClick={handleDrawerClose} >
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
        </div>
        {/* <Divider /> */}
        <List className={classes.backgraundMenu}>
            <ListItem button component = {Link} to = '/home' className={classes.menuTextStyle}>
              <ListItemIcon className={classes.menuTextStyle}>
                <HomeIcon className={classes.menuTextStyle}/>
              </ListItemIcon>
              <ListItemText primary={'Home'} />
            </ListItem>
            
            <ListItem button component = {Link} to = '/ulubione' className={classes.menuTextStyle}>
              <ListItemIcon className={classes.menuTextStyle}>
                <FavoriteIcon className={classes.menuTextStyle}/>
              </ListItemIcon>
              <ListItemText primary={'Ulubione'} />
              </ListItem>

            <ListItem button component = {Link} to = '/kayak' className={classes.menuTextStyle}>
              <ListItemIcon className={classes.menuTextStyle}>
                <RowingIcon className={classes.menuTextStyle}/>
              </ListItemIcon>
              <ListItemText primary={'Kayak'} />
            </ListItem>
        
            <ListItem button component = {Link} to = '/mapa' className={classes.menuTextStyle}>
              <ListItemIcon className={classes.menuTextStyle}>
                <MapIcon className={classes.menuTextStyle}/>
              </ListItemIcon>
              <ListItemText primary={'Mapa'} />
            </ListItem>
             
        </List>
        {/* <Divider /> */}
        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </Drawer>
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
  );
}