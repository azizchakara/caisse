import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProduct } from "../ProductActions/ProductActions";
import { getCategories } from "../categoryActions/CategoryActions";
import { getIngredients } from "../IngredientActions/IngredientActions";
import classnames from "classnames";
import Select from "react-select";

class AddProducts extends Component {
  componentDidMount() {
    this.props.getCategories();
    this.props.getIngredients();
  }
  constructor() {
    super();

    this.state = {
      productName: "",
      quantity: "",
      price: "",
      stock: "",
      codeBar: "",
      category: { id: "" },
      ingredients: [{ id: "" }],
      errorsProductName: "",
      errorsQuantity: "",
      errorsPrice: "",
      errorsStock: "",
      errorsCodeBar: "",
      errorsCategory: "",
      errorsIngredients: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    /*if (e.target.name == "ingredients") {
      let values = Array.from(e.target.selectedOptions, (option) => [
        "id",
        option.value,
      ]);
      console.log(e.target.selectedOptions);
      let res = [];
      values.map((el) => (res["id"] = el));
      let obj = Object.assign({}, values);

      this.setState({ ingredients: values });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }*/
  }

  onSubmit(e) {
    e.preventDefault();
    const {
      productName,
      quantity,
      price,
      stock,
      codeBar,
      category,
      ingredients,
    } = this.state;
    if (productName === "") {
      this.setState({
        errorsProductName: " product Name field is Required !",
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
    if (codeBar === "") {
      this.setState({
        errorsCodeBar: " code bar field is Required !",
      });
    }
    if (category === "") {
      this.setState({
        errorsCategory: " Category field is Required !",
      });
    }
    if (ingredients === "") {
      this.setState({
        errorsIngredients: " ingredients field is Required !",
      });
    }
    const newProduct = {
      productName: this.state.productName,
      quantity: this.state.quantity,
      price: this.state.price,
      stock: this.state.stock,
      codeBar: this.state.codeBar,
      category: { id: this.state.category },
      ingredients: [{ id: this.state.ingredients }],
    };
    console.log(this.state);
    this.props.createProduct(newProduct, this.props.history);
  }
  render() {
    const { categories } = this.props.categories;
    const { ingredients } = this.props.ingredients;
    const {
      errorsProductName,
      errorsCategory,
      errorsIngredients,
      errorsCodeBar,
      errorsQuantity,
      errorsPrice,
      errorsStock,
    } = this.state;
    return (
      <div className="content-wrapper">
        <div>
          <div className="register">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <p className="lead text-center">Add New Product</p>
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": errorsProductName,
                        })}
                        placeholder="Product Name"
                        name="productName"
                        value={this.state.productName}
                        onChange={this.onChange.bind(this)}
                      />
                      <p>{errorsProductName}</p>
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
                        type="int"
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
                    <div className="form-group">
                      <input
                        type="text"
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": errorsCodeBar,
                        })}
                        placeholder="codeBar"
                        name="codeBar"
                        value={this.state.codeBar}
                        onChange={this.onChange.bind(this)}
                      />
                      <p>{errorsCodeBar}</p>
                    </div>
                    <div className="form-group">
                      <select
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": errorsCategory,
                        })}
                        onChange={this.onChange}
                        name="category"
                      >
                        <option selected>Select Category</option>
                        {categories.map((category) => (
                          <option value={category.id}>
                            {category.categoryName}
                          </option>
                        ))}
                      </select>
                      <p>{errorsCategory}</p>
                    </div>
                    <div className="form-group">
                      <select
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": errorsIngredients,
                        })}
                        onChange={this.onChange}
                        name="ingredients"
                        multiple
                      >
                        <option selected>Select Ingredient</option>
                        {ingredients.map((ingredient) => (
                          <option value={ingredient.id}>
                            {ingredient.name}
                          </option>
                        ))}
                      </select>
                      <p>{errorsIngredients}</p>
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

AddProducts.propTypes = {
  createProduct: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  errors: state.errors,
  categories: state.category,
  ingredients: state.ingredient,
});
export default connect(mapStateToProps, {
  createProduct,
  getCategories,
  getIngredients,
})(AddProducts);
