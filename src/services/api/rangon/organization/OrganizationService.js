import { DELETE, GET, PATCH, POST } from "@configs/api";

export default {
	get: ({ pageIndex = 0, pageSize = 10, ...props }) =>
		GET(`rangon/organizations`, {
			page: pageIndex + 1,
			size: pageSize,
			...props,
		}),
	create: ({ data }) => POST(`rangon/organizations`, data),
	update: ({ data }) => PATCH(`rangon/organizations/${data.id}`, data),
	delete: (id) => DELETE(`rangon/organizations/${id}`),
};
