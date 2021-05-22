import "./App.css";
import Header from "./Header";
import Menu from "./Menu";
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import AddClient from "./AddClient";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store";
import Tables from "./Tables";
import UpdateClient from "./Actions/UpdateClient";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import AddCategory from "./Categories/AddCategory";
import categories from "./categories";
import UpdateCategory from "./Categories/UpdateCategory";
import AddIngredient from "./Ingredients/AddIngredient";
import ingredients from "./ingredients";
import UpdateIngredient from "./Ingredients/UpdateIngredient";
import AddProducts from "./products/AddProducts";
import AddBills from "./Bills/AddBills";
import Bills from "./Bills";
import UpdateBills from "./Bills/UpdateBills";
import Products from "./Products";
import UpdateProduct from "./products/UpdateProduct";
import Orders from "./Orders";
import AddOrders from "./Orders/AddOrders";
import OrderSummary from "./Orders/OrderSummary";
import InvoiceBill from "./Bills/InvoiceBill";
import AddTable from "./Tables/AddTable";
import Border from "./Border/Border";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="wrapper">
            <Header />
            <Menu />
            <Route exact path="/Dashboard" component={Dashboard} />
            <Route path="/clients" component={Tables} />
            <Route path="/addClient" component={AddClient} />
            <Route path="/updateclient/:id" component={UpdateClient} />
            <Route path="/addcategory" component={AddCategory} />
            <Route path="/categories" component={categories} />
            <Route path="/updatecategory/:id" component={UpdateCategory} />
            <Route path="/addingredients" component={AddIngredient} />
            <Route path="/ingredients" component={ingredients} />
            <Route path="/updateingredient/:id" component={UpdateIngredient} />
            <Route path="/addproduct" component={AddProducts} />
            <Route path="/addbills" component={AddBills} />
            <Route path="/bills" component={Bills} />
            <Route path="/bill/:id" component={InvoiceBill} />
            <Route path="/printbill" component={InvoiceBill} />
            <Route path="/updatebill/:id" component={UpdateBills} />
            <Route path="/updateproduct/:id" component={UpdateProduct} />
            <Route path="/products" component={Products} />
            <Route path="/orders" component={Orders} />
            <Route path="/addtable" component={AddTable} />
            <Route path="/ordersummary" component={OrderSummary} />
            <Route path="/border" component={AddOrders} />
            <Route path="/addorder" component={Border} />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
