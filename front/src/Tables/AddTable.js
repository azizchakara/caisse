import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createTable } from "../TablesActions/TablesActions";
import classnames from "classnames";

class AddTable extends Component {
  constructor() {
    super();
    this.state = {
      tableplace: "",
      tablenum: "",
      errorsTableplace: "",
      errorsTablenum: "",
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
  onSubmit(e) {
    e.preventDefault();
    const { tableplace, tablenum } = this.state;
    if (tableplace === "") {
      this.setState({
        errorsTableplace: "field is Required !",
      });
    }
    if (tablenum === "") {
      this.setState({
        errorsTablenum: "field is Required !",
      });
    }

    const newTable = {
      tableplace: this.state.tableplace,
      tablenum: this.state.tablenum,
    };
    this.props.createTable(newTable, this.props.history);
  }
  render() {
    const { errorsTableplace, errorsTablenum } = this.state;
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
                  <br />
                  <br />
                  <p className="lead text-center">Add Table</p>
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": errorsTableplace,
                        })}
                        placeholder="nombre de place"
                        name="tableplace"
                        value={this.state.tableplace}
                        onChange={this.onChange.bind(this)}
                      />
                      <p>{errorsTableplace}</p>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": errorsTablenum,
                        })}
                        placeholder="numero de table"
                        name="tablenum"
                        value={this.state.tablenum}
                        onChange={this.onChange.bind(this)}
                      />
                      <p>{errorsTablenum}</p>
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

AddTable.propTypes = {
  createTable: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  errors: state.errors,
});
export default connect(null, { createTable })(AddTable);
