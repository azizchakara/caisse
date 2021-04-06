import React, { Component } from "react";
import { connect } from "react-redux";
import { getIngredients } from "./IngredientActions/IngredientActions";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Ingredientitem from "./Ingredients/Ingredientitem";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";

class ingredients extends Component {
  componentDidMount() {
    this.props.getIngredients();
    $(function () {
      $("#example1").DataTable();
    });
  }

  render() {
    const { ingredients } = this.props.ingredient;
    return (
      <div className="content-wrapper">
        <div className="container">
          <div className="projects">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h1 className="display-4 text-center">Ingredients</h1>
                  <br />
                  <Link
                    to="addingredients"
                    className="btn btn-lg btn-info float-right mb-2"
                  >
                    Add Ingredient
                  </Link>
                  <table
                    id="example1"
                    class="table table-bordered table-striped"
                  >
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ingredients.map((ingredient) => (
                        <Ingredientitem
                          key={ingredient.id}
                          ingredient={ingredient}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
ingredients.propTypes = {
  ingredient: PropTypes.object.isRequired,
  getIngredients: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  ingredient: state.ingredient,
});

export default connect(mapStateToProps, { getIngredients })(ingredients);
