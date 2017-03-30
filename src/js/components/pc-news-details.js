/**
 * Created by Z on 2017/03/30.
 */
import React from 'react';
import {Row, Col,BackTop} from 'antd';
// import {Router, Route, Link, browserHistory} from 'react-router';
import PCHeader from './pc-header';
import PCFooter from './pc_footer';
import PCNewsImageBlock from './pc_news_image_block';
import Comments from './common_comments';
import 'whatwg-fetch';

export default class PCNewsDetails extends React.Component {
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
				document.title = this.state.newsItem.title + "-News | React 驱动新闻平台";
			})
	}

	createMarkup() {
		return {__html: this.state.newsItem.pagecontent};

	}

	render() {
		return (
			<div>
				<PCHeader></PCHeader>
				<Row>
					<Col span={2}/>
					<Col span={14}>
						<div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
						<Comments uniquekey={this.props.params.uniquekey}></Comments>
					</Col>
					<Col span={6}>
						<PCNewsImageBlock count={40} type="top" width="100%" cardTitle="相关新闻" imageWidth="15opx"></PCNewsImageBlock>
					</Col>
					<Col span={2}/>
				</Row>
				<BackTop></BackTop>
				<PCFooter></PCFooter>
			</div>
		)
	}
}