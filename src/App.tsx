import React, { Component } from 'react';
import RegistrationForm from './RegistrationForm';
import UserTable from './UserTable';
import 'bootstrap/dist/css/bootstrap.min.css';

interface IAppState {
  users: { username: string; email: string; password: string }[];
}

class App extends Component<{}, IAppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      users: [],
    };
  }

  handleRegistration = (userData: { username: string; email: string; password: string }) => {
    this.setState((prevState) => ({
      users: [...prevState.users, userData],
    }));
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center mt-4">Single Page Application</h1>
        <div className="row">
          <div className="col-md-6">
            <RegistrationForm handleRegistration={this.handleRegistration} />
          </div>
          <div className="col-md-6">
            <UserTable users={this.state.users} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
