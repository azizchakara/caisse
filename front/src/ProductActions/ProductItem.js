import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteProduct } from "../ProductActions/ProductActions";
class ProductItem extends Component {
  onDeleteClick = (id) => {
    this.props.deleteProduct(id);
  };
  render() {
    const { product } = this.props;
    return (
      <tr className="even pointer">
        <td className="a-center ">{product.productName}</td>
        <td className="a-center ">{product.quantity}</td>
        <td className="a-center ">{product.price}</td>
        <td className="a-center ">{product.stock}</td>
        <td className="a-center ">{product.codeBar}</td>
        <td>
          <Link to={`/updateproduct/${product.id}`}>Modify</Link> <br />
          <Link onClick={this.onDeleteClick.bind(this, product.id)}>
            {" "}
            Delete{" "}
          </Link>
        </td>
      </tr>
    );
  }
}
ProductItem.propTypes = {
  deleteProduct: PropTypes.func.isRequired,
};
export default connect(null, { deleteProduct })(ProductItem);
