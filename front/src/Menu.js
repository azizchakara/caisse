import React, { Component } from "react";

export default class Menu extends Component {
  render() {
    return (
      <div>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          <div className="sidebar">
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image"></div>
            </div>
            {/* Sidebar Menu */}
            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                {/* Add icons to the links using the .nav-icon class
           with font-awesome or any other icon font library */}
                <li className="nav-item has-treeview menu-open">
                  <ul className="nav nav-treeview">
                    <li className="nav-item"></li>
                    <li className="nav-item"></li>
                    <li className="nav-item"></li>
                  </ul>
                </li>

                <li className="nav-item has-treeview">
                  <a href="clients" className="nav-link">
                    <p>Clients</p>
                  </a>
                </li>
                <li className="nav-item has-treeview">
                  <a href="orders" className="nav-link">
                    <p>Orders</p>
                  </a>
                </li>
                <li className="nav-item has-treeview">
                  <a href="categories" className="nav-link">
                    <p>Categories</p>
                  </a>
                </li>
                <li className="nav-item has-treeview">
                  <a href="products" className="nav-link">
                    <p>Products</p>
                  </a>
                </li>
                <li className="nav-item has-treeview">
                  <a href="ingredients" className="nav-link">
                    <p>Ingredients</p>
                  </a>
                </li>
                <li className="nav-item has-treeview">
                  <a href="bills" className="nav-link">
                    <p>Bills</p>
                  </a>
                </li>
              </ul>
            </nav>
            {/* /.sidebar-menu */}
          </div>
          {/* /.sidebar */}
        </aside>
      </div>
    );
  }
}
