import React from "react";
import { Route, Routes } from "react-router";

import { Header } from "@components/organism";

import { ROUTES_ADMIN } from "@routes/routes";

import { useAdminSidebarStore } from "@stores/sidebar/adminSidebar";

import TemplateAdmin from "@templates/TemplateAdmin";

const Admin = () => {
	return (
		<>
			<Routes>
				<Route element={<TemplateAdmin />}>
					{ROUTES_ADMIN.map((item) => item.child)
						.flat()
						.map(({ path, Component, title, titleParent = "" }, key) => (
							<Route
								key={key}
								path={path}
								element={
									<>
										<Header
											title={title}
											useSidebar={useAdminSidebarStore}
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
