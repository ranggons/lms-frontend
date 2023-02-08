import React from "react";
import PropTypes from "prop-types";
import { Listbox, Transition } from "@headlessui/react";

const ListboxSelect = ({
	selectedValue,
	onChange,
	options,
	size = "w-full",
	multiple = false,
}) => {
	return (
		<Listbox
			value={selectedValue}
			onChange={onChange}
			as="div"
			multiple={multiple}
		>
			{({ open }) => (
				<div className="relative">
					<span className={`${size} inline-block rounded-md shadow-sm`}>
						<Listbox.Button className="cursor-default relative w-full rounded-lg border border-primary-500 bg-white pl-3 pr-10 py-2 text-left focus:outline-none focus:shadow-outline-blue focus:border-primary-300 transition ease-in-out duration-150 sm:text-sm sm:leading-5">
							<span className="block truncate">
								{options?.find((item) => item.value === selectedValue)?.label}
							</span>
							<span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
								<svg
									className="h-5 w-5 text-gray-400"
									viewBox="0 0 20 20"
									fill="none"
									stroke="currentColor"
								>
									<path
										d="M7 7l3-3 3 3m0 6l-3 3-3-3"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</span>
						</Listbox.Button>
					</span>
					<Transition
						show={open}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
						className="absolute mt-1 w-full rounded-md bg-white shadow-lg z-10"
					>
						<Listbox.Options
							static
							className="max-h-60 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto custom-scrollbar focus:outline-none sm:text-sm sm:leading-5 border border-black/10"
						>
							{options.map(({ label, value, disable = false }) => (
								<Listbox.Option key={value} value={value} disabled={disable}>
									{({ selected, active, disabled }) => (
										<div
											className={`${
												active && !disabled
													? "text-white bg-blue-600"
													: "text-gray-900"
											} cursor-default select-none relative py-2 pl-8 pr-4`}
										>
											<span
												className={`${
													selected ? "font-semibold" : "font-normal"
												} ${
													disabled ? "text-gray-400 font-thin" : ""
												} block truncate`}
											>
												{label}
											</span>
											{selected && !disabled && (
												<span
													className={`${
														active && !disabled ? "text-white" : "text-blue-600"
													} absolute inset-y-0 left-0 flex items-center pl-1.5`}
												>
													<svg
														className="h-5 w-5"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 20 20"
														fill="currentColor"
													>
														<path
															fillRule="evenodd"
															d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
															clipRule="evenodd"
														/>
													</svg>
												</span>
											)}
										</div>
									)}
								</Listbox.Option>
							))}
						</Listbox.Options>
					</Transition>
				</div>
			)}
		</Listbox>
	);
};

ListboxSelect.propTypes = {
	selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	onChange: PropTypes.func,
	options: PropTypes.array,
	size: PropTypes.string,
	multiple: PropTypes.bool,
};

export default ListboxSelect;
