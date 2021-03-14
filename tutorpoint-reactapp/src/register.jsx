import { React } from "react";
import { Component } from "react";
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
import validator from "validator";
import "./register.css";
import axios from "axios";

class Register extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.BG_CLASS = "body--bg";
    this.state = {
      email: "",
      password: "",
      re_password: "",
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

  componentDidMount() {
    document.body.classList.add(this.BG_CLASS);
  }

  componentWillUnmount() {
    document.body.classList.remove(this.BG_CLASS);
  }

  async handleClick(event) {
    event.preventDefault();
    if (
      this.state.email === "" ||
      this.state.password === "" ||
      this.state.re_password === "" ||
      this.state.dept === "" ||
      this.state.username === "" ||
      this.state.contact === ""
    ) {
      alert("Please enter all the required details");
      return;
    }
    if (this.state.password !== this.state.re_password) {
      alert("Password miss match");
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
    const register = {
      fullname: this.state.username,
      password: this.state.password,
      email: this.state.email,
      contact: this.state.contact,
      dept: this.state.dept,
    };
    await axios
      .post("http://localhost:8080/register", register)
      .then((response) => {
        alert("Registration Successfull");
        this.props.history.push("/");
      })
      .catch(function (error) {
        console.log(error);
        console.log(error.message);
        alert("Email Id already Exist! Please enter new email");
      });
  }
  render() {
    return (
      <div id="register">
        <MDBContainer className="register-container">
          <MDBRow className="justify-content-center">
            <MDBCol md="6">
              <MDBCard>
                <MDBCardHeader>
                  <p
                    className="h3 text-center font-weight-bold"
                    style={this.fontStyle}
                  >
                    Registration for Tutor Point
                  </p>
                </MDBCardHeader>
                <MDBCardBody>
                  <form>
                    <div className="grey-text">
                      <MDBInput
                        label="Full Name*"
                        group
                        type="text"
                        name="username"
                        onChange={this.handleChange}
                      ></MDBInput>
                      <MDBInput
                        label="Email ID*"
                        group
                        type="email"
                        name="email"
                        onChange={this.handleChange}
                      ></MDBInput>
                      <MDBInput
                        label="Password*"
                        group
                        type="password"
                        onChange={this.handleChange}
                        name="password"
                      ></MDBInput>
                      <MDBInput
                        label="Re-Enter Password*"
                        group
                        type="password"
                        onChange={this.handleChange}
                        name="re_password"
                      ></MDBInput>
                      <MDBInput
                        label="Contact Number*"
                        group
                        type="text"
                        onChange={this.handleChange}
                        name="contact"
                      ></MDBInput>
                      <MDBInput
                        label="Department*"
                        group
                        type="text"
                        onChange={this.handleChange}
                        name="dept"
                      ></MDBInput>
                      <div className="text-center new-button">
                        <MDBBtn onClick={this.handleClick}>Register</MDBBtn>
                      </div>
                      <p className="text-center">
                        Already have a account? <span className="space"></span>
                        <a href="/">
                          Login
                        </a> <span className="space"></span> here
                      </p>
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

export default Register;
