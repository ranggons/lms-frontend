import env from "@configs/env";

export const getPaginationPage = (count = 1, pageSize) => {
	const mod = count % pageSize;
	const getNext = mod !== 0 ? 1 : 0;
	const totalPage = parseInt(count / pageSize) + getNext;

	return totalPage;
};

export const baseUrl = () => {
	const path =
		window.location.protocol +
		"//" +
		window.location.hostname +
		":" +
		window.location.port;

	// ikhbal custom dev
	if (path.includes("2000")) {
		return String("http://127.0.0.1:1000/api/v1");
	}

	if (
		path.includes("testing.rangon") ||
		path.includes("127") ||
		path.includes("localhost")
	) {
		return String(env.API_LOCAL + env.API_VERSION);
	}

	if (path.includes("dev.rangon")) {
		return String(env.API_DEV + env.API_VERSION);
	}

	return String(env.API_PROD + env.API_VERSION);
};
