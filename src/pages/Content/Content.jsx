import React from "react";
import { Route, Routes } from "react-router";

import TemplateContent from "@templates/TemplateContent";
import { ROUTE_CONTENT } from "@routes/routes";

const Content = () => {
	return (
		<>
			<Routes>
				<Route element={<TemplateContent />}>
					{ROUTE_CONTENT.map(({ path, Component }, key) => (
						<Route key={key} path={path} element={<Component />} />
					))}
				</Route>
			</Routes>
		</>
	);
};

export default Content;
