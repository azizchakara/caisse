import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createBill } from "../BillsActions/BillsActions";
import classnames from "classnames";

class AddBills extends Component {
  constructor() {
    super();
    this.state = {
      billDate: "",
      billNumber: "",
      total: "",
      type: "",
      errorsbillDate: "",
      errorsbillNumber: "",
      errorstotal: "",
      errorstype: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const { billDate, billNumber, total, type } = this.state;
    if (billDate === "") {
      this.setState({
        errorsbillDate: " bill's Date field is Required !",
      });
    }
    if (billNumber === "") {
      this.setState({
        errorsbillNumber: " bill's number  field is Required !",
      });
    }
    if (total === "") {
      this.setState({
        errorstotal: " total field is Required !",
      });
    }
    if (type === "") {
      this.setState({
        errorstype: " type field is Required !",
      });
    }
    const newBill = {
      billDate: this.state.billDate,
      billNumber: this.state.billNumber,
      total: this.state.total,
      type: this.state.type,
    };
    console.log(newBill);
    this.props.createBill(newBill, this.props.history);
  }
  render() {
    const {
      errorsbillDate,
      errorsbillNumber,
      errorstotal,
      errorstype,
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
                  <br />
                  <br />
                  <p className="lead text-center">Add Bill</p>
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <input
                        type="date"
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": errorsbillDate,
                        })}
                        placeholder="Category Name"
                        name="billDate"
                        value={this.state.billDate}
                        onChange={this.onChange}
                      />
                      <p>{errorsbillDate}</p>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": errorsbillNumber,
                        })}
                        placeholder="Bill Number"
                        name="billNumber"
                        value={this.state.billNumber}
                        onChange={this.onChange}
                      />
                      <p>{errorsbillNumber}</p>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": errorstotal,
                        })}
                        placeholder="Total"
                        name="total"
                        value={this.state.total}
                        onChange={this.onChange}
                      />
                      <p>{errorstotal}</p>
                    </div>
                    <div className="form-group">
                      <select
                        onChange={this.onChange}
                        value={this.state.type}
                        name="type"
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": errorstype,
                        })}
                      >
                        <option selected>Payment Type</option>
                        <option>cheque</option>
                        <option>cash</option>
                      </select>
                      <p>{errorstype}</p>
                    </div>

                    <input
                      type="submit"
                      className="btn btn-info btn-block mt-4"
                      value="Confirm"
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
AddBills.propTypes = {
  createBill: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});
export default connect(mapStateToProps, { createBill })(AddBills);
