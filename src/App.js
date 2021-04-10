import React, { useState } from 'react'
import './App.css';

import NewPost from './Pages/NewPost'
import PostList from './Pages/PostList'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="App">
      <Router>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <Link to="/" className="nav-link">
                CrearPost
              </Link>
              <Link to="/postList" className="nav-link">
                Ver posts
              </Link>
            </Nav>
          </Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/">
            <NewPost />
          </Route>
          <Route path="/postList">
            <PostList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
