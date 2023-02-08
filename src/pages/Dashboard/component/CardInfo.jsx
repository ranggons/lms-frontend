import React from "react";
import PropTypes from "prop-types";

const CardInfo = ({ isViewButtonDisabled }) => {
	return (
		<div>
			<button disabled={isViewButtonDisabled}> /</button>
		</div>
	);
};

CardInfo.propTypes = {};

export default CardInfo;
