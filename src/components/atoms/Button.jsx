import React from "react";
import PropTypes from "prop-types";

const Button = ({
	text,
	type = "button",
	background = "bg-blue-400",
	textColor = "text-white",
	size = "h-9 w-32",
	onClick,
	isDisabled = false,
	onRight = false,
	leftIcon = false,
	rightIcon = false,
	rounded = "rounded-2xl",
	padding = "px-3",
	additionalClass = "",
}) => {
	return (
		<button
			className={`${background} ${textColor} ${rounded} py-2 ${padding} flex flex-row gap-2 justify-center items-center shadow-[1px_1px_3px_1px_gray] ${size} ${
				onRight ? "float-right" : ""
			} ${additionalClass} ${isDisabled ? "cursor-not-allowed" : ""}`}
			onClick={onClick}
			type={type}
			disabled={isDisabled}
		>
			{leftIcon && leftIcon} {text} {rightIcon && rightIcon}
		</button>
	);
};

Button.propTypes = {
	text: PropTypes.string,
	type: PropTypes.string,
	background: PropTypes.string,
	textColor: PropTypes.string,
	size: PropTypes.string,
	onClick: PropTypes.func,
	isDisabled: PropTypes.bool,
	onRight: PropTypes.bool,
	leftIcon: PropTypes.element,
	rightIcon: PropTypes.element,
	rounded: PropTypes.string,
	padding: PropTypes.string,
	additionalClass: PropTypes.string,
};

export default Button;
