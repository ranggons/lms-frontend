import { Spinner } from "@components/moleculs";
import { useCustomQuery } from "@hooks/useCustomQuery";
import React from "react";

import { Button } from "@components/atoms";

import example from "@services/api/example";

import Error from "@templates/Error";

const Example = () => {
	const { data, error, isFetching, isLoading } = useCustomQuery({
		queryKey: "tes",
		api: example.get,
	});

	if (isLoading || isFetching) return <Spinner />;

	if (error) return <Error />;

	return (
		<div className="bg-slate-400 w-full h-full px-2 pt-2">
			<Button
				text="Button"
				background="bg-blue-500 hover:bg-blue-600"
				textColor="text-white"
				onClick={() => console.log("tes")}
			/>
			<ul className="list-disc">
				{data.resource.videos.map((item, index) => (
					<li key={index}>{item.title}</li>
				))}
			</ul>
		</div>
	);
};

export default Example;
