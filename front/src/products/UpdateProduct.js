import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProduct } from "../ProductActions/ProductActions";
import { getProduct } from "../ProductActions/ProductActions";
import { getCategories } from "../categoryActions/CategoryActions";
import { getIngredients } from "../IngredientActions/IngredientActions";
import classnames from "classnames";

class UpdateProduct extends Component {
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
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    const {
      id,
      productName,
      quantity,
      price,
      stock,
      codeBar,
      category,
      ingredients,
    } = nextProps.product;

    this.setState({
      id,
      productName,
      quantity,
      price,
      stock,
      codeBar,
      category,
      ingredients,
    });
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getProduct(id, this.props.history);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const updateProduct = {
      id: this.state.id,
      productName: this.state.productName,
      quantity: this.state.quantity,
      price: this.state.price,
      stock: this.state.stock,
      codeBar: this.state.codeBar,
      category: { id: this.state.category.id },
      ingredients: [{ id: this.state.ingredients[0].id }],
    };

    console.log(this.state.ingredients);
    this.props.createProduct(updateProduct, this.props.history);
  }
  render() {
    const { categories } = this.props.categories;
    const { ingredients } = this.props.ingredients;
    const {
      errorsProductName,
      errorsCategory,
      errorsIngredients,
      errorsCodeBar,
    } = this.state;
    return (
      <div className="content-wrapper">
        <div>
          <div className="register">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <p className="lead text-center">Update Product</p>
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
                        className="form-control form-control-lg"
                        placeholder="Quantity"
                        name="quantity"
                        value={this.state.quantity}
                        onChange={this.onChange.bind(this)}
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="int"
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

UpdateProduct.propTypes = {
  getProduct: PropTypes.func.isRequired,
  getProduct: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  product: state.product.product,
  errors: state.errors,
  categories: state.category,
  ingredients: state.ingredient,
});
export default connect(mapStateToProps, {
  createProduct,
  getProduct,
  getCategories,
  getIngredients,
})(UpdateProduct);
