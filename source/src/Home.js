import React, { Component } from 'react';
import { MuiThemeProvider, withStyles, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import HomeCardWrapped from './HomeCard';
import green from '@material-ui/core/colors/green';
import indigo from '@material-ui/core/colors/indigo';
import lightGreen from '@material-ui/core/colors/lightGreen';

const theme = createMuiTheme({
	palette: {
		primary: indigo,
		secondary: green
	},
});

class Home extends Component {

	render() {
		return (
            <div>
			<MuiThemeProvider theme={theme}>
			<Typography variant="display1" gutterBottom color="primary">ricktoews.me</Typography>

			<HomeCardWrapped primaryColor="76ff03" title="Eye-Catching Quote">
			  Hill House, not sane, stood alone against its hills ...
			</HomeCardWrapped>

			<HomeCardWrapped primaryColor="d500f9" title="Lifelong Autodidact">
			  <Typography variant="body1">Recently, I chose to gain some basic geographical knowledge by learning most of the world's countries and capitals. I started with Africa and worked my way through South America, Asia, and Europe. What I accomplished was the ability to identify, on a bordered map, any of the countries in these areas and name its capital.</Typography>

			  <Typography variant="body1">I also decided to learn each nation's flag.</Typography>
			</HomeCardWrapped>

			<HomeCardWrapped primaryColor="ff3d00" title="Professionally Interesting">Stuff I'm learning for work ...</HomeCardWrapped>

            </MuiThemeProvider>
            </div>
		)
	}
}

export default Home;
