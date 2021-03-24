import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createCategory } from "../categoryActions/CategoryActions";
import classnames from "classnames";

class AddCategory extends Component {
  constructor() {
    super();

    this.state = {
      categoryName: "",
      logo: "",
      errorsCategoryName: "",
      errorsLogo: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      //this.setState({ errors: nextProps.errors });
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const { categoryName, logo } = this.state;
    if (categoryName === "") {
      this.setState({
        errorsCategoryName: "Cateory Name is required",
      });
    }
    if (logo === "") {
      this.setState({
        errorsLogo: "Logo is required",
      });
    }
    const newCategory = {
      categoryName: this.state.categoryName,
      logo: this.state.logo,
    };
    this.props.createCategory(newCategory, this.props.history);
  }
  render() {
    const { errorsCategoryName, errorsLogo } = this.state;

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
                  <p className="lead text-center">Add Category</p>
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": errorsCategoryName,
                        })}
                        placeholder="Category Name"
                        name="categoryName"
                        value={this.state.categoryName}
                        onChange={this.onChange}
                      />
                      <p>{errorsCategoryName}</p>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": errorsLogo,
                        })}
                        placeholder="Logo"
                        name="logo"
                        value={this.state.logo}
                        onChange={this.onChange}
                      />
                      <p>{errorsLogo}</p>
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

AddCategory.propTypes = {
  createCategory: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { createCategory })(AddCategory);
