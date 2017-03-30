import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import PCIndex from './js/components/pc_index'
import PCNewsDetails from './js/components/pc-news-details';
import MobileNewsDetails from './js/components/mobile_news_details';
import PCUserCenter from './js/components/pc_usercenter';
import MobileUserCenter from './js/components/mobile_usercenter';
import MediaQuery from 'react-responsive';
import MobileIndex from'./js/components/mobile_index'

class App extends React.Component {
	render() {
		return (
			<div>
				<MediaQuery query="(min-device-width:1224px)">
					<Router history={hashHistory}>
						<Route path="/" component={PCIndex}></Route>
						<Route path="/details/:uniquekey" component={PCNewsDetails}></Route>
						<Route path="/usercenter" component={PCUserCenter}></Route>
					</Router>
				</MediaQuery>
				<MediaQuery query="(max-device-width:1224px)">
					<Router history={hashHistory}>
						<Route path="/" component={MobileIndex}></Route>
						<Route path="/details/:uniquekey" component={MobileNewsDetails}></Route>
						<Route path="/usercenter" component={MobileUserCenter}></Route>
					</Router>
				</MediaQuery>
			</div>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('mainContainer')
);
