/**
 * Created by Z on 2017/03/30.
 */
/**
 * Created by Z on 2017/03/30.
 */
import React from 'react';
import {Row, Col, BackTop} from 'antd';

import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';

import Comments from './common_comments';

import 'whatwg-fetch';

export default class MobileNewsDetails extends React.Component {
	constructor() {
		super();
		this.state = {
			newsItem: ''
		}
	}

	componentDidMount() {
		let myOptions = {
			method: 'GET'
		};
		fetch("http://newsapi.gugujiankong.com/handler.ashx?action=getnewsitem&uniquekey=" + this.props.params.uniquekey, myOptions)
			.then(response => response.json())
			.then(json => {
				this.setState({
					newsItem: json
				});
				console.log(this.state.newsItem);
				document.title = this.state.newsItem.title + "-News | React 驱动新闻平台";
			});
	}

	createMarkup() {
		return {__html: this.state.newsItem.pagecontent};
	}

	render() {
		return (
			<div id="mobileDetailsContainer">
				<div className="ucmobilelist">
					<MobileHeader></MobileHeader>
					<Row>
						<Col span={24}>
							<div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
							<Comments uniquekey={this.props.params.uniquekey}></Comments>
						</Col>
					</Row>
					<BackTop></BackTop>
					<MobileFooter></MobileFooter>
				</div>

			</div>
		)
	}
}