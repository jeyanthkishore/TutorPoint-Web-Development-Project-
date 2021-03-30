//Author: Prabhjot Kaur(B00843735)
import React from "react";
import { Table, Card, FormControl, Form, Button } from "react-bootstrap";
import NavBarContainer from "./NavBarContainer";
import { MDBContainer, MDBView, MDBMask } from "mdbreact";
import homepage from "./images/homepage.jpg";
import NavBar from "./components/navbar";
import axios from "axios";
import TutorAvailabilityModal from "./TutorAvailabilityModal";
import Swal from "sweetalert2/src/sweetalert2.js";
import "@sweetalert2/theme-dark/dark.css";

class TutorTableContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      originalTableData: [],
      searchTableData: [],
      show: false,
      email: "",
      tutorname: "",
    };
    this.onsearchTextChange = this.onsearchTextChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.getTutors = this.getTutors.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.getTutors();
  }

  async getTutors() {
    await axios
      .get("https://tutorpoint1.herokuapp.com/api/tutorDetails/")
      .then((response) => {
        this.setState({
          originalTableData: response.data,
          searchTableData: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
        console.log(error.message);
        Swal.fire("Tutors not found!");
      });
  }

  onClickHandler(email, name) {
    this.setState({
      show: true,
      email: email,
      tutorname: name,
    });
  }

  closeModal() {
    this.setState({ show: false });
  }

  createTableRow() {
    let trs = [];
    this.state.searchTableData.map((row, index) => {
      trs.push(
        <tr>
          <td>{index}</td>
          <td>{row.name}</td>
          <td>{row.dep}</td>
          <td>{row.course}</td>
          <td>
            <Button
              value={row.email}
              onClick={() => this.onClickHandler(row.email, row.name)}
            >
              View Availability
            </Button>
          </td>
        </tr>
      );
    });
    return trs;
  }
  onsearchTextChange(e) {
    this.setState({ searchText: e.target.value });
    if (e.target.value == "") {
      this.setState({ searchTableData: this.state.originalTableData });
    }
  }
  onSearch() {
    let value = this.state.searchText;
    let searchRows = [];
    this.state.originalTableData.map((item) => {
      if (item.course.toLowerCase() === value.toLowerCase()) {
        searchRows.push({
          name: item.name,
          dep: item.dep,
          course: item.course,
        });
      }
    });
    this.setState({ searchTableData: searchRows });
  }
  render() {
    return (
      <div>
        <header>
          <NavBar></NavBar>
          <MDBView src={homepage}>
            <MDBMask
              overlay="black-strong"
              className="flex-center flex-column text-white text-center"
            >
              {this.state.show && (
                <TutorAvailabilityModal
                  show={this.state.show}
                  closeModal={this.closeModal}
                  email={this.state.email}
                  tutorname={this.state.tutorname}
                ></TutorAvailabilityModal>
              )}
              <div className="tableContainer">
                <Card
                  style={{
                    width: "20rem",
                    color: "white",
                    marginLeft: "30%",
                    marginBottom: "2%",
                    marginTop: "10%",

                    backgroundColor: "rgba(52, 52, 52, 0.8)",
                  }}
                >
                  <Card.Body>
                    <Card.Title>Available tutors</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Search suitable tutor
                    </Card.Subtitle>
                    <FormControl
                      onChange={this.onsearchTextChange}
                      type="text"
                      placeholder="Search tutor by Course"
                      className=" mr-sm-2"
                    />
                    <Button type="submit" onClick={this.onSearch}>
                      Search
                    </Button>
                  </Card.Body>
                </Card>

                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Department</th>
                      <th>Course</th>
                    </tr>
                  </thead>
                  <tbody>{this.createTableRow()}</tbody>
                </Table>
              </div>
            </MDBMask>
          </MDBView>
        </header>
      </div>
    );
  }
}

export default TutorTableContainer;
