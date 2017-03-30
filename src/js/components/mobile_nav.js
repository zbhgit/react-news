/**
 * Created by Z on 2017/03/29.
 */

import React from 'react';
import {Tabs,Carousel} from 'antd';
import MobileList from './mobile_list';
const TabPane = Tabs.TabPane;

export default class MobileNav extends React.Component {

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
				<Tabs>
					<TabPane tab="头条" key="1">
						<Carousel {...settings}>
							<div><img src="images/carousel_1.jpg" alt=""/></div>
							<div><img src="images/carousel_2.jpg" alt=""/></div>
							<div><img src="images/carousel_3.jpg" alt=""/></div>
							<div><img src="images/carousel_4.jpg" alt=""/></div>
						</Carousel>
						<MobileList type="top" count="20"></MobileList>
					</TabPane>
					<TabPane tab="社会" key="2">
						<MobileList type="shehui" count="20"></MobileList>

					</TabPane>
					<TabPane tab="国内" key="3">
						<MobileList type="guonei" count="20"></MobileList>

					</TabPane>
					<TabPane tab="国际" key="4">
						<MobileList type="guoji" count="20"></MobileList>

					</TabPane>
					<TabPane tab="娱乐" key="5">
						<MobileList type="yule" count="20"></MobileList>

					</TabPane>
					<TabPane tab="体育" key="6">
						<MobileList type="tiyu" count="200"></MobileList>

					</TabPane>
					<TabPane tab="科技" key="7">
						<MobileList type="keji" count="20"></MobileList>
					</TabPane>
				</Tabs>
			</div>
		)

	}
}