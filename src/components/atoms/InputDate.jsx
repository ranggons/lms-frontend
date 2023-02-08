import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const InputDate = forwardRef(
	(
		{
			isDisabled = false,
			title = false,
			control,
			isRequired = true,
			placeholder = "Select date",
			selectsRange = false,
			error,
			mergeClass = "",
			...props
		},
		ref,
	) => {
		return (
			<div
				className={`flex flex-col gap-1 ${!title ? "" : "mt-3"} ${mergeClass}`}
			>
				{title ? (
					<span className="text-sm font-semibold">
						{title}
						{isRequired && <span className="text-red-500 font-normal"> *</span>}
					</span>
				) : null}
				<Controller
					name={title}
					control={control}
					render={({ field: { onBlur, onChange, value } }) => {
						return (
							<>
								{selectsRange ? (
									<ReactDatePicker
										disabled={isDisabled}
										dateFormat="dd/MM/yyyy"
										minDate={new Date(new Date().getFullYear(), 0, 1)}
										maxDate={new Date(new Date().getFullYear(), 11, 31)}
										startDate={value?.[0]}
										endDate={value?.[1]}
										onChange={(e) => onChange(e)}
										placeholderText={placeholder}
										selectsRange={selectsRange}
										showTimeSelect={false}
										showMonthDropdown
										isClearable
										className="w-full border border-primary-600 rounded-2xl p-1 px-4 focus:outline-none focus:border-primary-300 focus:ring-1 focus:ring-primary-600"
										ref={ref}
										onBlur={onBlur}
									/>
								) : (
									<ReactDatePicker
										disabled={isDisabled}
										dateFormat="dd/MM/yyyy"
										minDate={new Date(new Date().getFullYear(), 0, 1)}
										maxDate={new Date(new Date().getFullYear(), 11, 31)}
										selected={
											value === null || value === undefined ? "" : value
										}
										onChange={(e) => onChange(e)}
										placeholderText={placeholder}
										showTimeSelect={false}
										showMonthDropdown
										isClearable
										className="w-full border border-primary-600 rounded-2xl p-1 px-4 focus:outline-none focus:border-primary-300 focus:ring-1 focus:ring-primary-600"
										ref={ref}
										onBlur={onBlur}
									/>
								)}
							</>
						);
					}}
					{...props}
				/>
				{error && (
					<span className="text-sm text-red-500">* {error.message}</span>
				)}
			</div>
		);
	},
);

InputDate.displayName = "InputDate";

InputDate.propTypes = {
	isDisabled: PropTypes.bool,
	title: PropTypes.string,
	control: PropTypes.object,
	isRequired: PropTypes.bool,
	placeholder: PropTypes.string,
	selectsRange: PropTypes.bool,
	error: PropTypes.shape({
		message: PropTypes.string,
	}),
	mergeClass: PropTypes.string,
};

export default InputDate;
