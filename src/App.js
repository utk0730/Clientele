import React from "react";
import { BrowserRouter as Router,  Switch ,Route} from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import About from './components/About/About';
import Clients from './components/Clients/Clients'
import Client from './components/Client/Client'
import Addclient from './components/AddClient/Addclient'
import Editform from './components/EditForm/Editform'
import Admin from './components/Admin/Admin'
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
        <Route exact path="/" component={About}/>
        <Route exact path="/clients" component={Clients}/>
        <Route path="/clients/client/:id" component={Client}/>
        <Route path="/addclient" component={Addclient}/>
        <Route path="/admin/edit/:id" component={Editform}/>
        <Route path="/admin/login" component={Admin}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
