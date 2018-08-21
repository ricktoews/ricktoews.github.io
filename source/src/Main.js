import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Decimal from './Decimal';
import Logophilia from './Logophilia';
import Travel from './Travel';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    background: "rgba(255,255,255,.5)",
    width: '90%',
    margin: 'auto',
    minHeight: 'calc(100vh - 200px)',
  },
});

class Main extends Component {

	render() {
		const { classes } = this.props;

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
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);

