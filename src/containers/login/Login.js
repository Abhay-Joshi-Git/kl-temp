import React, { Component } from 'react';
import { Row, Col,Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { APP_LOGO } from '../../asset/ImageConstants';
import { connect } from 'unistore/react';
import actions from '../authentication/actions';
import { withFormik, Field } from 'formik';
import classNames from 'classnames';

const Login = ({
	values,
	touched,
	errors,
	handleSubmit,
	isSubmitting
}) => (
	<div className="login-wrapper f-fix">
		<Row className="no-margin">
			<Col lg="6" className="no-padding">
				<div className="left-overlay"></div>
			</Col>
			<Col lg="6" className="no-padding">
				<Form className="form-horizontal form login-form " id="contact_form" onSubmit={handleSubmit}>
					<fieldset>
						<div className="logo a-center f-fix">
							<img src={APP_LOGO} alt="logo" />
						</div>
						<hgroup className="a-center">
							<h4><b>Log in to your account</b></h4>
							<h6>Don't have an account? <a className="secondary-color">Create new</a></h6>
						</hgroup>
						<FormGroup>
							<div className="inputGroupContainer">
								<Label className="control-label">Email address</Label>
								<Field
									name="email"
									placeholder="Enter Username/ Email here"
									className={classNames("form-control ", {
										'valid-field' : touched.email && !errors.email,
										'is-invalid': touched.email && errors.email
									})}
									type="email"
								/>
								{touched.email && <div className="invalid-feedback">
									{errors.email}
								</div>}
							</div>
						</FormGroup>
						<FormGroup>
							<div className="inputGroupContainer">
								<Label className="control-label">Password</Label>
								<Field
									name="password"
									placeholder="Enter Password here"
									className="form-control" 
									type="password"
								/>
							</div>
						</FormGroup>
						<FormGroup className="">
							<Button className="btn secondary-bg-color" type="submit"
								disabled={(
									isSubmitting ||
									(!values.email || errors.email) || 
									(!values.password || errors.password)
								) ? true : false}
							>LOG IN</Button>
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

const LoginForm = withFormik({
	mapPropsToValues() {
		return {
			email: '',
			password: ''
		};
	},
	validate: (values, props) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Please enter a valid email.';
		}
    if (!values.password) {
      errors.password = 'Email is required';
    }		
    return errors;
  },
	handleSubmit(values, { setSubmitting, setErrors }) {
		const { userName, password } = values;
		this.props.checkAuth(userName, password).then(() => {
			setSubmitting(false);
		}).catch((errors) => {
			// setErrors({})
		})
	}
})(Login)

export default connect('cases, testString', actions)(LoginForm)
