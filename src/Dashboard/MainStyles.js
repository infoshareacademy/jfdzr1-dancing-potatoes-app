import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 198;

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
    
  },

}));