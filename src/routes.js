import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';


function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/products">
                    <Products/>
                </Route>
                <Route path="/productdetail">
                    <ProductDetail/>
                </Route>
                <Route path="/cart">
                    <Cart/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;