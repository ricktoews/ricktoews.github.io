import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
	root: {
	},
};

class Travel extends Component {

	render() {
		const { classes } = this.props;

		return (
			<h1>Travel Adventures</h1>
		);
	}
}

export default withStyles(styles)(Travel);
