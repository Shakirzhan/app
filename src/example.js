import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import menuList from "./menu-list"

function BasicExample() {
  return (
    <Router>
      
      <Route component={Menu} />
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

function Menu() {
  const doubled = menuList.map((it) => 
    <li className={`main-tab__item col-lg-3 ${it.class_active}`} key={`${it.id}`}>
      <Link to={`${it.url}`}>{`${it.name_url}`}</Link>
    </li> );

  return (
    <ul className="main-tab row">
      {doubled}   
    </ul> 
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

export default BasicExample