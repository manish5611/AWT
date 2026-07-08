import React, { Component } from "react";
import "./App.css";

class Employee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      id: "",
      dept: "",
      age: "",
      showDetails: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleDisplay = () => {
    this.setState({
      showDetails: true,
    });
  };

  render() {
    return (
      <div id="center">
        <h1>Welcome to Employee Web Page</h1>

        <div className="employee-box">
          <h2>Employee Details</h2>

          <p>
            <strong>Name:</strong>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </p>

          <p>
            <strong>ID:</strong>
            <input
              type="text"
              name="id"
              value={this.state.id}
              onChange={this.handleChange}
            />
          </p>

          <p>
            <strong>Department:</strong>
            <input
              type="text"
              name="dept"
              value={this.state.dept}
              onChange={this.handleChange}
            />
          </p>

          <p>
            <strong>Age:</strong>
            <input
              type="text"
              name="age"
              value={this.state.age}
              onChange={this.handleChange}
            />
          </p>

          <button onClick={this.handleDisplay}>Display</button>

          {this.state.showDetails && (
            <div className="display-box">
              <h3>Display Data</h3>

              <p>Name: {this.state.name}</p>
              <p>ID: {this.state.id}</p>
              <p>Department: {this.state.dept}</p>
              <p>Age: {this.state.age}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Employee;