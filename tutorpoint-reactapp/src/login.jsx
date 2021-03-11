import "./login.css";
import React, { Component } from "react";
import validator from "validator";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
} from "mdbreact";
import logo from "./logo12.png";
import logo_dal from "./gold.png";

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      email: "",
      password: "",
    };
    this.BG_CLASS = "body--bg";
  }

  // fontStyle = {
  //   fontFamily: "sans-serif",
  //   color: "#f9bf03",
  // };

  componentDidMount() {
    document.body.classList.add(this.BG_CLASS);
  }

  componentWillUnmount() {
    document.body.classList.remove(this.BG_CLASS);
  }

  handleClick() {
    if (!validator.isEmail(this.state.email)) {
      alert("Please enter a valid email");
    } else if (this.state.password.length <= 8) {
      alert("Please enter 8 digit passowrd");
    } else {
      this.props.history.push("/homepage");
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
      <div id="login">
        <MDBContainer className="logo-container">
          <MDBRow>
            <MDBCol>
              <div className="logo">
                <img src={logo} alt="logo" />
              </div>
            </MDBCol>
            <MDBCol>
              <div className="logo_dal" id="dal_logo">
                <img src={logo_dal} alt="logo_dal" />
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBContainer className="login-container">
          <MDBRow className="justify-content-center">
            <MDBCard>
              <MDBCardHeader>
                <h3
                  className="h3 text-center font-weight-bold"
                  style={this.fontStyle}
                >
                  Sign in
                </h3>
              </MDBCardHeader>
              <MDBCardBody>
                <form>
                  <div className="grey-text">
                    <MDBInput
                      label="Email"
                      icon="envelope"
                      group
                      type="email"
                      name="email"
                      onChange={this.handleChange}
                    ></MDBInput>
                    <MDBInput
                      label="Password"
                      icon="lock"
                      group
                      type="password"
                      name="password"
                      onChange={this.handleChange}
                    ></MDBInput>
                    <div className="text-center new-button">
                      <MDBBtn onClick={this.handleClick}>Login</MDBBtn>
                    </div>
                    <p className="text-center">
                      <a href="#/password-reset">Forget Pasword :( ?</a>
                    </p>
                    <p className="text-center">
                      New User? <span className="space"></span>
                      <a href="#/register">Register</a>
                    </p>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default Login;
