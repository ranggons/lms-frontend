import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Template from "@templates/Template";

import Dashboard from "@pages/Dashboard";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Template />}>
						<Route path="/" element={<Dashboard />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
