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
import axios from "axios";

class TutorForm extends Component {
  state = {};
  constructor(props) {
    super(props);

    this.state = {
      files: {
        label: "upload your resume and transcripts (PDFs)",
        selectedFiles: null,
        loaded: 0,
      },
      fullName: null,
      errors: {
        fullName: "",
      },
    };
  }
  onTutorApplicationStatusClick() {
    this.props.history.push("/tutor-application-status");
  }
  onChangeHandler = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "fullName":
        errors.fullName =
          value.length < 5
            ? "Full Name must be atleast 5 characters in length!!!"
            : "";
        break;
      case "description":
        errors.description =
          value.length < 100
            ? "Description must be atleast 100 characters in length!!!"
            : "";
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value }, () => {
      console.log(errors);
    });
  };
  onFileChangeHandler = (event) => {
    event.preventDefault();
    var text = "";
    var i;
    console.log(event.target.files);
    for (i = 0; i < event.target.files.length; i++) {
      text += event.target.files[i].name;
      if (i === event.target.files.length - 1) {
        continue;
      } else {
        text += ", ";
      }
      // console.log(event.target.files[i].name);
    }
    // console.log(text);

    this.setState({
      files: {
        label: text,
        selectedFiles: event.target.files,
        loaded: 0,
      },
    });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("submithandler");
    const data = new FormData(event.target);
    data.uploadDocuments = ("files", this.state.files.selectedFiles);
    // alert("A form was submitted" + JSON.stringify(Object.fromEntries(data)));
    alert(
      "A form was submitted" +
        JSON.stringify(Object.fromEntries(data)) +
        data.uploadDocuments[0].name
    );
    const conf = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    //changeapiurllater
    axios
      .post("http://localhost:8080/api/user/uploadfile", data, conf)
      .then((response) => {
        alert("The file is successfully uploaded");
      })
      .catch((error) => {});
  };
  render() {
    return (
      <div>
        <section>
          <NavBar></NavBar>
          <MDBView src={homepage}>
            <MDBMask
              overlay="black-strong"
              className="flex-center flex-column text-white text-center"
              style={{ overflowY: "scroll" }}
            >
              <div className="TutorForm">
                <div
                  style={{
                    marginLeft: "75%",
                    marginBottom: "0%",
                    color: "orange",
                    fontWeight: "50",
                  }}
                >
                  <a href="#/tutor-application-status">
                    {" "}
                    👉Tutor Application Status
                  </a>
                </div>
                <h2 className="TutTitle">Application Form - Become a Tutor</h2>
                <br></br>

                <Form className="TutorFormStl" onSubmit={this.onSubmitHandler}>
                  <Form.Group as={Row} controlId="fullName">
                    <Form.Label column md={2}>
                      {" "}
                      Full Name
                    </Form.Label>
                    <Col md={10}>
                      <Form.Control
                        type="input"
                        placeholder="Full Name"
                        name="fullName"
                        required
                        minlength="5"
                        onChange={this.onChangeHandler}
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="email">
                    <Form.Label column md={2}>
                      Email
                    </Form.Label>
                    <Col md={10}>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        required
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="department" required>
                    <Form.Label column md={2}>
                      Department
                    </Form.Label>
                    <Col md={10}>
                      {" "}
                      <Form.Control
                        as="select"
                        // defaultValue="Choose Department"
                        name="department"
                        required
                      >
                        <option>Choose Department</option>
                        <option>...</option>
                      </Form.Control>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="course">
                    <Form.Label column md={2}>
                      Course
                    </Form.Label>
                    <Col md={10}>
                      <Form.Control
                        as="select"
                        defaultValue="Choose Course"
                        name="course"
                        required
                      >
                        <option>Choose Course</option>
                        <option>...</option>
                      </Form.Control>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="description">
                    <Form.Label column md={2}>
                      Why do you want to teach?
                    </Form.Label>
                    <Col md={10}>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="write here.."
                        name="description"
                        required
                        minlength="100"
                        onChange={this.onChangeHandler}
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="availability">
                    <Form.Label column md={2}>
                      Availability (Tutoring)
                    </Form.Label>
                    <Col md={10}>
                      <Form.Control
                        placeholder="&nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  eg. Monday - Tuesday and 7 - 8 PM"
                        name="availability"
                        required
                        minlength="5"
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="uploadDocuments">
                    <Form.Label column md={2}>
                      Upload Documents
                    </Form.Label>
                    <Col md={10}>
                      <Form.File
                        type="file"
                        id="uploadDocuments"
                        name="uploadDocuments"
                        label={this.state.files.label}
                        custom
                        multiple
                        accept="application/pdf"
                        onChange={this.onFileChangeHandler}
                        value={this.state.selectedFiles}
                        required
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
                      required
                    />
                  </Form.Group>
                  <Button
                    style={{ marginLeft: "18%", marginBottom: "0%" }}
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
        </section>
      </div>
    );
  }
}

export default TutorForm;