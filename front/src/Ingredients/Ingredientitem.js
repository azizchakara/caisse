import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteIngredient } from "../IngredientActions/IngredientActions";

class Ingredientitem extends Component {
  onDeleteClick = (id) => {
    this.props.deleteIngredient(id);
  };

  render() {
    const { ingredient } = this.props;
    return (
      <tr className="even pointer">
        <td className="a-center ">{ingredient.name}</td>
        <td className="a-center ">{ingredient.price}</td>
        <td className="a-center ">{ingredient.stock}</td>
        <td>
          <Link to={`/updateingredient/${ingredient.id}`}>Modify</Link> <br />
          <Link onClick={this.onDeleteClick.bind(this, ingredient.id)}>
            {" "}
            Delete{" "}
          </Link>
        </td>
      </tr>
    );
  }
}

Ingredientitem.propTypes = {
  deleteIngredient: PropTypes.func.isRequired,
};

export default connect(null, { deleteIngredient })(Ingredientitem);
