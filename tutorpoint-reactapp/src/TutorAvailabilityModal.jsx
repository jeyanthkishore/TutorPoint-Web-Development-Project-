//Author: Prabhjot Kaur(B00843735)
import React from "react";
import { Modal, Button, Table } from "react-bootstrap";
import axios from "axios";

class TutorAvailabilityModal extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      schedules: []
    };

    this.getTutorSchedule = this.getTutorSchedule.bind(this);
    this.createTableRow = this.createTableRow.bind(this);

    this.getTutorSchedule();
  }

  onClickHandler(){
    alert("Session booked successfully!");
  }

  async getTutorSchedule()
  {
    await axios
        .get("http://localhost:8080/api/tutorSchedule/getByEmail",{
        	params:{
        		"email": this.props.email
        	}
        })
        .then((response) => {
          this.setState({
            schedules: response.data
          })
        })
        .catch(function (error) {
          console.log(error);
          console.log(error.message);
        });
  }

  //TODO: this method would be modified to include book appointment changes
	createTableRow() {
    let trs = [];
    this.state.schedules.map((row, index) => {
      trs.push(
        <tr>
          <td>{index}</td>
          <td>{row.day}</td>
          <td>{row.time}</td>
          <td>{row.duration}</td>
        </tr>
      );
    });
    return trs;
  }
	render() {
		return (<Modal className="schedule-modal" show={this.props.show}>
		  <Modal.Header onClick={this.props.closeModal} closeButton>
		    <Modal.Title>Tutor Availability per Week</Modal.Title>
		  </Modal.Header>

		  <Modal.Body>
		    {this.state.schedules.length && this.state.schedules.length != 0 && 
		    <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Day</th>
                  <th>Time</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>{this.createTableRow()}</tbody>
            </Table>
        	}
        	{(this.state.schedules.success == false) &&
        		<p>No Sessions Available!</p>
        	}
		  </Modal.Body>

		  <Modal.Footer>
		    <Button variant="secondary" onClick={this.props.closeModal}>Close</Button>
		  </Modal.Footer>
		</Modal>);
	}

}

export default TutorAvailabilityModal;