/*Author: Manpreet Singh, BannerID: B00853930*/
import React from 'react';
import {ListGroup, Tab, Row, Col, Nav, Button} from 'react-bootstrap';
import axios from "axios";
import jwt_decode from "jwt-decode";

class WorkshopListComponent extends React.Component {

	constructor(props) {
		super(props);
		const token = localStorage.access_token;
        const decoded = jwt_decode(token);
         this.state = {
            email: decoded.email,
            dept: decoded.dept,
            contact: decoded.contact.toString(),
            username: decoded.username,
            role:decoded.role
      };
		this.handleClick = this.handleClick.bind(this);
		}

	async handleClick(val)
    {
        const workshopRegister={
            workshopid:val,
            email:this.state.email,
          
        }
		await axios
      .post("http://localhost:8080/api/workshopRegisterDetails/", workshopRegister)
      .then((response) => {
        if (response.success){
          alert("Workshop registered successfull!");
        } else {
          alert("Workshop already registered!");
        }
        
        //this.props.history.push("/workshops");
      })
      .catch(function (error) {
        console.log(error);
        console.log(error.message);
        alert("Workshop not registered!");
      });
    }

  createListGroup() {
  	let listgrp = [];
  	this.props.workshopList.map((item,index) => {
  		listgrp.push(<ListGroup.Item action >
	      {`${item.name} | ${item.tutor} | ${item.date} | ${item.time}`}
		   <Button value={ item.id} onClick={() => {this.handleClick(item.id)}}>Register</Button>
	    </ListGroup.Item>)
  	});
  	return listgrp;
  }
  render() {
	  
    return (
      <ListGroup defaultActiveKey="#link1">
	    {this.createListGroup()}
		
	  </ListGroup>
    );
  }
}

export default WorkshopListComponent;