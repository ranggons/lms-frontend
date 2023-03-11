import { NavLinkCollapse } from "@components/moleculs";
import React from "react";
import { Outlet } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import { ROUTES_RANGON } from "@routes/routes";

import { useRangonSidebarStore } from "@stores/sidebar/rangonSidebar";

const TemplateAdmin = () => {
	const isOpen = useRangonSidebarStore((state) => state.isOpen);
	const setIsOpen = useRangonSidebarStore((state) => state.setIsOpen);

	return (
		<div className="flex font-Poppins">
			<>
				<div
					className={`flex-shrink-0 h-screen lg:block hidden top-0 left-0 bg-white overflow-y-scroll scrollbar-hide ease-linear duration-200 lg:w-1/6 w-1/12 items-center translate-x-0`}
				>
					<div className={`flex flex-col gap-1 pb-2`}>
						<div
							className={`flex flex-row items-center lg:justify-start justify-center mx-4 my-4`}
						></div>
						{ROUTES_RANGON.map(({ title, icon, child }, key) =>
							child.length ? (
								<NavLinkCollapse
									Icon={icon}
									title={title}
									child={child.filter((item) => item.isNavbar)}
									key={key}
								/>
							) : null,
						)}
					</div>
				</div>

				<div
					className={`${
						isOpen
							? "absolute sm:w-2/6 w-1/2 border-r-[1px] border-black bg-white h-screen top-0 left-0 overflow-y-scroll scrollbar-hide flex-shrink-0 z-40"
							: "hidden"
					} lg:hidden gap-1 pb-2`}
				>
					<div className={`flex flex-col`}>
						<div
							className={`flex flex-row items-center ${
								isOpen ? "justify-between" : ""
							} mx-4 my-4`}
						>
							<button
								onClick={() => setIsOpen(!isOpen)}
								className="lg:hidden block text-white"
							>
								<FaAlignJustify />
							</button>
						</div>
						<div className="md:px-3 px-2">
							<NavLinkCollapse
								Icon={MdOutlineSettings}
								title="Manajemen"
								child={ROUTES_RANGON.filter((item) => item.isNavbar)}
							/>
						</div>
					</div>
				</div>
			</>
			<div className="flex-grow w-10/12 h-screen overflow-y-hidden">
				<div className="flex flex-col w-full bg-[#F6F8FD] overflow-hidden h-full">
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
		</div>
	);
};

export default TemplateAdmin;
