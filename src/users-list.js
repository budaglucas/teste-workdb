import React, { Component } from 'react';


class UsersList extends Component {

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

      render () {

        var { users } = this.state;
          return (
              <div>
                  <ul>
                      {users.map(user => (
                          <li key={user.id}>
                              {user.name}
                          </li>
                      ))}
                  </ul>
              </div>
          )
      }
}

export default UsersList;