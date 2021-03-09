import React from "react";
import "./TutorForm.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import NavBarContainer from "./NavBarContainer";
import { MDBContainer, MDBView, MDBMask } from "mdbreact";
import homepage from "./homepage.jpg";

function TutorForm() {
  return (
    <div>
      <header>
        <NavBarContainer></NavBarContainer>
        <MDBView src={homepage}>
          <MDBMask
            overlay="black-strong"
            className="flex-center flex-column text-white text-center"
          >
            <div className="TutorForm">
              <h2 className="TutTitle">Apply for Tutor - Application Form</h2>
              <br></br>

              <Form className="TutorFormStl">
                {/* <Form.Group as={Row} controlId="fullName">
                  <Form.Label column sm={2}>
                    {" "}
                    Full Name
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control placeholder="Full Name" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="email">
                  <Form.Label column sm={2}>
                    Email
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Col>
                </Form.Group> */}

                <Form.Group as={Row} controlId="department" required>
                  <Form.Label column sm={2}>
                    Department
                  </Form.Label>
                  <Col sm={10}>
                    {" "}
                    <Form.Control as="select" defaultValue="Choose Department">
                      <option>Choose Department</option>
                      <option>...</option>
                    </Form.Control>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="course">
                  <Form.Label column sm={2}>
                    Course
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control as="select" defaultValue="Choose Course">
                      <option>Choose Course</option>
                      <option>...</option>
                    </Form.Control>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="description">
                  <Form.Label column sm={2}>
                    Why do you want to teach?
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="write here.."
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="timing">
                  <Form.Label column sm={2}>
                    Availability (Tutoring)
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control placeholder="eg. Mon - Tuesday 7-8 pm" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="resume">
                  <Form.Label column sm={2}>
                    Upload Resume and Transcripts
                  </Form.Label>
                  <Col sm={10}>
                    <Form.File
                      id="resume"
                      label="file format supported .pdf"
                      custom
                    />
                  </Col>
                </Form.Group>

                <Form.Group id="agreeTermsAndConditions">
                  <Form.Check
                    style={{ marginLeft: "18%", marginBottom: "5%" }}
                    type="checkbox"
                    label="By selecting this checkbox, you agree that all of the information provided is accurate."
                  />
                </Form.Group>
                <Button
                  style={{ marginLeft: "18%", marginBottom: "5%" }}
                  variant="primary"
                  type="submit"
                  onClick={() =>
                    alert(
                      "Thanks for Submitting the application!!!! Your reference number is #12345678"
                    )
                  }
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

export default TutorForm;
