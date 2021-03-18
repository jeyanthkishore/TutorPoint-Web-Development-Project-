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


class AddWorkshop extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state={
        name:'',
        department:'',
        date:'',
        time:'',
        tutor:''
    }
    this.handlePublish = this.handlePublish.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    async handlePublish()
    {
        const workshop={
            name:this.state.name,
            department:this.state.department,
            date:this.state.date,
            time:this.state.time,
            tutor:this.state.tutor
        }
    await axios
      .post("http://localhost:8080/api/workshopDetails/", workshop)
      .then((response) => {
        alert("Workshop created successfull!");
        this.props.history.push("/workshops");
      })
      .catch(function (error) {
        console.log(error);
        console.log(error.message);
        alert("Workshop not created!");
      });
    }

    onChangeHandler(event)
    {
        this.setState ({[event.target.name] : event.target.value})
    }
    
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
                </div>
                <h2 className="TutTitle">Add a Workshop</h2>
                <br></br>

                <Form className="TutorFormStl" onSubmit={this.onSubmitHandler}>
                  <Form.Group as={Row} controlId="Name">
                    <Form.Label column md={2}>
                      {" "}
                      Workshop Name
                    </Form.Label>
                    <Col md={10}>
                      <Form.Control
                        type="input"
                        placeholder="Workshop Name"
                        name="name"
                        required
                        minlength="5"
                        onChange={this.onChangeHandler}
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="Tutor">
                    <Form.Label column md={2}>
                      {" "}
                     Tutor
                    </Form.Label>
                    <Col md={10}>
                      <Form.Control
                        type="input"
                        placeholder="Tutor"
                        name="tutor"
                        required
                 
                        onChange={this.onChangeHandler}
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="Department">
                    <Form.Label column md={2}>
                      {" "}
                      Department
                    </Form.Label>
                    <Col md={10}>
                      <Form.Control
                        type="input"
                        placeholder="Department"
                        name="department"
                        required
                 
                        onChange={this.onChangeHandler}
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="Date">
                    <Form.Label column md={2}>
                      {" "}
                      Date
                    </Form.Label>
                    <Col md={10}>
                      <Form.Control
                        type="input"
                        placeholder="Date"
                        name="date"
                        required
                 
                        onChange={this.onChangeHandler}
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="Time">
                    <Form.Label column md={2}>
                      {" "}
                      Time
                    </Form.Label>
                    <Col md={10}>
                      <Form.Control
                        type="input"
                        placeholder="Time"
                        name="time"
                        required
                 
                        onChange={this.onChangeHandler}
                      />
                    </Col>
                  </Form.Group>
                  <Button
                    style={{ marginLeft: "18%", marginBottom: "0%" }}
                    variant="primary"
                    onClick={this.handlePublish}
                    type="submit"
                  >
                    Publish
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

export default AddWorkshop;
