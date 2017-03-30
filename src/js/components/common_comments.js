/**
 * Created by Z on 2017/03/30.
 */
import React from 'react';
import {Row, Col} from 'antd';
import { Card,Form, Button, notification} from 'antd';
import 'whatwg-fetch';

const FormItem = Form.Item;

class Comments extends React.Component {
	constructor() {
		super();
		this.state = {

			comments: ''
		}
	}
	componentDidMount() {
		let myFetchOptions = {
			method: 'GET'
		};
		fetch("http://newsapi.gugujiankong.com/handler.ashx?action=getcomments&uniquekey=" + this.props.uniquekey, myFetchOptions)
			.then(response =>response.json())
			.then(json => {
				this.setState({
					comments: json
				});
			});
	}

	handleSubmit(e) {
		e.preventDefault();
		let myFetchOptions = {
			method: 'GET'
		};
		let formData = this.props.form.getFieldsValue();
		console.log(formData);
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=" + localStorage.userid + "&uniquekey=" + this.props.uniquekey + "&commnet=" + formData.remark, myFetchOptions)
			.then(response=>response.json())
			.then(json=>{
				this.componentDidMount();
			});
	}
	addUserCollection() {
		let myFetchOptions = {
			method: "GET"
		};
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid=" + localStorage.userid + "&uniquekey=" + this.props.uniquekey, myFetchOptions)
			.then(response=>response.json())
			.then(json=>{
				//收藏成功以后 进行全局提醒
				notification['success']({message:"News提醒", description: "收藏此文章成功"})
			});
	}


	render() {
		let {getFieldDecorator} = this.props.form;
		const comments = this.state.comments;
		const commentsList = comments.length ?
			comments.map((comment, index) => (
				<Card key={index} title={comment.UserName} extra={<a href="#">发表于{comment.datetime}</a>}>
					<p>{comment.Comments}</p>
				</Card>
			))
			: "还没有人评论"
		;

		return (
			<div className="comment">
				{commentsList}
				<Row>
					<Col span={24}>
						<Form onSubmit={this.handleSubmit.bind(this)}>
							<FormItem label="您的评论">
								{getFieldDecorator('remark')(
									<input type="textarea" placeholder="随便写"/>
								)}
							</FormItem>
							<Button type="primary" htmlType="submit">提交评论</Button>
							&nbsp;&nbsp;
							<Button type="primary" htmlType="button" onClick={this.addUserCollection.bind(this)}>收藏改文章</Button>
						</Form>
					</Col>
				</Row>
			</div>
		)
	}
}

export default Comments = Form.create({})(Comments);