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
  MDBMask,
  MDBView,
} from "mdbreact";
import "./password-change.css";

class PasswordChange extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.BG_CLASS = "body--bgpwdchange";
    this.state = {
      oldPassword: "",
      newPassword: "",
      renewPassword: "",
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

  handleClick() {
    if (this.state.newPassword !== this.state.renewPassword) {
      alert("Password do not match");
    }
    if (this.state.renewPassword.length < 8) {
      alert("Password length doesnot match");
    } else {
      alert("Password change successfull");
      this.props.history.push("/homepage");
    }
  }
  render() {
    return (
      <div>
        <main>
          <NavBar></NavBar>
          <MDBContainer className="reset-container">
            <MDBRow className="justify-content-center">
              <MDBCol md="6">
                <MDBCard style={{ width: "26rem" }}>
                  <MDBCardHeader>
                    <h3
                      className="h3 text-center font-weight-bold"
                      style={{ fontFamily: "sans-serif", color: "#f9bf03" }}
                    >
                      Change Password
                    </h3>
                  </MDBCardHeader>
                  <MDBCardBody>
                    <form>
                      <div className="">
                        <label htmlFor="oldPassword">Enter old password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="oldPassword"
                          name="oldPassword"
                          onChange={this.handleChange}
                        />
                        <label htmlFor="newPassword">Enter new password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="newPassword"
                          name="newPassword"
                          onChange={this.handleChange}
                        />
                        <label htmlFor="renewPassword">
                          Re-enter new password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="renewPassword"
                          name="renewPassword"
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
        </main>
      </div>
    );
  }
}

export default PasswordChange;
