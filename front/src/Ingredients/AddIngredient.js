import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createIngredient } from "../IngredientActions/IngredientActions";
import classnames from "classnames";

class AddIngredient extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      quantity: "",
      price: "",
      stock: "",
      errorsName: "",
      errorsQuantity: "",
      errorsPrice: "",
      errorsStock: "",
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
    const { name, quantity, price, stock } = this.state;
    if (name === "") {
      this.setState({
        errorsName: " name field is Required !",
      });
    }
    if (quantity === "") {
      this.setState({
        errorsQuantity: " quantity field is Required !",
      });
    }
    if (price === "") {
      this.setState({
        errorsPrice: " price field is Required !",
      });
    }
    if (stock === "") {
      this.setState({
        errorsStock: " Stock field is Required !",
      });
    }
    const newIngredient = {
      name: this.state.name,
      quantity: this.state.quantity,
      price: this.state.price,
      stock: this.state.stock,
    };
    this.props.createIngredient(newIngredient, this.props.history);
  }
  render() {
    const { errorsName, errorsQuantity, errorsPrice, errorsStock } = this.state;
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
                  <p className="lead text-center">Add Ingredient</p>
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": errorsName,
                        })}
                        placeholder="Name"
                        name="name"
                        value={this.state.name}
                        onChange={this.onChange.bind(this)}
                      />
                      <p>{errorsName}</p>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": errorsQuantity,
                        })}
                        placeholder="Quantity"
                        name="quantity"
                        value={this.state.quantity}
                        onChange={this.onChange.bind(this)}
                      />
                      <p>{errorsQuantity}</p>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": errorsPrice,
                        })}
                        placeholder="price"
                        name="price"
                        value={this.state.price}
                        onChange={this.onChange.bind(this)}
                      />
                      <p>{errorsPrice}</p>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": errorsStock,
                        })}
                        placeholder="stock"
                        name="stock"
                        value={this.state.stock}
                        onChange={this.onChange.bind(this)}
                      />
                      <p>{errorsStock}</p>
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

AddIngredient.propTypes = {
  createIngredient: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  errors: state.errors,
});
export default connect(null, { createIngredient })(AddIngredient);
