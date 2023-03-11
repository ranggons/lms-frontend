import React from "react";
import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router";

const CheckAuthorization =
	({ Component, menu }) =>
	() => {
		return (
			<div
				className={`rounded-tl-md w-full h-full flex flex-col overflow-hidden px-8 pt-4`}
			>
				<Component />
			</div>
		);
	};

CheckAuthorization.propTypes = {
	Component: PropTypes.element,
	menu: PropTypes.string,
};

export default CheckAuthorization;
