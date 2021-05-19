import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Menu extends Component {
  render() {
    return (
      <div>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          <div className="sidebar">
            {/* Sidebar Menu */}
            <nav className="mt-2">
              <li className="nav-item has-treeview">
                <Link to="clients" className="nav-link">
                  <p>Clients</p>
                </Link>
              </li>
              <li className="nav-item has-treeview">
                <Link to="orders" className="nav-link">
                  <p>Orders</p>
                </Link>
              </li>
              <li className="nav-item has-treeview">
                <Link to="categories" className="nav-link">
                  <p>Categories</p>
                </Link>
              </li>
              <li className="nav-item has-treeview">
                <a href="products" className="nav-link">
                  <p>Products</p>
                </a>
              </li>
              <li className="nav-item has-treeview">
                <Link to="ingredients" className="nav-link">
                  <p>Ingredients</p>
                </Link>
              </li>
              <li className="nav-item has-treeview">
                <Link to="bills" className="nav-link">
                  <p>Bills</p>
                </Link>
              </li>
              <li className="nav-item has-treeview">
                <Link to="addtable" className="nav-link">
                  <p>Tables</p>
                </Link>
              </li>
              {/*<li className="nav-item has-treeview">
                  <Link to="tables" className="nav-link">
                    <p>Tables</p>
                  </Link>
                </li> */}
            </nav>
            {/* /.sidebar-menu */}
          </div>
          {/* /.sidebar */}
        </aside>
      </div>
    );
  }
}
