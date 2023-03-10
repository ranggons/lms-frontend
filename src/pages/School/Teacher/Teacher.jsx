import React from "react";
import { Route, Routes } from "react-router";

import { ROUTES_TEACHER } from "@routes/routes";

import TemplateTeacher from "@templates/TemplateTeacher";
import { Header } from "@components/organism";
import { useTeacherSidebarStore } from "@stores/sidebar/teacherSidebar";

const Teacher = () => {
	return (
		<>
			<Routes>
				<Route element={<TemplateTeacher />}>
					{ROUTES_TEACHER.map(
						({ path, Component, title, titleParent = "" }, key) => (
							<Route
								key={key}
								path={path}
								element={
									<>
										<Header
											title={title}
											useSidebar={useTeacherSidebarStore}
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

export default Teacher;
