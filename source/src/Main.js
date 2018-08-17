import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Switch, Route } from 'react-router-dom';
import { Roster, Schedule, Home } from './Content';
import Phi from './Phi';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: '1024px',
    margin: 'auto',
  }
});

function Main (props) {
    const { classes } = props;

    return (
    <Paper className={classes.root}>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/phi' component={Phi}/>
        <Route path='/roster' component={Roster}/>
        <Route path='/schedule' component={Schedule}/>
      </Switch>
    </Paper>
    )
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Main);
