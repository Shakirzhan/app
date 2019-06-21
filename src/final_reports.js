import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function FinalReports() {
  return (
    <div className="main-wrap">
      <div className="annual-section">
        <b className="annual-section__head">2019</b>
        <div className="annual-section__list">
          <a href="#" className="annual-section__item">
            <b className="annual-section__item-head">Полугодовой отчет</b>
            <b className="annual-section__item-date">01.12.2019</b>
          </a>
        </div>
      </div>
    </div>
  );
}

export default FinalReports