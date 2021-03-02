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

function ManageTutorApplication() {
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
              <h2 className="TutTitle">Manage Tutor Application</h2>
              <br></br>

              <Form className="TutorFormStl">
                <Form.Group as={Row} controlId="fullName">
                  <Form.Label column sm={2}>
                    {" "}
                    Approver ID
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control placeholder="Approver ID" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="fullName">
                  <Form.Label column sm={2}>
                    {" "}
                    Application ID
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control placeholder="Application ID" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="department">
                  <Form.Label column sm={2}>
                    Decision
                  </Form.Label>
                  <Col sm={10}>
                    {" "}
                    <Form.Control as="select" defaultValue="Choose Department">
                      <option>Approve</option>
                      <option>Reject</option>
                    </Form.Control>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="description">
                  <Form.Label column sm={2}>
                    Reason
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="write here.."
                    />
                  </Col>
                </Form.Group>
                <Button
                  style={{ marginLeft: "18%", marginBottom: "10%" }}
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

export default ManageTutorApplication;
