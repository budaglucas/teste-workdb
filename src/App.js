import React, { Component } from 'react';
import { Route, BrowserRouter, NavLink } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import UsersList from './users-list';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';
import './App.css';


class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      users: [],
      isLoading: true,
    }
  }

  componentDidMount() {

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => {
      this.setState({ 
        isLoading: false,
        users: json,
      });   
    })
 
  }

  renderUser = () => {
    return this.state.users.map(user => {
      return (
        <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>2</td>
        <td>1</td>
        <td class="col text-center"><button type="button" class="btn btn-primary">Atualizar</button></td>
        <td class="col text-center"><button type="button" class="btn btn-danger">Remover</button></td>
      </tr>
      )
    })
  } 


  render () {
      return (
        <div>
        <Table striped bordered hover>
          <thead>
            <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Nível</th>
            <th>Status</th>
            </tr>
          </thead>
          <tbody>
            { this.renderUser() }
          </tbody>
        </Table>
      <div>
        <BrowserRouter>
        <NavLink to="/users-list">Users List</NavLink>
        <Route exact path="/users-list">
          <UsersList />
        </Route>
        </BrowserRouter>
      </div>
      </div>
      

    );
};
}

export default App;
