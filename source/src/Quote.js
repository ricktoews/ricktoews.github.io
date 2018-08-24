import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
});

class Quote extends Component {
	render() {
		return (
			<MuiThemeProvider theme={theme}>
				<Typography variant="body1" gutterBottom>Cool Quote Here</Typography>
			</MuiThemeProvider>
		);
	}
}

export default Quote;
