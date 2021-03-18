/*Author: Yash Jaiswal, BannerID: B00873246*/
import React from "react";
import "./TutorForm.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import NavBar from "./navbar";
import { MDBContainer, MDBView, MDBMask } from "mdbreact";
import homepage from "./homepage.jpg";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Swal from "sweetalert2/src/sweetalert2.js";
import "@sweetalert2/theme-dark/dark.css";

function ManageTutorApplication() {
  return (
    <div>
      <header>
        {/* <NavBar></NavBar> */}
        <MDBView src={homepage}>
          <MDBMask
            overlay="black-strong"
            className="flex-center flex-column text-white text-center"
            style={{ overflowY: "scroll" }}
          >
            <div className="TutorForm">
              <h2 className="TutTitle">Manage Tutor Application</h2>
              <br></br>

              <Form className="TutorFormStl">
                <Form.Group as={Row} controlId="approverId">
                  <Form.Label column sm={2}>
                    {" "}
                    Approver ID
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      placeholder="Approver ID"
                      required
                      name="approverId"
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="applicationId">
                  <Form.Label column sm={2}>
                    {" "}
                    Application ID
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      placeholder="Application ID"
                      name="applicationId"
                      required
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="decision">
                  <Form.Label column sm={2}>
                    Decision
                  </Form.Label>
                  <Col sm={10}>
                    {" "}
                    <Form.Control
                      as="select"
                      defaultValue="Your Decision"
                      name="decision"
                      required
                    >
                      <option>Select Your Decision</option>
                      <option>Approve</option>
                      <option>Reject</option>
                    </Form.Control>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="reasone">
                  <Form.Label column sm={2}>
                    Reason
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="write here.."
                      name="reason"
                      required
                    />
                  </Col>
                </Form.Group>
                <Button
                  style={{ marginLeft: "18%", marginBottom: "10%" }}
                  variant="primary"
                  type="submit"
                  // onClick={() =>
                  //   alert(
                  //     "Thanks for Submitting the application!!!! Your reference number is #12345678"
                  //   )
                  // }
                >
                  Submit
                </Button>
              </Form>
            </div>
          </MDBMask>
        </MDBView>
      </header>
    </div>
  );
}

export default ManageTutorApplication;
