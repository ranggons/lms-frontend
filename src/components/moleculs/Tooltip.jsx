import React from "react";
import PropTypes from "prop-types";

const Tooltip = ({
	tooltip,
	size,
	children,
	className = "",
	height = "max-h-56",
}) => {
	return (
		<div className="group relative flex justify-center">
			<span>{tooltip}</span>
			<span
				className={`${size} ${className} ${height} absolute top-[-.5rem] right-5 scale-0 transition-all overflow-auto custom-scrollbar rounded bg-white text-xs text-white group-hover:scale-100`}
			>
				{children}
			</span>
		</div>
	);
};

Tooltip.propTypes = {
	tooltip: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.node,
		PropTypes.string,
	]),
	size: PropTypes.string.isRequired,
	children: PropTypes.any,
	className: PropTypes.string,
	height: PropTypes.string,
};

export default Tooltip;
