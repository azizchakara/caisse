import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteCategory } from "../categoryActions/CategoryActions";
class Categoryitem extends Component {
  onDeleteClick = (id) => {
    this.props.deleteCategory(id);
  };
  render() {
    const { category } = this.props;
    return (
      <tr className="even pointer">
        <td className="a-center ">{category.categoryName}</td>

        <td>
          <Link to={`/updatecategory/${category.id}`}>Modify</Link> <br />
          <Link onClick={this.onDeleteClick.bind(this, category.id)}>
            {" "}
            Delete{" "}
          </Link>
        </td>
      </tr>
    );
  }
}

Categoryitem.propTypes = {
  deleteCategory: PropTypes.func.isRequired,
};

export default connect(null, { deleteCategory })(Categoryitem);
