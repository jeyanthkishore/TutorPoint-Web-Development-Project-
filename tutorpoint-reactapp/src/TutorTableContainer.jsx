import React from "react";
import { Table, Card, FormControl, Form, Button } from "react-bootstrap";
import NavBarContainer from "./NavBarContainer";
import { MDBContainer, MDBView, MDBMask } from "mdbreact";
import homepage from "./homepage.jpg";
import NavBar from "./navbar";

class TutorTableContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      originalTableData: [
        {
          name: "Mary James",
          dep: "Computer Science",
          course: "SDC",
        },
        {
          name: "James Smith",
          dep: "Computer Science",
          course: "SDC",
        },
        {
          name: "Tom Hanks",
          dep: "Computer Science",
          course: "Cloud",
        },
        {
          name: "Katy Pery",
          dep: "Computer Science",
          course: "SC",
        },
        {
          name: "Taylor Swift",
          dep: "Computer Science",
          course: "ML",
        },
        {
          name: "Ema Watson",
          dep: "Computer Science",
          course: "ML",
        },
      ],
      searchTableData: [
        {
          name: "Mary James",
          dep: "Computer Science",
          course: "SDC",
        },
        {
          name: "James Smith",
          dep: "Computer Science",
          course: "SDC",
        },
        {
          name: "Tom Hanks",
          dep: "Computer Science",
          course: "Cloud",
        },
        {
          name: "Katy Pery",
          dep: "Computer Science",
          course: "SC",
        },
        {
          name: "Taylor Swift",
          dep: "Computer Science",
          course: "ML",
        },
        {
          name: "Ema Watson",
          dep: "Computer Science",
          course: "ML",
        },
      ],
    };
    this.onsearchTextChange = this.onsearchTextChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
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
      if (item.course === value) {
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
              <div className="tableContainer">
                <Card
                  style={{
                    width: "20rem",
                    color: "white",
                    marginLeft: "30%",
                    marginBottom: "2%",

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
