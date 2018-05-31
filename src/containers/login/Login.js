import React, { Component } from 'react'
import PropTypes from 'prop-types'
import authActions from '../authentication/_store/actions'
import Dropdown from '../../components/Dropdown'
import MyContextMenu from '../../components/ContextMenu'
import { connect } from 'unistore/react'
import actions from '../authentication/_store/actions'
import { Button, Popover, PopoverHeader, PopoverBody, Form, FormGroup, Label, Input, Tooltip } from 'reactstrap';
import '../mainContent/MainContent.css'
import { APP_LOGO } from '../../assets/imageConstant'
var Chart = require('react-d3-core').Chart;
// require `react-d3-basic` for Line chart component.
var LineChart = require('react-d3-basic').LineChart;

var chartData = []
var width = 700,
    height = 300,
    margins = {left: 100, right: 100, top: 50, bottom: 50},
    title = "User sample",
    // chart series,
    // field: is what field your data want to be selected
    // name: the name of the field that display in legend
    // color: what color is the line
    chartSeries = [
      {
        field: 'BMI',
        name: 'BMI',
        color: '#ff7f0e'
      }
    ],
    // your x accessor
    x = function(d) {
      return d.index;
    }


const FLAVOURS = [
	{ label: 'Chocolate', value: 'chocolate' },
	{ label: 'Vanilla', value: 'vanilla' },
	{ label: 'Strawberry', value: 'strawberry' },
	{ label: 'Caramel', value: 'caramel' },
	{ label: 'Cookies and Cream', value: 'cookiescream' },
	{ label: 'Peppermint', value: 'peppermint' },
];

class Login extends Component {
  
  constructor() {
    super();
    this.state = {
      value: [],
      popoverOpen: false,
      oneLetter: false,
      length: false, 
      capitalLetter: false, 
      oneNumber: false, 
      oneSpecialChar: false,
      test: 'syn'
    };
  }

  onSignIn = () => { 
    this.props.getAuth();
    this.toggle()
  };

  toggle = () => {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  onPassChange = (e) => {
    let password = e.target.value
    let oneLetter = false;
    let length = false;
    let capitalLetter = false;
    let oneSpecialChar = false;
    let oneNumber = false;
    if (password) {
      oneLetter = true;
      length = password.length >= 8
      capitalLetter = /[A-Z]+/.test(password)
      oneNumber = /[0-9]+/.test(password)
      oneSpecialChar = /[!@#$%^&*]+/.test(password)
    }
    this.setState({ oneLetter, length, capitalLetter, oneNumber, oneSpecialChar })    
  }

  static getDerivedStateFromProps  = (nextProps, prevState) => {
    return {
      test: nextProps.testString
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot !== null) {
      this.listRef.scrollTop =
        this.listRef.scrollHeight - snapshot;
    }
  }

  handleSelectChange = (value) => { this.setState({ value }); }

  render() {
    return (
      <div className="left-margin-30">
      <Chart
      title={title}
      width={width}
      height={height}
      margins= {margins}
      >
      <LineChart
        margins= {margins}
        title={title}
        data={chartData}
        width={width}
        height={height}
        chartSeries={chartSeries}
        x={x}
      />
    </Chart>
        {this.state.test}
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" placeholder="Email Id" /></FormGroup> 

        <FormGroup>
          <Label for="exampleEmail">Password</Label>
          <Input type="Password" name="Password" id="Popover" placeholder="Password" onChange={this.onPassChange} />
          <Popover placement="top" isOpen={this.state.popoverOpen} target="Popover" toggle={this.toggle}>
            <PopoverBody>Password must contain: <br /> 
              <p className={this.state.oneLetter ? 'gone' : null}>- At least one letter </p>
              <p className={this.state.capitalLetter ? 'gone' : null}>- At least one capital letter</p>
              <p className={this.state.oneNumber ? 'gone' : null}>- At least one number</p> 
              <p className={this.state.oneSpecialChar ? 'gone' : null}>- At least one special character: @ . - &</p>
              <p className={this.state.length ? 'gone' : null}>- Be at least 8 characters </p>
            </PopoverBody>
          </Popover></FormGroup>
        
        <Button onClick={this.onSignIn} color="primary">Sign In</Button>

        <div className='mt-2'>My Company Name Is <MyContextMenu data=' SYNERZIP' /></div>

        {/* <Button onClick={this.toggle}>POP OVER</Button> */}

        <Dropdown value={this.state.value}
          handleSelectChange={this.handleSelectChange}
					options={FLAVOURS} />   
        
        {/* <Multiselect data={FLAVOURS} multiple/> */}
      </div>
    );
  }
}
Login.propTypes = {
  cases: PropTypes.array.isRequired
};

export default connect('cases, testString', actions)(Login)
