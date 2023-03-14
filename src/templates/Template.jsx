import React from "react";
import { Outlet } from "react-router-dom";

const Template = () => {
	return (
		<>
			<div className="flex-grow w-10/12 h-screen overflow-y-hidden bg-slate-100/90">
				<div className="flex flex-col w-full overflow-hidden h-full pb-2">
					<Outlet />
				</div>
			</div>
		</>
	);
};

export default Template;
