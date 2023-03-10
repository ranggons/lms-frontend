import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

const NavLink = ({ to, Icon, title }) => {
	const path = useLocation();

	return (
		<Link
			to={to}
			className={`flex lg:flex flex-row gap-4 p-4 px-5 rounded-lg items-center hover:bg-slate-200 focus:outline-none ${
				path.pathname === to ? "bg-primary-500/50" : ""
			}`}
		>
			<Icon size={"1.5em"} color={path.pathname === to ? "#175482" : "#000"} />
			<h4 className="font-Roboto font-semibold text-base">{title}</h4>
		</Link>
	);
};

NavLink.propTypes = {
	to: PropTypes.string.isRequired,
	Icon: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
};

export default NavLink;
