import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Menu, Transition } from "@headlessui/react";
import { FaAlignJustify, FaAngleDown } from "react-icons/fa";
import InitialsAvatar from "react-initials-avatar";
import "react-initials-avatar/lib/ReactInitialsAvatar.css";

import { logout } from "@services/functions/Auth";

import { useAuthStore } from "@stores/authStore";

const Header = ({ titleParent = "", title = "", useSidebar }) => {
	const isOpen = useSidebar((state) => state.isOpen);
	const setIsOpen = useSidebar((state) => state.setIsOpen);
	const user = useAuthStore((state) => state.user);

	return (
		<>
			<div className="flex flex-row justify-between items-center px-4 py-4 bg-white border-b-2 border-general-300/50">
				<span className="flex md:gap-3 gap-2 md:ml-3 ml-1 items-center">
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="lg:hidden block"
					>
						<FaAlignJustify className="text-dark hover:text-gray-300" />
					</button>
					<h1 className="font-bold lg:text-xl text-md lg:ml-2 text-dark tracking-wide">
						{title}
					</h1>
				</span>
				<div className="flex flex-row gap-3 items-center">
					<p className="text-sm text-white"></p>
					<div
						className={`flex items-center justify-center w-12 h-12 rounded-full text-center border-4 border-general-300 bg-white`}
					>
						<InitialsAvatar
							name={localStorage.getItem("name")}
							className="bg-transparent text-general-700"
						/>
					</div>
					<Menu as="div" className="relative inline-block text-left">
						<div>
							<Menu.Button className="inline-flex w-full justify-center rounded-md py-2 text-sm font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
								<FaAngleDown
									className="ml-2 -mr-1 h-5 w-5 text-dark hover:text-gray-500"
									aria-hidden="true"
								/>
							</Menu.Button>
						</div>
						<Transition
							as={Fragment}
							enter="transition ease-out duration-100"
							enterFrom="transform opacity-0 scale-95"
							enterTo="transform opacity-100 scale-100"
							leave="transition ease-in duration-75"
							leaveFrom="transform opacity-100 scale-100"
							leaveTo="transform opacity-0 scale-95"
						>
							<Menu.Items className="absolute right-0 mt-2 w-36 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
								<div className="px-1 py-1 ">
									<Menu.Item>
										{({ active }) => (
											<button
												className={`${
													active ? "bg-primary-500 text-white" : "text-gray-900"
												} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
												onClick={logout}
											>
												Logout
											</button>
										)}
									</Menu.Item>
								</div>
							</Menu.Items>
						</Transition>
					</Menu>
				</div>
			</div>
			<div className="bg-white flex py-3">
				<p className="ml-4 text-general-300 text-sm">{titleParent}</p>
				<p className="text-primary-500 font-bold text-sm">{title}</p>
			</div>
		</>
	);
};

Header.propTypes = {
	titleParent: PropTypes.string,
	title: PropTypes.string,
	useSidebar: PropTypes.func,
};

export default Header;
