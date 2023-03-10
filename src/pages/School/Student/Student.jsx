import React from "react";
import { Route, Routes } from "react-router";

import { Header } from "@components/organism";

import { ROUTES_STUDENT } from "@routes/routes";

import { useStudentSidebarStore } from "@stores/sidebar/studentSidebar";

import TemplateStudent from "@templates/TemplateStudent";

const Student = () => {
	return (
		<>
			<Routes>
				<Route element={<TemplateStudent />}>
					{ROUTES_STUDENT.map(
						({ path, Component, title, titleParent = "" }, key) => (
							<Route
								key={key}
								path={path}
								element={
									<>
										<Header
											title={title}
											useSidebar={useStudentSidebarStore}
											titleParent={titleParent}
										/>
										<Component />
									</>
								}
							/>
						),
					)}
				</Route>
			</Routes>
		</>
	);
};

export default Student;
