import React, { Component } from 'react';
import { Row, Col,Form, FormGroup, Input, Label, Button } from 'reactstrap';
import {APP_LOGO} from '../../asset/ImageConstants'
import { connect } from 'unistore/react'
import actions from '../authentication/actions'

class Login extends Component {
	constructor(props){
		super(props)
		this.state={
			username: '',
			password: ''
		}
	}

	onUsernameChange = (e) => {	this.setState({username: e.target.value}) }

	onPassChange = (e) => { this.setState({password: e.target.value}) }

	onLogIn = () => {
		this.props.checkAuth(this.state.username, this.state.password);
	}
		
	render() {
		return (
			<div className="login-wrapper f-fix">
				<Row className="no-margin">
					<Col lg="6" className="no-padding">
						<div className="left-overlay"></div>
					</Col>
					<Col lg="6" className="no-padding">
						<Form className="form-horizontal form login-form " id="contact_form">
							<fieldset>
								<div className="logo a-center f-fix">
									<img src={APP_LOGO} alt="logo" />
								</div>
								<hgroup className="a-center">
									<h4><b>Log in to your account</b></h4>
									<h6>Already an existing user? <a className="secondary-color">Create new</a></h6>
								</hgroup>
								<FormGroup>
									<div className="inputGroupContainer">
										<Label className="control-label">Email address</Label>
										<Input name="email" onChange={this.onUsernameChange} placeholder="Enter Username/ Email here" className="form-control"  type="text"/>
									</div>
								</FormGroup>
								<FormGroup>
									<div className="inputGroupContainer">
										<Label className="control-label">Password</Label>
										<Input  name="user_password" onChange={this.onPassChange} placeholder="Enter Password here" className="form-control"  type="password"/>
									</div>
								</FormGroup>
								<FormGroup className="">
									<Button className="btn secondary-bg-color" onClick={this.onLogIn}>LOG IN</Button>
								</FormGroup>						
								<FormGroup className="a-center">
									<a className="secondary-color">Forgot Password?</a>
								</FormGroup>
							</fieldset>
						</Form>
					</Col>
				</Row>
			</div>
		)
	}
}

	export default connect('cases, testString', actions)(Login)
