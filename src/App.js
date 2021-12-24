import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);

    this.state = {
      guests: [],
      name: "",
      lastName: "",
    };
  }

  handleName(event) {
    this.setState({
      name: event.target.value,
    });
  }

  handleLastName(event) {
    this.setState({
      lastName: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newGuest = {
      name: this.state.name,
      lastName: this.state.lastName,
    };
    this.setState({
      guests: this.state.guests.concat(newGuest),
      name: "",
      lastName: "",
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="first-name">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  name="first-name"
                  onChange={this.handleName}
                  value={this.state.name}
                />
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Apellido</label>
                <input
                  type="text"
                  className="form-control"
                  name="last-name"
                  onChange={this.handleLastName}
                  value={this.state.lastName}
                />
              </div>

              <div className="action">
                <button type="submit" className="btn btn-primary">
                  Agregar Invitado
                </button>
              </div>
            </form>

            <table className="table bordered-table table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                </tr>
              </thead>
              <tbody>
                {this.state.guests.map((guest, key) => (
                  <tr key={key}>
                    <td>{guest.name}</td>
                    <td>{guest.lastName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
