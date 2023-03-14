import AuthenticationService from "@services/api/auth/AuthenticationService";

export const login = (data, token) => {
	localStorage.setItem("token", token);
	localStorage.setItem("name", data.name);
};

export const getRedirected = () => {
	return "/rangon/organization";
};

export const logout = async () => {
	await AuthenticationService.logout();

	localStorage.clear();
	window.location = "/login";
};
