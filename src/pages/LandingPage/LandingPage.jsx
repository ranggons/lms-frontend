import { Button } from "@components/atoms";
import { Navbar, Footer } from "@components/organism";
import React from "react";

import { Spinner } from "@components/moleculs";

import { useCustomQuery } from "@hooks/useCustomQuery";

import example from "@services/api/example";

const LandingPage = () => {
	const { data, isFetching, isLoading } = useCustomQuery({
		api: example.get,
		queryKey: "test",
	});

	if (isLoading || isFetching) return <Spinner />;

	return <div>LandingPage</div>;
};

export default LandingPage;


