import React from "react";
import PropTypes from "prop-types";

import { Header } from "@components/organism";

const HOCSchool =
	({ Component, menu, title = "" }) =>
	() => {
		return (
			<div
				className={`bg-white rounded-tl-md w-full h-full flex flex-col overflow-hidden`}
			>
				<Header title={title} />
				<Component />
			</div>
		);
	};

HOCSchool.propTypes = {
	Component: PropTypes.element,
	menu: PropTypes.string,
	title: PropTypes.string,
};

export default HOCSchool;
