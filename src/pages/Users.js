import React, { Component } from 'react';
import '../css-table/css/style.css';
import '../css-table/css/bootstrap.min.css';
import '../css-table/fonts/icomoon/style.css';


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

<div class="content">
    
    <div class="container">
      <h2 class="mb-5">Users</h2>
      
      <div class="table-responsive custom-table-responsive">

        <table class="table custom-table">
          <thead>
            <tr>  
              <th scope="col">
                <label class="control control--checkbox">
                  <input type="checkbox"  class="js-check-all"/>
                  <div class="control__indicator"></div>
                </label>
              </th>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
          {
            this.state.userItems.map(user => (
              <tr key={user.id}>
                 <th scope="row">
                  <label class="control control--checkbox">
                  <input type="checkbox"/>
                  <div class="control__indicator"></div>
                  </label>
              </th>
                <td> {user.id} </td>
                <td> {user.name} </td>
                <td> {user.email} </td>
              </tr>
            ))
          }
          </tbody>
        </table>
      </div>
    </div>
  </div>
    

    <script src="../pages/css-table/js/jquery-3.3.1.min.js"></script>
    <script src="../pages/css-table/js/popper.min.js"></script>
    <script src="../pages/css-table/js/bootstrap.min.js"></script>
    <script src="../pages/css-table/js/main.js"></script>

     </div>
    );
   }
  }

export default Users;
