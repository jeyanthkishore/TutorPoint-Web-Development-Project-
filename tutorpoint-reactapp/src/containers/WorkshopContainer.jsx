import React from 'react';
import WorkshopTabsComponent from '../components/WorkshopTabsComponent.jsx'

class WorkshopContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {workshopDetails:[{
    	'department': 'Computer Science',
    	'title': 'Trees and Graphs | Software Development Concepts | 5:30 pm | 15 Feb'
    },{
    	'department': 'Computer Science',
    	'title': 'Design Patterns | Advance Software Development Concepts | 6:30 pm | 15 Feb'
    },
    {
    	'department': 'Computer Science',
    	'title': 'AWS Services| Cloud Computing | 3:30 pm | 14 Feb'
    },
    {
    	'department': 'Computer Science',
    	'title': 'IPV4 and IPV6 | Computer Networks | 1:30 pm | 9 Feb'
    },
     {
    	'department': 'Computer Science',
    	'title': 'Containers | Cloud Computing | 5:30 pm | 26 Feb'
    },
     {
    	'department': 'Computer Science',
    	'title': ' Joins and Sub queries | DBMS | 5:30 pm | 16 Feb'
    },
    {
    	'department': 'Law',
    	'title': 'Civil Rights | Civil Law | 3:30 pm | 11 Feb'
    },{
    	'department': 'Law',
    	'title': 'Employment and Labor Rights | Employment Law | 5:30 pm | 15 Feb'
    },
    {
    	'department': 'Law',
    	'title': 'Internationals laws to learn | Law | 12:30 pm | 12 Feb'
    },{
    	'department': 'Law',
    	'title': 'Law and Sections3 | 5:30 pm | 15 Feb'
    },
    {
    	'department': 'Medicine',
    	'title': 'Dentistry and functions | Dentistry | 5:30 pm | 15 Feb'
    },{
    	'department': 'Medicine',
    	'title': 'Study human Brain | Human Topics in Medicine | 5:30 pm | 15 Feb'
    }]};
  }

  render() {
    return (
      <WorkshopTabsComponent workshopList = {this.state.workshopDetails}/>
    );
  }
}

export default WorkshopContainer;