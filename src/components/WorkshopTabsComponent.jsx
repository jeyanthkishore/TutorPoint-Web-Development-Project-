import React from 'react';
import WorkshopListComponent from './WorkshopListComponent.jsx'
import {ListGroup, Tab, Row, Col, Nav} from 'react-bootstrap';
import NavBarContainer from "../NavBarContainer";
import { MDBContainer, MDBView, MDBMask } from "mdbreact";
import homepage from "../homepage.jpg";

class WorkshopTabsComponent extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {'departments':[]};
	    this.formatInputData();
  	}

  	formatInputData() {
  		let departments = [];
  		this.props.workshopList.map(item =>{
  			if(!departments.includes(item.department)) {
  				departments.push(item.department)
  			}
  		});
  		this.setState({departments});
  	}

  	createNavList() {
  		let navs = [];
  		let departments = [];
  		this.props.workshopList.map(item =>{
  			if(!departments.includes(item.department)) {
  				departments.push(item.department)
  			}
  		});
  		departments.map(dep => {
		  	navs.push(
		  		<Nav.Item>
		          <Nav.Link eventKey={dep}>{dep}</Nav.Link>
			     </Nav.Item>);
		});
		return navs;
  	}
  	createTabContent() {
  		let departments = [];
  		this.props.workshopList.map(item =>{
  			if(!departments.includes(item.department)) {
  				departments.push(item.department)
  			}
  		});
  		let panes=[]
  		departments.map(dep => {
  			let workshops=[];
  			this.props.workshopList.map(workshop => {
  				if(dep === workshop.department) {
  					if(!workshops.includes(workshop.title)) {
  						workshops.push(workshop.title)
  					}
  				}			
  			});
  			panes.push(
  			<Tab.Pane eventKey={dep}>
	         <WorkshopListComponent workshopList = {workshops} />
	        </Tab.Pane>);
  		});
  		return panes;
  	}

  render() {
    return (
       <header>
          <NavBarContainer></NavBarContainer>
          <MDBView src={homepage}>
            <MDBMask
              overlay="black-strong"
              className="flex-center-tab flex-column text-white text-center"
            >
	  <Tab.Container id="left-tabs-example" defaultActiveKey="Computer Science">

	  <Row className = "workshop-tabs">
	  <Col sm={3}>
		 <Nav variant="pills" className="flex-column">
		 {this.createNavList()}
		</Nav>
	</Col>
	 
	    <Col sm={9}>
	      <Tab.Content>
	      <h2 className="workshopHead">List of Workshops</h2>
	        {this.createTabContent()}
	      </Tab.Content>
	    </Col>
		
	  </Row>
	</Tab.Container>
            </MDBMask>
          </MDBView>
        </header>
    );
  }
}

export default WorkshopTabsComponent;