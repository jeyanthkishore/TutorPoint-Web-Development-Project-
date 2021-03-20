import React, { Component } from "react";
import "./TutorForm.css";
import Form from "react-bootstrap/Form";
import {Button,Table} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import NavBar from "./navbar";
import { MDBContainer, MDBView, MDBMask } from "mdbreact";
import homepage from "./homepage.jpg";
import axios from "axios";

class RegisteredWorkshops extends React.Component {

  createTableRow() {
    let trs = [];
    this.state.searchTableData.map((row, index) => {
      trs.push(
        <tr>
          <td>{index}</td>
          <td>{row.name}</td>
          <td>{row.dep}</td>
          <td>{row.course}</td>
        </tr>
      );
    });
    return trs;
  }

  render()
  {
    return(
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
                      <th>#</th>
                      <th>Workshop Name</th>
                      <th>Tutor</th>
                      <th>Date</th>
                      <th>Time</th>
                    </tr>
                  </thead>
                  {/* <tbody>{this.createTableRow()}</tbody> */}
                </Table>
              </div>
            </MDBMask>
          </MDBView>
        </header>
      </div>
    );
  }

}

export default RegisteredWorkshops;