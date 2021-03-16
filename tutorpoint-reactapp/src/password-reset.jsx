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
import axios from "axios";

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

  async handleClick() {
    if (!validator.isEmail(this.state.resetPassword)) {
      alert("Please enter a valid email");
    } else {
      await axios
        .get("http://localhost:8080/sendSecurityCode", {
          params: { email: this.state.resetPassword },
        })
        .then((response) => {
          if (response.data.message === "not found") {
            alert("Mail ID not registered with the application !!!");
          } else if (response.data.message === "success") {
            localStorage.setItem("securityCode", response.data.code);
            localStorage.setItem("email", this.state.resetPassword);
            console.log(localStorage);
            alert(
              "Security Code has been sent to the corresponding mail id.\n Use the Code sent for to change password !"
            );
            this.props.history.push("/securityCode");
          }
        })
        .catch(function (error) {
          console.log(error);
          console.log(error.message);
          alert("Email Id already Exist! Please enter new email");
        });
    }
  }
  handleChange(event) {
    console.log(event.target.name);
    this.setState({
      [event.target.name]: event.target.value,
    });
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
