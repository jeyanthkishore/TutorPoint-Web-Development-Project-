import React, { Component } from "react";
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
import "./password-reset.css";

class PasswordReset extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.BG_CLASS = "body--bg";
    this.state = {
      resetPassword: "",
    };
  }

  componentDidMount() {
    document.body.classList.add(this.BG_CLASS);
  }

  componentWillUnmount() {
    document.body.classList.remove(this.BG_CLASS);
  }

  handleClick() {
    if (!validator.isEmail(this.state.resetPassword)) {
      alert("Please enter a valid email");
    } else {
      alert(
        "Confirmation Mail has been sent !! Follow the mail to change password"
      );
    }
  }
  handleChange(event) {
    console.log(event.target.name);
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(this.state);
  }
  render() {
    return (
      <MDBContainer className="reset-container">
        <MDBRow className="justify-content-center">
          <MDBCol md="6">
            <MDBCard style={{ width: "26rem" }}>
              <MDBCardHeader>
                <h3
                  className="h3 text-center font-weight-bold"
                  style={{ fontFamily: "sans-serif", color: "#f9bf03" }}
                >
                  Forget Password
                </h3>
              </MDBCardHeader>
              <MDBCardBody>
                <form>
                  <div className="grey-text">
                    <label htmlFor="resetPassword">Enter your Email ID</label>
                    <input
                      type="text"
                      className="form-control"
                      id="resetPassword"
                      name="resetPassword"
                      onChange={this.handleChange}
                    />
                    <div className="text-center new-button">
                      <MDBBtn onClick={this.handleClick}>Submit</MDBBtn>
                    </div>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default PasswordReset;
