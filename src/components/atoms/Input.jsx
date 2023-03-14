import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Input = forwardRef(
	(
		{
			title,
			type = "text",
			isRequired = true,
			placeholder = false,
			error,
			className = "",
			isDisabled = false,
			...props
		},
		ref,
	) => {
		return (
			<div className="flex flex-col gap-1 mt-3">
				{title && (
					<span className="text-sm font-semibold">
						{title}
						{isRequired && <span className="text-red-500 font-normal"> *</span>}
					</span>
				)}
				<input
					disabled={isDisabled}
					{...props}
					type={type}
					ref={ref}
					className={`border border-primary-500 rounded-md p-1 px-4 focus:outline-none focus:border-primary-300 focus:ring-1 focus:ring-primary-300
						${className}`}
					placeholder={placeholder || title}
				/>
				{error && (
					<span className="text-sm text-red-500">* {error.message}</span>
				)}
			</div>
		);
	},
);

Input.propTypes = {
	title: PropTypes.string.isRequired,
	type: PropTypes.string,
	isRequired: PropTypes.bool,
	placeholder: PropTypes.string,
	error: PropTypes.object,
	className: PropTypes.string,
	isDisabled: PropTypes.bool,
};

export default Input;
