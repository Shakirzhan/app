import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import mainReport from './main_report'

function FinalReports() {
  function elements(el) {
    const doubled = el.map((it) =>
      <Link to="/det" className="annual-section__item" key={it.id}>
        <b className="annual-section__item-head">{it.title}</b>
        <b className="annual-section__item-date">{it.date}</b>
      </Link>
    );
    return(
      <div className="annual-section__list">
        {doubled} 
      </div> 
    );
  }
  const doubled = mainReport.map((it) =>
    <div className="annual-section" key={it.id}>
      <b className="annual-section__head">{it.year}</b>
      {elements(it.child_element)} 
    </div> 
  );
  return (
    <div className="main-wrap">
      {doubled} 
    </div>
  );
}

export default FinalReports