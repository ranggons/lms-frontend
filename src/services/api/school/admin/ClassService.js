import { DELETE, GET, PATCH, POST } from "@configs/api";

export default {
	get: ({ pageIndex = 0, pageSize = 10, ...props }) =>
		GET(`admin/classes`, { page: pageIndex + 1, pageSize, ...props }),
	create: ({ data }) => POST(`admin/classes`, data),
	update: ({ data }) => PATCH(`admin/classes`, data),
	delete: (id) => DELETE(`admin/classes`, {}, { id }),
};
