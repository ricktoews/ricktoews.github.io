import React, { Component } from 'react';
import { MuiThemeProvider, withStyles, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import Quote from './Quote';

const theme = createMuiTheme({
	palette: {
		primary: indigo,
		secondary: green
	},
});


const styles = {
	root: {
	}
};

class Home extends Component {

	render() {
		return (
            <div>
			<MuiThemeProvider theme={theme}>
			<Typography variant="display1" gutterBottom color="primary">ricktoews.me</Typography>

			<Typography variant="title" gutterBottom color="secondary">Eye-catching Quote</Typography>

			<Quote />

			<Typography variant="title" gutterBottom color="secondary">Interesting Bit of Trivia</Typography>

			<Typography variant="body1" gutterBottom>Here's where I say wonderful things about myself, I suppose--where I toot my own horn, as it were.</Typography>

			<Typography variant="title" gutterBottom color="secondary">Professionally Relevant</Typography>

			<Typography variant="body1" gutterBottom>Here's where I say wonderful things about myself, I suppose--where I toot my own horn, as it were.</Typography>
            </MuiThemeProvider>
            </div>
		)
	}
}

export default Home;
