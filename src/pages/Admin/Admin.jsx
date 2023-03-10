import React from "react";
import { Route, Routes } from "react-router";

import { ROUTES_RANGON } from "@routes/routes";

import TemplateRangon from "@templates/TemplateRangon";

const Admin = () => {
	return (
		<>
			<Routes>
				<Route element={<TemplateRangon />}>
					{ROUTES_RANGON.map(({ path, Component }, key) => (
						<Route key={key} path={path} element={<Component />} />
					))}
				</Route>
			</Routes>
		</>
	);
};

export default Admin;
