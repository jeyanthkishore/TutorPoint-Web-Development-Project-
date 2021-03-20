import React from 'react';
import axios from "axios";
import WorkshopTabsComponent from '../components/WorkshopTabsComponent.jsx'
import { Button } from 'react-bootstrap';

class WorkshopContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {workshopDetails:[]};
    // this.getWorkshops();
    this.addWorkshop = this.addWorkshop.bind(this);
    this.registerdWorkshops = this.registerdWorkshops.bind(this);
  }
  componentDidMount(){
    this.getWorkshops();
  }
  addWorkshop() {
    this.props.history.push("/addworkshop");
  }
  registerdWorkshops()
  {
    this.props.history.push("/registeredWorkshops");
  }

 async getWorkshops()
  {
    await axios
        .get("http://localhost:8080/api/workshopDetails/")
        .then((response) => {
          this.setState({
            workshopDetails: response.data

          })
        })
        .catch(function (error) {
          console.log(error);
          console.log(error.message);
          alert("workShops not found");
        });
  }

  render() {
    return (
      <div>
      <WorkshopTabsComponent workshopList = {this.state.workshopDetails}/>
      <Button type="submit" onClick={this.addWorkshop} >Add a Workshop</Button>
      <Button type="submit" onClick={this.registerdWorkshops} >Registered Workshops</Button>
      </div>
    );
  }
}

export default WorkshopContainer;