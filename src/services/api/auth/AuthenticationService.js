import { POST } from "@configs/api";

export default {
	login: ({ data }) => POST("auth/login", data),
	logout: () => POST("auth/logout"),
};
