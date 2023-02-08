import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const InputArea = forwardRef(
	(
		{
			title = false,
			isRequired = true,
			placeholder = false,
			error,
			className = "",
			containerClass = "",
			col,
			row,
			...props
		},
		ref,
	) => {
		return (
			<div
				className={`flex flex-col gap-1  ${
					!title ? "" : "mt-3"
				} ${containerClass}`}
			>
				{title ? (
					<span className="text-sm font-semibold">
						{title}
						{isRequired && <span className="text-red-500 font-normal"> *</span>}
					</span>
				) : null}
				<textarea
					{...props}
					ref={ref}
					className={`border border-primary-600 rounded-2xl p-1 px-3 focus:outline-none focus:border-primary-300 focus:ring-1 focus:ring-primary-600
						${className}`}
					placeholder={placeholder || title}
					cols={col}
					rows={row}
				/>
				{error && (
					<span className="text-sm text-red-500">* {error.message}</span>
				)}
			</div>
		);
	},
);

InputArea.displayName = "InputArea";

InputArea.propTypes = {
	title: PropTypes.string,
	type: PropTypes.string,
	isRequired: PropTypes.bool,
	placeholder: PropTypes.string,
	error: PropTypes.object,
	className: PropTypes.string,
	containerClass: PropTypes.string,
	col: PropTypes.number,
	row: PropTypes.number,
};

export default InputArea;
