import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { FaAngleUp } from "react-icons/fa";
import { Disclosure } from "@headlessui/react";

const NavLinkCollapse = ({ title, Icon, child }) => {
	const path = useLocation();

	return (
		<Disclosure
			defaultOpen={child.map((item) => item.fullPath).includes(path.pathname)}
		>
			{({ open }) => (
				<>
					<Disclosure.Button
						className={`flex w-full justify-between items-center rounded-lg pr-2 text-left text-sm font-medium hover:bg-primary-100 focus:outline-none
          ${open ? "" : ""}
          `}
					>
						<div className="flex gap-1 my-4 items-center w-full mx-0 xl:mx-4">
							<span className="flex flex-shrink-0 basis-1/5 justify-center">
								<Icon
									size={"1.5em"}
									color={
										child.filter((item) => path.pathname === item.fullPath)
											.length
											? "#000"
											: "#9DA2AD"
									}
									className={"hover:text-black"}
								/>
							</span>
							<span className="basis-full">
								<h4 className="font-semibold xl:text-base text-sm text-dark">
									{title}
								</h4>
							</span>
						</div>
						<FaAngleUp
							className={`${
								open ? "rotate-180 transform" : ""
							} h-5 w-5 flex-shrink-0 text-dark`}
						/>
					</Disclosure.Button>
					{child.map((item, index) => (
						<Disclosure.Panel
							className={`py-3 text-sm text-black ${
								item.fullPath === path.pathname
									? "bg-primary-100 border-r-4 border-r-primary-500"
									: "hover:bg-primary-300/60"
							}`}
							key={index}
						>
							<Link to={item.fullPath}>
								<h5
									className={`font-bold xl:ml-15 ml-10 text-sm ${
										item.fullPath === path.pathname
											? "text-primary-500"
											: "text-general-300"
									}`}
								>
									{item.title}
								</h5>
							</Link>
						</Disclosure.Panel>
					))}
				</>
			)}
		</Disclosure>
	);
};

NavLinkCollapse.propTypes = {
	title: PropTypes.string.isRequired,
	Icon: PropTypes.func.isRequired,
	child: PropTypes.array.isRequired,
};

export default NavLinkCollapse;
