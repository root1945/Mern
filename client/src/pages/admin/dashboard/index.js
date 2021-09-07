import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
//import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import imgAdmin from '../../../assets/img/imgAdmin.png'
import MenuAdmin from '../../../components/menu.admin';
import Copyright from '../../../components/footer.admin'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  }
}));

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MenuAdmin title={'Dashboard'}/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="sm" className={classes.container}>
          <Grid container spacing={3}>  
          <img src={imgAdmin} alt=" " />
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}

