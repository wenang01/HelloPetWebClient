import { Switch, Route, Redirect, Router } from "react-router-dom";
import { CometChat } from "@cometchat-pro/chat";
import logo from './logo.svg';
import './App.css';

import Login from './pages/login'
import Home from './pages/home'
import Detailproduct from './pages/detailproduct'
import Register from './pages/register'
import Cart from './pages/cart'
import Transaction from "./pages/transaction";
import Analyse from "./pages/analyse/Analyse"

import Header from './pages/navheader'
import Footer from './pages/footer'
import Chat from "./pages/consultation/chat";
import Consultation from "./pages/consultation/consultation"

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
        <Route path="/transaction/u/:userId" component={Transaction} />
        <Route path="/chat/u/:userId" component={Chat} />
        <Route path="/consultation/u/" component={Consultation} />
        <Route path="/analyze" component={Analyse} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
