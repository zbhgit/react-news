
/**
 * Created by Z on 2017/03/29.
 */
import React from 'react';
import {Card} from 'antd';
import { Link} from 'react-router';
import 'whatwg-fetch';

export default class PCNewsImageBlock extends React.Component {
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
		const styleImage = {
			display: "block",
			width: this.props.imageWidth,
			height: "90px"
		};
		const styleH3 = {
			maxWidth: this.props.imageWidth,
			whiteSpace: "nowrap",
			overflow: "hidden",
			textOverflow: "ellipsis"
		};
		const newsList = news.length ?
			news.map((newsItem, index) => (
				<div key={index} className="imageblock">
					<Link to={`details/${newsItem.uniquekey}`} >
						<div className="custom-image2">
							<img src={newsItem.thumbnail_pic_s} alt="" title={newsItem.title} style={styleImage}/>
						</div>
						<div className="custom-card2">
							<h3 style={styleH3}>{newsItem.title}</h3>
							<p>{newsItem.author_name}</p>
						</div>
					</Link>

				</div>
			))
			: "没有加载到新闻"
		;
		return (
			<div className="topNewsList">
				<Card title={this.props.cardTitle} bordered={true} style={{width:this.props.width}}>
					{newsList}
				</Card>
			</div>
		)
	}
}