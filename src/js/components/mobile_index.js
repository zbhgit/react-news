/**
 * Created by Z on 2017/03/24.
 */
import React from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import MobileNav from './mobile_nav';

export default class MobileIndex extends React.Component{
	render(){
		return (
			<div>
				<MobileHeader></MobileHeader>
				<MobileNav></MobileNav>
				<MobileFooter></MobileFooter>
			</div>
		)
	}
}