import { Switch, Route, Redirect, Router } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import Login from './pages/login'
import Home from './pages/home'
import Detailproduct from './pages/detailproduct'
import Register from './pages/register'
import Cart from './pages/cart'

import Header from './pages/navheader'
import Footer from './pages/footer'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path={["/", "/home"]} component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/detailproduct/:id" component={Detailproduct} />
        {/* <Route exact path={["/detailproduct", "/detailproduct/:id"]} component={Detailproduct} /> */}
        <Route path="/register" component={Register} />
        {/* <Route path="/cart/p/:prodId/u/:userId" component={Cart} /> */}
        <Route path="/cart/u/:userId" component={Cart} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
