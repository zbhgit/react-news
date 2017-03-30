/**
 * Created by Z on 2017/03/29.
 */
import React from 'react';

import {Row, Col, Tabs, Carousel} from 'antd';

import PCNewsBlock from './pc_news_block';

import PCNewsImageBlock from './pc_news_image_block';
import PCProduct from './pc_product';
const TabPane = Tabs.TabPane;

export default class PCNewsContainer extends React.Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			autoplay: true,
			slideToshow: 1
		};
		return (
			<div>
				<Row>
					<Col span={2}></Col>
					<Col span={20} className="container">
						<div className="leftContainer">
							<div className="carousel">
								<Carousel {...settings}>
									<div><img src="images/carousel_1.jpg" alt=""/></div>
									<div><img src="images/carousel_2.jpg" alt=""/></div>
									<div><img src="images/carousel_3.jpg" alt=""/></div>
									<div><img src="images/carousel_4.jpg" alt=""/></div>
								</Carousel>

							</div>
							<PCNewsImageBlock count={6} width="400px" type="shehui" cardTitle="社会" imageWidth="112px"/>
						</div>
						<Tabs className="tabs_news">
							<TabPane tab="头条新闻" key="1">
								<PCNewsBlock count={22} type="top" width="100%" bordered="false"></PCNewsBlock>
							</TabPane>
							<TabPane tab="国际" key="2">
								<PCNewsBlock count={22} type="guoji" width="100%" bordered="false"></PCNewsBlock>
							</TabPane>
						</Tabs>
						<Tabs className="tabs_product">
							<TabPane key="1">
								<PCProduct></PCProduct>
							</TabPane>
						</Tabs>
						<div>
							<PCNewsImageBlock count={8} width="100%" type="guonei" cardTitle="国内新闻" imageWidth="113px"/>
							<PCNewsImageBlock count={16} width="100%" type="yule" cardTitle="娱乐" imageWidth="113px"/>
						</div>
					</Col>
					<Col span={2}></Col>
				</Row>
			</div>
		)
	}
}