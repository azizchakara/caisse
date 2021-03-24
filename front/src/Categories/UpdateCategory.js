import React, { Component } from "react";
import {
  getCategory,
  createCategory,
} from "../categoryActions/CategoryActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class UpdateCategory extends Component {
  constructor() {
    super();

    this.state = {
      logo: "",
      categoryName: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    const { id, categoryName, logo } = nextProps.category;

    this.setState({
      id,
      categoryName,
      logo,
    });
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getCategory(id, this.props.history);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const updateCategory = {
      id: this.state.id,
      categoryName: this.state.categoryName,
      logo: this.state.logo,
    };
    this.props.createCategory(updateCategory, this.props.history);
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
                  <p className="lead text-center">Update Category</p>
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Category Name"
                        name="categoryName"
                        value={this.state.categoryName}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Logo"
                        name="logo"
                        value={this.state.logo}
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
UpdateCategory.propTypes = {
  getCategory: PropTypes.func.isRequired,
  getCategory: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  category: state.category.category,
});

export default connect(mapStateToProps, { getCategory, createCategory })(
  UpdateCategory
);
