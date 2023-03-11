import React from "react";
import PropTypes from "prop-types";

import { cellFormatter } from "@services/formatter";

const TableCell = ({
	value = "",
	mergeClass = "",
	type = "string",
	isFormatted = true,
	shorten = false,
	maxChar = 100,
	onClick = () => {},
}) => {
	return (
		<div
			className={`${mergeClass} text-sm`}
			title={value || ""}
			onClick={onClick}
		>
			{isFormatted ? cellFormatter(value, type, shorten, maxChar) : value || ""}
		</div>
	);
};

TableCell.propTypes = {
	value: PropTypes.any,
	mergeClass: PropTypes.string,
	type: PropTypes.string,
	isFormatted: PropTypes.bool,
	shorten: PropTypes.bool,
	maxChar: PropTypes.number,
	onClick: PropTypes.func,
};

export default TableCell;
