import React from "react";
import PropTypes from "prop-types";
import { GoChevronLeft } from "react-icons/go";

import { numberWithDelimeter } from "@services/formatter";
import { getPaginationPage } from "@services/helper";

const Pagination = ({
	page,
	pageSize,
	total,
	handlePagination,
	pageSizes = [10, 20, 50, 100],
	flexDirection = "md:flex-row flex-col",
	alignItemPaginator = "items-center",
}) => {
	return (
		<div className="w-auto flex flex-row justify-between sm:gap-2 gap-2 mt-4 pb-2">
			<div className={`flex ${flexDirection} items-start gap-2`}>
				<span className="flex flex-row gap-1">
					Show
					<select
						className="border border-primary-500 rounded-md px-1"
						value={pageSize}
						onChange={(e) => {
							handlePagination({
								type: "size",
								size: Number(e.target.value),
							});
						}}
					>
						{pageSizes.map((pageSize) => (
							<option key={pageSize} value={pageSize}>
								{pageSize}
							</option>
						))}
						<option value={total}>All</option>
					</select>
				</span>
				<p>from {numberWithDelimeter(total)} results</p>
			</div>
			<div
				className={`flex ${flexDirection} md:float-right ${alignItemPaginator} gap-2`}
			>
				<span className="flex gap-2">
					<button
						className={`bg-white border border-primary-500 rounded-md p-1 flex ${
							page === 0 || total === 0 ? "text-gray-400" : "text-slate-900"
						}`}
						onClick={() => handlePagination({ type: "first" })}
						disabled={page === 0 || total === 0}
					>
						<GoChevronLeft className="w-4 h-4" />
						<GoChevronLeft className="w-4 h-4 ml-[-12px]" />
					</button>
					<button
						className={`bg-white border border-primary-500 rounded-md p-1 ${
							page === 0 || total === 0 ? "text-gray-400" : "text-slate-900"
						}`}
						onClick={() => handlePagination({ type: "prev" })}
						disabled={page === 0 || total === 0}
					>
						<GoChevronLeft className="w-4 h-4" />
					</button>
					<button
						className={`bg-white border border-primary-500 rounded-md p-1 ${
							page + 1 === getPaginationPage(total, pageSize) || total === 0
								? "text-gray-400"
								: "text-slate-900"
						}`}
						onClick={() => handlePagination({ type: "next" })}
						disabled={
							page + 1 === getPaginationPage(total, pageSize) || total === 0
						}
					>
						<GoChevronLeft className="w-4 h-4 rotate-180 transform" />
					</button>
					<button
						className={`bg-white border border-primary-500 rounded-md p-1 flex ${
							page + 1 === getPaginationPage(total, pageSize) || total === 0
								? "text-gray-400"
								: "text-slate-900"
						}`}
						onClick={() =>
							handlePagination({
								type: "last",
								lastPage: getPaginationPage(total, pageSize) - 1,
							})
						}
						disabled={
							page + 1 === getPaginationPage(total, pageSize) || total === 0
						}
					>
						<GoChevronLeft className="w-4 h-4 rotate-180 transform" />
						<GoChevronLeft className="w-4 h-4 ml-[-12px] rotate-180 transform" />
					</button>
				</span>
				<span className="flex items-center gap-1">
					<div>Page</div>
					<strong>
						{page + 1} of {getPaginationPage(total, pageSize) || 1}
					</strong>
				</span>
			</div>
		</div>
	);
};

Pagination.propTypes = {
	page: PropTypes.number,
	pageSize: PropTypes.number,
	total: PropTypes.number,
	handlePagination: PropTypes.func,
	pageSizes: PropTypes.array,
	flexDirection: PropTypes.string,
	alignItemPaginator: PropTypes.string,
};

export default Pagination;
