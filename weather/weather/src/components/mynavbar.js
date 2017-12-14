import React, { Component } from 'react';
import {Button, Form, FormGroup, FormControl, Navbar, Nav, NavItem} from 'react-bootstrap';
import WeatherFetcher from '../utils/weatherfetcher';
import {browserHistory} from 'react-router'


class MyNavbar extends Component {
	constructor(){
		super();
		this.state={
			value: ""
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	};

	handleChange(event){
		//We are setting the value here once a user changes
		//the input field
		this.setState({ value: event.target.value});
	}

	handleClick(){
		// establish the path where we are sending our user to
		const path = `/forecast/${this.state.value}`
		// set the value back to an empty string
		this.setState({value: ''})
		//tell browserHistory where to go. It will go back to index.js
		//where router is and go to the appropriate path.
		// We are not sending the pat any data as of yet.
		browserHistory.push(path)
	}

	componentDidUpdate(){
		if(this.state.loaded){
			debugger
		}
	}
	render() {
		return (
			<Navbar className="MyNav">
          		<Navbar.Header>
		            <Navbar.Brand>
		              <a href="/">Weather App</a>
		            </Navbar.Brand>
          		</Navbar.Header>
	          	<Navbar.Collapse>
		            <Nav pullRight>
		              <NavItem>
		                <Form inline className="Form">
		                  <FormGroup controlId="formInlineName">
		                    <FormControl type="text"  placeholder="New York, NY" value={this.state.value} onChange={this.handleChange}/>
		                    {' '}
		                    <Button bsStyle="success" bsSize="small" onClick={this.handleClick}>Get Weather</Button>
		                  </FormGroup>
		                </Form>
		              </NavItem>
		            </Nav>
	          	</Navbar.Collapse>
        	</Navbar>
		)
	}
}

export default MyNavbar;