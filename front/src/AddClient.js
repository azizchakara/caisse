import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createClient } from "./Actions/ClientActions";
import classnames from "classnames";
class AddClient extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      adresse: "",
      year: "",
      email: "",
      phone: "",
      codeClient: "",
      errorsfirstName: "",
      errorslastName: "",
      errorsadresse: "",
      errorsyear: "",
      errorsemail: "",
      errorsphone: "",
      errorscodeClient: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  validateForm() {
    return true;
  }
  onSubmit(e) {
    if (this.validateForm()) {
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
      const newClient = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        adresse: this.state.adresse,
        year: this.state.year,
        email: this.state.email,
        phone: this.state.phone,
        codeClient: this.state.codeClient,
      };
      this.props.createClient(newClient, this.props.history);
    }
  }
  render() {
    const {
      errorsfirstName,
      errorslastName,
      errorsadresse,
      errorsyear,
      errorsemail,
      errorsphone,
      errorscodeClient,
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
                  <p className="lead text-center">Add New Client</p>
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
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": errorsemail,
                        })}
                        placeholder="Email"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange.bind(this)}
                      />
                      <p>{errorsemail}</p>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": errorsphone,
                        })}
                        placeholder="Phone"
                        name="phone"
                        value={this.state.phone}
                        onChange={this.onChange.bind(this)}
                      />
                      <p>{errorsphone}</p>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": errorscodeClient,
                        })}
                        placeholder="Code Client"
                        name="codeClient"
                        value={this.state.codeClient}
                        onChange={this.onChange.bind(this)}
                      />
                      <p>{errorscodeClient}</p>
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
AddClient.propTypes = {
  createClient: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  errors: state.errors,
});
export default connect(null, { createClient })(AddClient);
