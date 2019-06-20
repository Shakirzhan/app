import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function GetMenu(props) {
	const { menuList } = props;
	return (
		<li>
			<Link to={`${menuList.url}`}>{`${menuList.name_url}`}</Link>
		</li>
	);
}

export default GetMenu