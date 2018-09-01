import React, { Component } from 'react';
import { MuiThemeProvider, withStyles, createMuiTheme } from '@material-ui/core/styles';

const homeCardTheme = specs => {
	return createMuiTheme({
		palette: {
			primary: {
				main: '#' + specs.primaryColor,
			},
/*
			secondary: {
				main: specs.secondaryColor,
			},
*/
		},
	});
}


const styles = (theme) => {
	return ({
	root: {
		width: 320,
		height: 400,
		backgroundColor: "#ffffff",
		float: "left",
		marginRight: 20,
	},
	topTrim: {
		height: 12,
	},
	titleBar: {
    	...theme.mixins.gutters(),
		height: 64,
		display: "flex",
		position: "relative",
		alignItems: "center",
		fontSize: "18pt",
	},
	cardContent: {
		...theme.mixins.gutters(),
		marginTop: 12,
	}
	});
};

class HomeCard extends Component {

	render() {
		const { title, primaryColor, children, classes } = this.props;
		const cardTheme = homeCardTheme({ primaryColor });
		const palette = cardTheme.palette.primary;

		return (
			<MuiThemeProvider theme={cardTheme}>
			<div className={ classes.root }>
			  <div className={ classes.topTrim } style={{backgroundColor: palette.dark}}>
              </div>
			  <div className={ classes.titleBar } style={{color: palette.contrastText, backgroundColor: palette.light}}>{ title }</div>
			  <div className={ classes.cardContent }>{ children }</div>
			</div>
			</MuiThemeProvider>
		);
	}
}
const HomeCardWrapped = withStyles(styles)(HomeCard);

export default HomeCardWrapped;
