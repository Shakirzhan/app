import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FinalReports from './final_reports'

function logoLink() {
  return (
    <Link to=""><img src="img/logo_v_2.svg" alt="logo" /></Link>
  );
}

export default logoLink