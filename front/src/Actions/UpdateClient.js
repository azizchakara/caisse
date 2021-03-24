import React, { Component } from "react";
import { getClient, createClient } from "../Actions/ClientActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

class UpdateClient extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      adresse: "",
      age: "",
      email: "",
      phone: "",
      codeClient: "",
      year: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    const {
      id,
      firstName,
      lastName,
      adresse,
      age,
      email,
      phone,
      codeClient,
      year,
    } = nextProps.client;

    this.setState({
      id,
      firstName,
      lastName,
      adresse,
      age,
      email,
      phone,
      codeClient,
      year,
    });
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getClient(id, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const {
      firstName,
      lastName,
      adresse,
      year,
      email,
      phone,
      codeClient,
    } = this.state;
    if (firstName === "") {
      this.setState({
        errorsfirstName: " First Name field is Required !",
      });
    }
    if (lastName === "") {
      this.setState({
        errorslastName: " last Name field is Required !",
      });
    }
    if (adresse === "") {
      this.setState({
        errorsadresse: " Adresse field is Required !",
      });
    }
    if (year === "") {
      this.setState({
        errorsyear: " year field is Required !",
      });
    }
    if (email === "") {
      this.setState({
        errorsemail: " email field is Required !",
      });
    }
    if (phone === "") {
      this.setState({
        errorsphone: " phone field is Required !",
      });
    }
    if (codeClient === "") {
      this.setState({
        errorscodeClient: " code client field is Required !",
      });
    }
    const updateClient = {
      id: this.state.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      adresse: this.state.adresse,
      age: this.state.age,
      email: this.state.email,
      phone: this.state.phone,
      codeClient: this.state.codeClient,
      year: this.state.year,
    };

    this.props.createClient(updateClient, this.props.history);
  }
  render() {
    const {
      errorsfirstName,
      errorslastName,
      errorsadresse,
      errorsyear,
    } = this.state;
    return (
      <div className="content-wrapper">
        <div>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />

          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
            integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"
            crossOrigin="anonymous"
          />
          <link rel="stylesheet" href="App.css" />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
            integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
            crossOrigin="anonymous"
          />

          <div className="register">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <h3 className="lead text-center">Update Client</h3>
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": errorsfirstName,
                        })}
                        placeholder="First Name"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.onChange.bind(this)}
                      />
                      <p>{errorsfirstName}</p>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": errorslastName,
                        })}
                        placeholder="Last Name"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.onChange.bind(this)}
                      />
                      <p>{errorslastName}</p>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": errorsadresse,
                        })}
                        placeholder="Adresse "
                        name="adresse"
                        value={this.state.adresse}
                        onChange={this.onChange.bind(this)}
                      />
                      <p>{errorsadresse}</p>
                    </div>
                    <div className="form-group">
                      <input
                        type="int"
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": errorsyear,
                        })}
                        placeholder="Year"
                        name="year"
                        value={this.state.year}
                        onChange={this.onChange.bind(this)}
                      />
                      <p>{errorsyear}</p>
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Email"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Phone"
                        name="phone"
                        value={this.state.phone}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Code Client"
                        name="codeClient"
                        value={this.state.codeClient}
                        onChange={this.onChange}
                      />
                    </div>

                    <input
                      type="submit"
                      className="btn btn-info btn-block mt-4"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UpdateClient.propTypes = {
  getClient: PropTypes.func.isRequired,
  createClient: PropTypes.func.isRequired,
  client: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  client: state.client.client,
});

export default connect(mapStateToProps, { getClient, createClient })(
  UpdateClient
);
