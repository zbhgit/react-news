/**
 * Created by Z on 2017/03/30.
 */
import React from 'react';
import {Row, Col} from 'antd';
import {Tabs, Card, Modal, Upload} from 'antd';
import 'whatwg-fetch';
import PCHeader from './pc-header';
import PCFooter from './pc_footer';

const TabPane = Tabs.TabPane;

class PCUserCenter extends React.Component {

	constructor() {
		super();
		this.state = {
			usercollections: '',
			usercomments: '',
			previewImage: '',
			previewVisible: false
		}
	}

	componentDidMount() {
		let myFetchOptions = {
			method: 'GET'
		};
		fetch('http://newsapi.gugujiankong.com/handler.ashx?action=getuc&userid=' + localStorage.userid, myFetchOptions)
			.then(response => response.json())
			.then(json => {
				this.setState({
					usercollections: json
				});
			});
		fetch('http://newsapi.gugujiankong.com/handler.ashx?action=getusercomments&userid='+localStorage.userid,myFetchOptions)
			.then(response=>response.json())
			.then(json=>{
				this.setState({
					usercomments: json
				});
			});
	}

	render() {
		const props = {
			action: 'http://newapi.gugujiankong.com/handler.ashx',
			headers: {
				"Access-Control-Allow-Origin": "*"
			},
			listType: "picture-card",
			defaultFileList: [{
				uid: -1,
				name: 'done',
				url: 'https://os.alipayobjects.com/rmsporttal/NDbkJhpzmLxtPhB.png',
				thumbUrl: 'https://os.alipayobjects.com/rmsporttal/NDbkJhpzmLxtPhB.png'
			}],
			onPreview: (file) => {
				this.setState({
					previewImage: file.url,
					previewVisible: true
				})
			}
		};
		const {usercollections,usercomments} = this.state;
		const usercollectionList = usercollections.length ?
			usercollections.map((uc, index) => (
				<Card key={index} title={uc.uniquekey} extra={<a target="_blank" href={`/#/details/${uc.uniquekey}`}>查看</a>}>
					<p>{uc.Title}</p>
				</Card>
			))

			: "您还没有收藏任何新闻";
		const usercommentsList = usercomments.length ?
			usercomments.map((comment, index) => (
				<Card key={index} title={`于${comment.datetime}评论了文章${comment.uniquekey}`} extra={<a href={`/#/details/${comment.uniquekey}`}>查看</a>}>
					<p>{comment.Comments}</p>
				</Card>
			))

			: "您还没有收藏任何评论。";
		return (
			<div>
				<PCHeader/>
				<Row>
					<Col span={2}/>
					<Col span={20}>
						<Tabs>
							<TabPane tab="我的收藏列表" key="1">
								<div className="comment">
									<Row>
										<Col span={24}>
											{usercollectionList}
										</Col>
									</Row>
								</div>
							</TabPane>
							<TabPane tab="我的评论列表" key="2">
								<div className="comment">
									<Row>
										<Col span={24}>
											{usercommentsList}
										</Col>
									</Row>
								</div>
							</TabPane>
							<TabPane tab="头像设置" key="3">
								<div className="clearfix">
									<Upload {...props}>
										<div className="ant-upload-text">上传照片</div>
									</Upload>
									<Modal visible={this.state.previewVisible} footer={null}
									       onCancel={this.handleCancel}>
										<img src={this.state.previewImage} alt="预览"/>
									</Modal>
								</div>
							</TabPane>
						</Tabs>
					</Col>
					<Col span={2}/>
				</Row>

				<PCFooter/>
			</div>

		)
	}
}
export default PCUserCenter;