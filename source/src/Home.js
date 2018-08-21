import React, { Component } from 'react';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
	palette: {
		primary: blue,
		secondary: green,
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
			<Typography variant="display1" gutterBottom color="primary">ricktoews.me</Typography>

			<Typography variant="title" gutterBottom color="secondary">Eye-catching Quote</Typography>

			<Typography variant="body1" gutterBottom>Here's where I say wonderful things about myself, I suppose--where I toot my own horn, as it were.</Typography>

			<Typography variant="title" gutterBottom color="secondary">Interesting Bit of Trivia</Typography>

			<Typography variant="body1" gutterBottom>Here's where I say wonderful things about myself, I suppose--where I toot my own horn, as it were.</Typography>

			<Typography variant="title" gutterBottom color="secondary">Professionally Relevant</Typography>

			<Typography variant="body1" gutterBottom>Here's where I say wonderful things about myself, I suppose--where I toot my own horn, as it were.</Typography>
            </div>
		)
	}
}

export default withStyles(styles)(Home);
