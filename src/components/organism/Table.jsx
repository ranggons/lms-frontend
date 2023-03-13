import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
	flexRender,
	getCoreRowModel,
	getPaginationRowModel,
	useReactTable,
} from "@tanstack/react-table";
import { GoChevronLeft } from "react-icons/go";

import { numberWithDelimeter } from "@services/formatter";

const Table = ({
	columns,
	data,
	pageCount,
	state,
	setPagination,
	total = 0,
	isUsePagination = true,
	mergeClass = "",
}) => {
	const table = useReactTable({
		data: data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		pageCount,
		onPaginationChange: setPagination,
		state: { state },
		getPaginationRowModel: getPaginationRowModel(),
		manualPagination: true,
		initialState: {
			columnVisibility: {
				...Object.assign(
					{},
					...columns.map((item) => ({
						[item.accessorKey]: item.isVisible ?? true,
					})),
				),
			},
		},
	});

	return (
		<>
			<div
				className={`mt-2 overflow-auto custom-scrollbar round-table shadow-md ${mergeClass}`}
			>
				<table className="border-collapse w-full custom-scrollbar">
					<thead className={`sticky top-0`}>
						{table.getHeaderGroups().map((headerGroup) => (
							<tr key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<th
										key={header.id}
										className={`p-2 text-left border-neutral-700 bg-primary-400`}
									>
										{header.column.columnDef.header}
									</th>
								))}
							</tr>
						))}
					</thead>
					<tbody>
						{!data.length ? (
							<tr>
								<td
									className="border border-solid p-1 border-slate-200 text-center"
									colSpan={table.getAllColumns().length}
								>
									No Data Available
								</td>
							</tr>
						) : (
							table.getPaginationRowModel().rows.map((row) => (
								<Fragment key={row.id}>
									<tr className={row?.index % 2 === 0 ? "bg-slate-200/80" : ""}>
										{row.getVisibleCells().map((cell) => (
											<td
												key={cell.id}
												className="border border-solid p-1 border-slate-200"
											>
												{flexRender(
													cell.column.columnDef.cell,
													cell.getContext(),
												)}
											</td>
										))}
									</tr>
								</Fragment>
							))
						)}
					</tbody>
				</table>
			</div>
			{/* Pagination */}
			{isUsePagination && total > 0 ? (
				<div className="w-auto flex flex-row justify-between mt-4 pb-2">
					<div className="flex md:flex-row flex-col md:items-center items-start gap-2">
						<span className="flex gap-2">
							Show
							<select
								className="border border-primary-500 rounded-md px-1"
								value={state.pageSize}
								onChange={(e) => {
									table.setPageSize(Number(e.target.value));
									table.setPageIndex(0);
								}}
							>
								{[10, 20, 50, 100].map((pageSize) => (
									<option key={pageSize} value={pageSize}>
										{pageSize}
									</option>
								))}
								<option value={total}>All</option>
							</select>
						</span>
						<p>from {numberWithDelimeter(total)} results</p>
					</div>
					<div className="flex flex-col md:flex-row md:float-right items-center gap-2">
						<span className="flex gap-2">
							<button
								className={`bg-white border border-primary-500 rounded-md p-1 flex ${
									state.pageIndex === 0 ? "text-gray-400" : "text-slate-900"
								}`}
								onClick={() => table.setPageIndex(0)}
								disabled={state.pageIndex === 0}
							>
								<GoChevronLeft className="w-4 h-4" />
								<GoChevronLeft className="w-4 h-4 ml-[-12px]" />
							</button>
							<button
								className={`bg-white border border-primary-500 rounded-md p-1 ${
									state.pageIndex === 0 ? "text-gray-400" : "text-slate-900"
								}`}
								onClick={() => table.previousPage()}
								disabled={state.pageIndex === 0}
							>
								<GoChevronLeft className="w-4 h-4" />
							</button>
							<button
								className={`bg-white border border-primary-500 rounded-md p-1 ${
									state.pageIndex + 1 === pageCount
										? "text-gray-400"
										: "text-slate-900"
								}`}
								onClick={() => table.nextPage()}
								disabled={state.pageIndex + 1 === pageCount}
							>
								<GoChevronLeft className="w-4 h-4 rotate-180 transform" />
							</button>
							<button
								className={`bg-white border border-primary-500 rounded-md p-1 flex ${
									state.pageIndex + 1 === pageCount
										? "text-gray-400"
										: "text-slate-900"
								}`}
								onClick={() => table.setPageIndex(table.getPageCount() - 1)}
								disabled={state.pageIndex + 1 === pageCount}
							>
								<GoChevronLeft className="w-4 h-4 rotate-180 transform" />
								<GoChevronLeft className="w-4 h-4 ml-[-12px] rotate-180 transform" />
							</button>
						</span>
						<span className="flex items-center gap-1">
							<div>Page</div>
							<strong>
								{state.pageIndex + 1} of {table.getPageCount()}
							</strong>
						</span>
					</div>
				</div>
			) : null}
		</>
	);
};

Table.propTypes = {
	columns: PropTypes.array.isRequired,
	data: PropTypes.array.isRequired,
	pageCount: PropTypes.number,
	state: PropTypes.object.isRequired,
	setPagination: PropTypes.func,
	total: PropTypes.number,
	getRowCanExpand: PropTypes.func,
	SubComponent: PropTypes.func,
	isUsePagination: PropTypes.bool,
	mergeClass: PropTypes.string,
	headerTransparent: PropTypes.bool,
};

export default Table;
