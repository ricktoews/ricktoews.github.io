import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
	root: {
	}
};

class Logophilia extends Component {
	
	render() {
		return (
			<h1>For Lovers of Words</h1>
		);
	}
}

export default withStyles(styles)(Logophilia);
