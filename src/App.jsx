import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Template from "@templates/Template";

import DashboardAdmin from "@pages/Dashboard/DashboardAdmin/DashboardAdmin";
import DashboardAccount from "@pages/Dashboard/DashboardAccount/DashboardAccount";

import LandingPage from "@pages/LandingPage/LandingPage";

import Login from "@pages/Login/Login";
import Example from "@pages/Example";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/example" index element={<Example />} />
					<Route path="/" element={<LandingPage />} />
					<Route path="/login" element={<Login />} />

					<Route path="/dashboard" element={<Template />}>
						<Route index element={<DashboardAdmin />} />
						<Route path="account" element={<DashboardAccount />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
