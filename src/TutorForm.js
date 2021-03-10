import React, { Component } from "react";
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

class TutorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
    };
  }
  onChangeHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    });
  };
  render() {
    return (
      <div>
        <header>
          <NavBar></NavBar>
          <MDBView src={homepage}>
            <MDBMask
              overlay="black-strong"
              className="flex-center flex-column text-white text-center"
              style={{ overflowY: "scroll" }}
            >
              <div className="TutorForm">
                <h2 className="TutTitle">Become a Tutor - Application Form</h2>
                <br></br>

                <Form className="TutorFormStl">
                  <Form.Group as={Row} controlId="fullName">
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
                  </Form.Group>

                  <Form.Group as={Row} controlId="department" required>
                    <Form.Label column sm={2}>
                      Department
                    </Form.Label>
                    <Col sm={10}>
                      {" "}
                      <Form.Control
                        as="select"
                        defaultValue="Choose Department"
                      >
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
                      Upload Documents
                    </Form.Label>
                    <Col sm={10}>
                      <Form.File
                        id="resume"
                        label="upload your resume and transcripts (PDFs)"
                        custom
                        multiple
                        accept="application/pdf"
                        onChange={this.onChangeHandler}
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group id="agreeTermsAndConditions">
                    <Form.Check
                      style={{
                        marginLeft: "18%",
                        marginBottom: "0%",
                        marginTop: "0%",
                      }}
                      type="checkbox"
                      label="By selecting this checkbox, you agree that all of the information provided is accurate."
                    />
                  </Form.Group>
                  <Button
                    style={{ marginLeft: "18%", marginBottom: "0%" }}
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
}

export default TutorForm;
