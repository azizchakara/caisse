import React, { Component } from "react";
import {
  getIngredient,
  createIngredient,
} from "../IngredientActions/IngredientActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

class UpdateIngredient extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      quantity: "",
      price: "",
      stock: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    const { id, name, quantity, price, stock } = nextProps.ingredient;

    this.setState({
      id,
      name,
      quantity,
      price,
      stock,
    });
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getIngredient(id, this.props.history);
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
    const updateIngredient = {
      id: this.state.id,
      name: this.state.name,
      quantity: this.state.quantity,
      price: this.state.price,
      stock: this.state.stock,
    };
    this.props.createIngredient(updateIngredient, this.props.history);
  }
  render() {
    const { errorsName, errorsQuantity } = this.state;
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
                  <p className="lead text-center">Update Ingredient</p>
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
                        placeholder="quantity"
                        name="quantity"
                        value={this.state.quantity}
                        onChange={this.onChange.bind(this)}
                      />
                      <p>{errorsQuantity}</p>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="price"
                        name="price"
                        value={this.state.price}
                        onChange={this.onChange.bind(this)}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="stock"
                        name="stock"
                        value={this.state.stock}
                        onChange={this.onChange.bind(this)}
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

UpdateIngredient.propTypes = {
  getIngredient: PropTypes.func.isRequired,
  getIngredient: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  ingredient: state.ingredient.ingredient,
});

export default connect(mapStateToProps, { getIngredient, createIngredient })(
  UpdateIngredient
);
