import { makeStyles } from '@material-ui/core/styles';

export const mainStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      width: '100%',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      margin: '0 80px'
      
    },
    // logo: {
    //   margin: 'auto',
    //   width: '85px',
    // },
    // backgraundMenu: {
    //   backgroundImage: `url(${HomeImageBackgraund})`,
    // },
    // menuTextStyle: {
    //   color: 'white',
    //   margin: '29px 0',
    // },

}));