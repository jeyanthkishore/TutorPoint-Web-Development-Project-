import React, { Component } from "react";
import "./TutorForm.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Table from "react-bootstrap/Table";
import NavBar from "./navbar";
import { MDBContainer, MDBView, MDBMask } from "mdbreact";
import homepage from "./homepage.jpg";
import axios from "axios";

class TutorApplicationStatus extends Component {
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
                <h2>Tutor Application Status </h2>
                <br></br>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Application ID</th>
                      <th>Course</th>
                      <th>Applied On</th>
                      <th>Application Status</th>
                      <th>Reason</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>Approved</td>
                      <td>Impressive Profile. All the best.</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>Approved</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td colSpan="2">Larry the Bird</td>
                      <td>@twitter</td>
                      <td>Pending</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td colSpan="2">Larry the Bird</td>
                      <td>@twitter</td>
                      <td>Rejected</td>
                      <td>-</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </MDBMask>
          </MDBView>
        </section>
      </div>
    );
  }
}

export default TutorApplicationStatus;
