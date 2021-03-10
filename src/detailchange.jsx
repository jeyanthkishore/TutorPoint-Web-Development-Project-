import React, { Component } from "react";
import NavBar from "./navbar";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
} from "mdbreact";
import validator from "validator";
import "./detailchange.css";

class DetailsChange extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);
    this.BG_CLASS = "body--bgchange";
    this.state = {
      email: "",
      dept: "",
      contact: "",
      username: "",
    };
  }

  handleChange(event) {
    console.log(event.target.name);
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleSubmitClick() {
    if (
      this.state.email === "" ||
      this.state.dept === "" ||
      this.state.username === "" ||
      this.state.contact === ""
    ) {
      alert("Please enter all the required details");
      return;
    }
    if (!validator.isEmail(this.state.email)) {
      alert("Please enter a valid email ID");
      return;
    }
    if (!validator.isNumeric(this.state.contact)) {
      alert("Phone number containes alphabets");
      return;
    }
    alert("Changes are made Successfull");
    this.props.history.push("/homepage");
  }
  handleCancelClick() {
    this.props.history.push("/homepage");
  }
  componentDidMount() {
    document.body.classList.add(this.BG_CLASS);
  }

  componentWillUnmount() {
    document.body.classList.remove(this.BG_CLASS);
  }
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <MDBContainer className="change-container">
          <MDBRow className="justify-content-center">
            <MDBCol md="6">
              <MDBCard style={{ width: "26rem" }}>
                <MDBCardHeader>
                  <h3
                    className="h3 text-center font-weight-bold"
                    style={{ fontFamily: "sans-serif", color: "#f9bf03" }}
                  >
                    User Details Change
                  </h3>
                </MDBCardHeader>
                <MDBCardBody>
                  <form>
                    <div className="">
                      <label htmlFor="username">Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        onChange={this.handleChange}
                      />
                      <label htmlFor="email">Email ID</label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        onChange={this.handleChange}
                      />
                      <label htmlFor="contact">Contact Number</label>
                      <input
                        type="text"
                        onChange={this.handleChange}
                        className="form-control"
                        id="contact"
                        name="contact"
                      ></input>
                      <label htmlFor="email">Department</label>
                      <input
                        type="text"
                        className="form-control"
                        id="dept"
                        name="dept"
                        onChange={this.handleChange}
                      />
                      <div className="text-center new-button">
                        <MDBBtn onClick={this.handleSubmitClick}>Submit</MDBBtn>
                        <MDBBtn onClick={this.handleCancelClick}>Cancel</MDBBtn>
                      </div>
                    </div>
                  </form>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default DetailsChange;
