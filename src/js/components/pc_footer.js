/**
 * Created by Z on 2017/03/27.
 */
/**
 * Created by Z on 2017/03/24.
 */
import React from 'react';
import {Col} from 'antd';
export default class PCFooter extends React.Component {

	render() {
		return (
			<footer>
				<Col span={2}></Col>
				<Col span={20} className="footer">
					&copy;2017 News. All Rights Reserved.
				</Col>

				<Col span={2}></Col>
			</footer>
		)

	}
}