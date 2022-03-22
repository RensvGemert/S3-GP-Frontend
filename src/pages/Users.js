import React, { Component } from 'react';
import {Table} from 'react-bootstrap';

class Users extends Component {

constructor(props){
  super(props);
  this.state = {
    userItems: []
  }
}

componentDidMount() {
  fetch("http://localhost:8080/api/users")
  .then(res => res.json())
  .then(json => {
    this.setState({
      userItems: json
    })
  });
}
  
render() {

    return (
      <div className="Users">
      <h2>Users</h2>
        <Table striped bordered hover>
          <thead>
            <tr>             
              <th >Id</th>
              <th >Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
          {
            this.state.userItems.map(user => (
              <tr key={user.id}>
                <td> {user.id} </td>
                <td> {user.name} </td>
                <td> {user.email} </td>
              </tr>
            ))
          }
          </tbody>
        </Table>
      </div>
    );
   }
  }

export default Users;
