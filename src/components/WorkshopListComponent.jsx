import React from 'react';
import {ListGroup, Tab, Row, Col, Nav} from 'react-bootstrap';
class WorkshopListComponent extends React.Component {

  createListGroup() {
  	let listgrp = [];
  	this.props.workshopList.map((item,index) => {
  		listgrp.push(<ListGroup.Item action href={`#item${index}`}>
	      {item}
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