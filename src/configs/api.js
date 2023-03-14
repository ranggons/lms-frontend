import _ from "lodash";

import env from "@configs/env";
import axios from "@libs/axios";
import { baseUrl } from "@services/helper";

export const GET = async (path, params) => {
	const getToken = localStorage.getItem("token");
	var header = {
		"Access-Control-Allow-Origin": "*",
		Authorization: `Bearer ${getToken || ""}`,
		"Content-Type": "application/json",
	};

	let url = `${baseUrl()}/${path}`;

	return new Promise((resolve, reject) => {
		axios
			.get(url, {
				headers: header,
				params: _.isObject(params) ? _.pickBy(params) : undefined,
			})
			.then((response) => {
				if (response.status === 200) {
					return resolve(response);
				}
			})
			.catch((err) => {
				const error = err.response.data;
				return reject(error);
			});
	});
};

export const POST = (path, payload = {}, params = {}) => {
	const getToken = localStorage.getItem("token");
	var header = {
		"Access-Control-Allow-Origin": "*",
		Authorization: `Bearer ${getToken || ""}`,
		"Content-Type": "application/json",
	};

	let url = `${baseUrl()}/${path}`;

	return new Promise((resolve, reject) => {
		axios
			.post(url, payload, {
				headers: header,
				params: _.isObject(params) ? _.omitBy(params, _.isNil) : undefined,
			})
			.then((response) => {
				if (response.status === 200) {
					return resolve(response);
				} else {
					const err = response.status;
					return reject(err);
				}
			})
			.catch((err) => {
				const error = err.response.data;
				return reject(error);
			});
	});
};

export const PATCH = (path, payload, params) => {
	const getToken = localStorage.getItem("token");
	var header = {
		"Access-Control-Allow-Origin": "*",
		Authorization: `Bearer ${getToken || ""}`,
		"Content-Type": "application/json",
	};

	let url = `${baseUrl()}/${path}`;

	return new Promise((resolve, reject) => {
		axios
			.patch(url, payload, {
				headers: header,
				params: _.isObject(params) ? params : undefined,
			})
			.then((response) => {
				if (response.status === 200) {
					return resolve(response);
				} else {
					const err = response.status;
					return reject(err);
				}
			})
			.catch((err) => {
				const error = err.response.data;
				return reject(error);
			});
	});
};

export const UPLOAD_FILE = async (payload) => {
	const getToken = localStorage.getItem("token");
	return new Promise((resolve, reject) => {
		var data = new FormData();
		for (const [val, name] of Object.entries(payload)) {
			data.append(val, name);
		}
		data.append("file", payload);

		axios
			.post(`${env.API}/files`, data, {
				headers: {
					Accept: "application/json",
					"Access-Control-Allow-Origin": "*",
					"Content-Type": "multipart/form-data",
					Authorization: `Bearer ${getToken || ""}`,
				},
			})
			.then((response) => {
				let data = response.data.data;
				if (response.status === 200) {
					return resolve(data);
				} else {
					var _err = { message: data.status.message };
					return reject(_err);
				}
			})
			.catch((err) => {
				const error = err.response.data;
				return reject(error);
			});
	});
};

export const DELETE = (path, payload = {}, params = {}) => {
	const getToken = localStorage.getItem("token");
	var header = {
		"Access-Control-Allow-Origin": "*",
		Authorization: `Bearer ${getToken ? getToken : ""}`,
		"Content-Type": "application/json",
		"x-api-key": env.API_KEY,
	};

	let url = `${baseUrl()}/${path}`;

	return new Promise((resolve, reject) => {
		axios
			.delete(url, {
				headers: header,
				data: payload,
				params: _.isObject(params) ? params : undefined,
			})
			.then((response) => {
				if (response.status === 200) {
					return resolve(response);
				} else {
					const err = response.status;
					return reject(err);
				}
			})
			.catch((err) => {
				const error = err.response.data;
				return reject(error);
			});
	});
};
