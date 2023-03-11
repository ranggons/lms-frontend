import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ value, mergeClass = "", isCenter = false }) => {
	return (
		<div
			className={`${mergeClass} ${
				isCenter ? "text-center" : ""
			} text-general-300 font-semibold`}
			title={value}
		>
			{value}
		</div>
	);
};

TableHeader.propTypes = {
	value: PropTypes.any.isRequired,
	mergeClass: PropTypes.string,
	isCenter: PropTypes.bool,
};

export default TableHeader;
