import { DELETE, GET, PATCH, POST } from "@configs/api";

export default {
	get: ({ pageIndex = 0, pageSize = 10, ...props }) =>
		GET(`admin/teachers`, { page: pageIndex + 1, pageSize, ...props }),
	create: ({ data }) => POST(`admin/teachers`, data),
	update: ({ data }) => PATCH(`admin/teachers`, data),
	delete: (id) => DELETE(`admin/teachers`, {}, { id }),
};
