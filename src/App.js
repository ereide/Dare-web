import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import { Nav, Navbar, NavItem, Grid, Col, Row } from 'react-bootstrap';

import AsyncLoadable from './components/asyncloading.js';

import Main from './containers/main';

import AsyncChallenge from './containers/challenge';
import AsyncIdeas from './containers/ideas';
import AsyncAbout from './containers/about';
/*
const AsyncChallenge = AsyncLoadable({
  loader: () => import('./containers/challenge')
});

const AsyncIdeas = AsyncLoadable({
  loader: () => import('./containers/ideas')
});

const AsyncAbout = AsyncLoadable({
  loader: () => import('./containers/about')
});*/

class Header extends React.Component {
  render() {
    return (
      <Navbar bsStyle="pills">
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={'/'}> Dare </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem>
              <Link to="/challenge">Challenge</Link>
            </NavItem>
            <NavItem>
              <Link to="/ideas">Ideas</Link>
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem>
              <Link to="/about">About this page</Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <Grid>
        <hr />
        <footer>
          <p>
            2017 Eivind Roson Eide &middot;{' '}
            <a href="mailto:contact@eivindeide.me">Email</a>
          </p>
        </footer>
      </Grid>
    );
  }
}

const routediv = (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/about" component={AsyncAbout} />
    <Route exact path="/challenge" component={AsyncChallenge} />
    <Route exact path="/ideas" component={AsyncIdeas} />
    <Route path="" component={Main} />
  </Switch>
);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Grid>
            {routediv}
          </Grid>
          <Footer />
        </div>
      </Router>
    );
  }
  /*
  componentDidMount() {
    AsyncIdeas.preload();
    AsyncChallenge.preload();
    AsyncAbout.preload();
  }*/
}

export default App;
