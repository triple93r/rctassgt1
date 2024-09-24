import React, { Component } from 'react';

interface IRegistrationFormProps {
  handleRegistration: (userData: { username: string; email: string; password: string }) => void;
}

interface IState {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  errors: {
    username?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  };
}

class RegistrationForm extends Component<IRegistrationFormProps, IState> {
  constructor(props: IRegistrationFormProps) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      errors: {},
    };
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({ [name]: value } as unknown as Pick<IState, keyof IState>);
  };

  validateForm = (): boolean => {
    const { username, email, password, confirmPassword } = this.state;
    let errors: IState['errors'] = {};
    let formIsValid = true;

    // Username validation
    if (!username) {
      formIsValid = false;
      errors.username = 'Please enter your username.';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      formIsValid = false;
      errors.email = 'Please enter a valid email address.';
    }

    // Password validation
    if (!password) {
      formIsValid = false;
      errors.password = 'Please enter your password.';
    } else if (password.length < 6) {
      formIsValid = false;
      errors.password = 'Password must be at least 6 characters.';
    }

    // Confirm password validation
    if (password !== confirmPassword) {
      formIsValid = false;
      errors.confirmPassword = 'Passwords do not match.';
    }

    this.setState({ errors });
    return formIsValid;
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (this.validateForm()) {
      const { username, email, password } = this.state;
      this.props.handleRegistration({ username, email, password });
      this.setState({ username: '', email: '', password: '', confirmPassword: '', errors: {} });
    }
  };

  render() {
    const { username, email, password, confirmPassword, errors } = this.state;

    return (
      <div>
        <h2>Registration Form</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              className="form-control"
              value={username}
              onChange={this.handleInputChange}
            />
            {errors.username && <div className="text-danger">{errors.username}</div>}
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={email}
              onChange={this.handleInputChange}
            />
            {errors.email && <div className="text-danger">{errors.email}</div>}
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={password}
              onChange={this.handleInputChange}
            />
            {errors.password && <div className="text-danger">{errors.password}</div>}
          </div>

          <div className="form-group">
            <label>Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              value={confirmPassword}
              onChange={this.handleInputChange}
            />
            {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
          </div>

          <button type="submit" className="btn btn-primary">Register</button>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
