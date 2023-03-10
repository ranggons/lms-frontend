import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Template = () => {
	return (
		<>
			<div className="flex-grow w-10/12 h-screen overflow-y-hidden bg-slate-100/90">
				<div className="flex flex-col w-full overflow-hidden h-full pb-2">
					<Outlet />
				</div>
				<ToastContainer
					position="top-right"
					autoClose={2000}
					newestOnTop
					hideProgressBar
					closeOnClick
					rtl={false}
					pauseOnFocusLoss={false}
					draggable
					theme="colored"
				/>
			</div>
		</>
	);
};

export default Template;
