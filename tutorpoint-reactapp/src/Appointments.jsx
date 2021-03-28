//Author: Prabhjot Kaur(B00843735)
import React from "react";
import { Table, Card, FormControl, Form, Button } from "react-bootstrap";
import NavBarContainer from "./NavBarContainer";
import { MDBContainer, MDBView, MDBMask } from "mdbreact";
import homepage from "./images/homepage.jpg";
import NavBar from "./components/navbar";
import axios from "axios";
import TutorAvailabilityModal from "./TutorAvailabilityModal";
import jwt_decode from "jwt-decode";

class Appointments extends React.Component {
  constructor(props) {
    super(props);
    const token = localStorage.access_token;
    const decoded = jwt_decode(token);
    this.state = {
      workshops: [],
      email: decoded.email,
      dept: decoded.dept,
      contact: decoded.contact.toString(),
      username: decoded.username,
      appointments:[]
    };
  
    this.getAppointments= this.getAppointments.bind(this);
    

    this.getAppointments();
  }

  async getAppointments() {
    await axios
      .get("http://localhost:8080/api/appointmentsForStudent",{
        params: { studentemail: this.state.email },
      })
      .then((response) => {
        this.setState({
         appointments:response.data
        });
      })
      .catch(function (error) {
        console.log(error);
        console.log(error.message);
        alert("No Appointments");
      });
  }

  

 

  createTableRow() {
    let trs = [];
    this.state.appointments.map((row, index) => {
      trs.push(
        <tr>
          <td>{row.tutorname}</td>
          <td>{row.day}</td>
          <td>{row.time}</td>
          <td>{row.status}</td>
        </tr>
      );
    });
    return trs;
  }
  

  render() {
    return (
      <div>
        <header>
          <NavBar></NavBar>
          <MDBView src={homepage}>
            <MDBMask
              overlay="black-strong"
              className="flex-center flex-column text-white text-center"
            >
              <div className="tableContainer">
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>TutorName</th>
                      <th>Day</th>
                      <th>Time</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>{this.createTableRow()}</tbody>
                </Table>
              </div>
            </MDBMask>
          </MDBView>
        </header>
      </div>
    );
  }
}

export default Appointments;
