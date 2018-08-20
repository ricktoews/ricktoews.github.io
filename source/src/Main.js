import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Switch, Route } from 'react-router-dom';
import { Home } from './Content';
import Decimal from './Decimal';
import Logophilia from './Logophilia';
import Travel from './Travel';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    background: "rgba(0,0,0,.2)",
    width: '90%',
    margin: 'auto',
  },
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/decimal' component={Decimal}/>
        <Route path='/logophilia' component={Logophilia}/>
        <Route path='/travel' component={Travel}/>
      </Switch>
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);

