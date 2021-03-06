/**
 * Created by Z on 2017/03/24.
 */
import React from 'react';
import {Link} from 'react-router';
import 'whatwg-fetch';
import {Icon, Tabs, Message, Form, Input, Button, Modal} from 'antd';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
class MobileHeader extends React.Component {
	constructor() {
		super();
		this.state = {
			current: 'top',
			modalvisible: false,
			action: 'login',
			hasLogined: false,
			userNickName: '',
			userid: 0
		}
	}
	componentWillMount() {
		if(localStorage.userid) {
			console.log('ok');
			this.setState({
				hasLogined: true,
				userNickName: localStorage.userNickName,
				userid: localStorage.userid
			});
		}
	}
	handleClick = (e) => {
		if (e.key === 'register') {
			this.setState({
				current: 'register'
			});
			this.setModalVisible(true);
		} else {
			this.setState({
				current: e.key
			});
		}

	};

	setModalVisible(value) {
		this.setState({
			modalvisible: value
		})
	};

	handleSubmit(e) {
		e.preventDefault();
		let myFetchOptions = {
			method: 'GET'
		};
		let formData = this.props.form.getFieldsValue();
		fetch('http://newsapi.gugujiankong.com/handler.ashx?action=' + this.state.action + '&username=' + formData.username + '&password=' + formData.password + '&r_userName=' + formData.r_userName + '&r_password=' + formData.r_password + '&r_confirmPassword=' + formData.r_confirmPassword, myFetchOptions)
			.then(response => response.json()).then(json => {
			this.setState({
				userNickName: json.NickUserName,
				userif: json.UserId
			});
			localStorage.userid=json.UserId;
			localStorage.userNickName = json.NickUserName;
		});
		if (this.state.action === 'login') {
			this.setState({
				hasLogined: true
			});
		}
		Message.success('请求成功');
		this.setModalVisible(false);
	};

	login() {
		this.setModalVisible(true);
	};
	logout() {
		localStorage.userid='';
		localStorage.userNickName = '';
		this.setState({
			hasLogined: false
		})
	};

	callback(key) {
		if (key === 1) {
			this.setState({
				action: 'login'
			});
		} else if (key === 2) {
			this.setState({
				action: 'register'
			});
		}
	}

	render() {
		let {getFieldDecorator} = this.props.form;
		const userShow = this.state.hasLogined ?
			<Link to={`usercenter`}>
				<Icon type="inbox"/>
			</Link>
			:
			<Icon type="setting" onClick={this.login.bind(this)}/>
		;
		return (
			<div id="mobileheader">
				<header>
					<a href="/react-news">
						<img src="images/logo.png" alt="logo"/>
						<span>News</span>
					</a>
					{userShow}
				</header>
				<Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalvisible}
				       onCancel={() => this.setModalVisible(false)} onOk={() => this.setModalVisible(false)}
				       okText="关闭">
					<Tabs type="card" onChange={this.callback.bind(this)}>

						<TabPane tab="登录" key="1">
							<Form onSubmit={this.handleSubmit.bind(this)}>
								<FormItem label="账户" hasFeedback>
									{getFieldDecorator('username', {
										rules: [{required: true, 'message': 'Please input your name'}]
									})(
										<Input placeholder="请输入用户名"/>
									)}
								</FormItem>
								<FormItem label="密码">
									{getFieldDecorator('password', {
										rules: [{required: true, 'message': 'Please input your password'}]
									})(
										<Input type="password" placeholder="请输入密码"/>
									)}
								</FormItem>
								<Button type="primary" htmlType="submit">登录</Button>
							</Form>
						</TabPane>
						<TabPane tab="注册" key="2">
							<Form onSubmit={this.handleSubmit.bind(this)}>
								<FormItem label="账户" hasFeedback>
									{getFieldDecorator('r_userName', {
										rules: [{required: true, 'message': 'Please input your name'}]
									})(
										<Input placeholder="请输入用户名"/>
									)}
								</FormItem>
								<FormItem label="密码">
									{getFieldDecorator('r_password', {
										rules: [{required: true, 'message': 'Please input your password'}]
									})(
										<Input type="password" placeholder="请输入密码"/>
									)}
								</FormItem>
								<FormItem label="确认密码">
									{getFieldDecorator('r_confirmPassword', {
										rules: [{required: true, 'message': 'Please input your password again'}]
									})(
										<Input type="password" placeholder="请再次输入您的密码"/>
									)}

								</FormItem>
								<Button type="primary" htmlType="submit">注册</Button>
							</Form>
						</TabPane>
					</Tabs>
				</Modal>

			</div>
		)
	}
}
export default MobileHeader = Form.create({})(MobileHeader);