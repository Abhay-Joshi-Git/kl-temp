import React from 'react';
import { Row, Col,Form, FormGroup, Input, Label, Button } from 'reactstrap';
import {APP_LOGO} from '../../asset/ImageConstants'

const SignUp = () => (
	<div className="sign-up-wrapper  f-fix">
		<Row className="no-margin">
			<Col lg="6" className="no-padding">
				<div className="left-overlay"></div>
			</Col>
			<Col lg="6" className="no-padding">
				<Form className="form-horizontal sign-up-form " action=" " method="post"  id="contact_form">
					<fieldset>
						<div className="logo a-center f-fix">
							<img src={APP_LOGO} alt="logo" />
						</div>
						<hgroup className="a-center">
							<h4><b>Create new account</b></h4>
							<h6>Already an existing user? <a className="secondary-color">Log In</a></h6>
						</hgroup>
						<FormGroup>
							<div className="inputGroupContainer">
								<Label className="control-label">Email address</Label>
								<Input type="email" name="email" placeholder="Enter Username/ Email here" className="form-control"/>
							</div>
						</FormGroup>
						<FormGroup>
							<div className="inputGroupContainer">
								<Label className="control-label">Username</Label>
								<Input type="text" name="Username" placeholder="Username" className="form-control"/>
							</div>
						</FormGroup>
						<FormGroup>
							<div className="inputGroupContainer">
								<Label className="control-label">Password</Label>
								<Input  type="password" name="user_password" placeholder="Enter Password here" className="form-control"/>
							</div>
						</FormGroup>
						<FormGroup className="checkbox-block">
							<Label>
								<Input type="checkbox" />
								I have read and agree to the terms & conditions on the usage of this site.
							</Label>
						</FormGroup>
						<FormGroup className="a-center">
							<Button type="submit" className="btn secondary-bg-color" >SIGN UP</Button>
						</FormGroup>
						
					</fieldset>
				</Form>
			</Col>
		</Row>
	</div>
);

export default SignUp;
