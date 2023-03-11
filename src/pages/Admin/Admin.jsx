import React from "react";
import { Route, Routes } from "react-router";

import { Header } from "@components/organism";

import { ROUTES_RANGON } from "@routes/routes";

import { useRangonSidebarStore } from "@stores/sidebar/rangonSidebar";

import TemplateRangon from "@templates/TemplateRangon";

const Admin = () => {
	return (
		<>
			<Routes>
				<Route element={<TemplateRangon />}>
					{ROUTES_RANGON.map((item) => item.child)
						.flat()
						.map(({ path, Component, title, titleParent = "" }, key) => (
							<Route
								key={key}
								path={path}
								element={
									<>
										<Header
											title={title}
											useSidebar={useRangonSidebarStore}
											titleParent={titleParent}
										/>
										<Component />
									</>
								}
							/>
						))}
				</Route>
			</Routes>
		</>
	);
};

export default Admin;
