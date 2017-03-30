/**
 * Created by Z on 2017/03/29.
 */
import React from 'react';
import {Card} from 'antd';
import { Link} from 'react-router';
import 'whatwg-fetch';

export default class PCNewsBlock extends React.Component {
	constructor() {
		super();
		this.state = {
			news: ''
		}
	}

	componentWillMount() {
		let myFetchOptions = {
			method: 'GET'
		};
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions)
			.then(response => response.json())
			.then(json => this.setState({
				news: json
			}));
	}

	render() {
		const {news} = this.state;
		const newsList = news.length ?
			news.map((newsItem, index) => (
				<li key={index}>
					<Link to={`/details/${newsItem.uniquekey}`}>
						{newsItem.title}
					</Link>
				</li>
			))
			: "没有加载到新闻"
		;
		return (
			<div className="topNewsList">
				<Card>
					<ul>
						{newsList}
					</ul>
				</Card>
			</div>
		)
	}
}