import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Nav from './Nav';
import Main from './Main';

const style = ({
  root: {
    background: "url(/media/images/iceland.jpg)",
    filter: "grayscale(80%)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  },
});

const App = (props) => {
	const { classes } = props;

	return (
    <div className={classes.root}>
      <Nav />
      <Main />
    </div>
	);
}

export default withStyles(style)(App);
