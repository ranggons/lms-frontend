import { DELETE, GET, PATCH, POST } from "@configs/api";

export default {
    get: ({ pageIndex = 0, pageSize = 10, ...props }) =>
        GET(`rangon/organization`, { page: pageIndex + 1, pageSize, ...props }),
    create: ({ data }) => POST(`rangon/organization`, data),
    update: ({ data }) => PATCH(`rangon/organization`, data),
    delete: (id) => DELETE(`rangon/organization`, {}, { id }),
};
