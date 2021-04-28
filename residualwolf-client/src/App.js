import React, { Fragment } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavbarComponent from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer';
import Blog from './components/layouts/BlogSection';
import BlogDetails from './components/layouts/SingleBlog';
import Home from './components/layouts/Home';
import BlogForm from './components/Dashboard/blogForm';
import State from './context/ResidualWolf/State';
import Login from './components/Auth/Login/Login';
import Signup from './components/Auth/Signup/Signup';

const App = () => {
  return (
    <State>
      <Router>
      <NavbarComponent />
        <Fragment>
          <div className="container-fluid">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/blog-list" component={Blog} />
              <Route exact path="/blog-details" component={BlogDetails} />
              <Route exact path="/create-blog" component={BlogForm} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
            </Switch>
          </div>
        </Fragment>
        <Footer className="bg-secondaryColor" />
      </Router>
    </State>
  );
};

export default App;
