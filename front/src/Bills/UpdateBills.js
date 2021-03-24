import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getBill, createBill } from "../BillsActions/BillsActions";
class UpdateBills extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      billDate: "",
      billNumber: "",
      total: "",
      type: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    const { id, billDate, billNumber, total, type } = nextProps.bill;

    this.setState({
      id,
      billDate,
      billNumber,
      total,
      type,
    });
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getBill(id, this.props.history);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const updateBills = {
      id: this.state.id,
      billDate: this.state.billDate,
      billNumber: this.state.billNumber,
      total: this.state.total,
      type: this.state.type,
    };
    this.props.createBill(updateBills, this.props.history);
  }
  render() {
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
                  <p className="lead text-center">Update Bill</p>
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <input
                        type="date"
                        className="form-control form-control-lg"
                        placeholder="Category Name"
                        name="billDate"
                        value={this.state.billDate}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Bill Number"
                        name="billNumber"
                        value={this.state.billNumber}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Total"
                        name="total"
                        value={this.state.total}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="type"
                        name="type"
                        value={this.state.type}
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

UpdateBills.propTypes = {
  getBill: PropTypes.func.isRequired,

  bill: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  bill: state.bill.bill,
});

export default connect(mapStateToProps, { getBill, createBill })(UpdateBills);
