import axios from "@libs/axios";
import env from "@configs/env";
import _ from "lodash";

export const GET = async (path, params) => {
    const getToken = localStorage.getItem("token");
    var header = {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${getToken ? getToken : ""}`,
        "Content-Type": "application/json",
        "x-api-key": env.API_KEY,
    };
    return new Promise((resolve, reject) => {
        let url = path;
        if (!url.toLowerCase().startsWith("http")) url = `${env.API_IHE}${path}`;
        axios
            .get(url, {
                // headers: getToken ? header : API_KEY_HEADER,
                headers: header,
                params: _.isObject(params) ? params : undefined,
            })
            .then((response) => {
                if (response.status === 200) {
                    return resolve(response);
                }
            })
            .catch((err) => {
                const error = err.message;
                return reject(error);
            });
    });
};

export const POST = (path, payload, params) => {
    const getToken = localStorage.getItem("token");
    var header = {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${getToken ? getToken : ""}`,
        "Content-Type": "application/json",
        "x-api-key": env.API_KEY,
    };
    return new Promise((resolve, reject) => {
        let url = path;
        if (!url.toLowerCase().startsWith("http")) url = `${env.API_IHE}${path}`;
        axios
            .post(url, payload, {
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
                const error = err.response
                    ? { message: err.response.data.title }
                    : JSON.parse(JSON.stringify(err));
                return reject(error);
            });
    });
};

export const PUT = (path, payload, params) => {
    const getToken = localStorage.getItem("token");
    var header = {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${getToken ? getToken : ""}`,
        "Content-Type": "application/json",
        "x-api-key": env.API_KEY,
    };
    return new Promise((resolve, reject) => {
        let url = path;
        if (!url.toLowerCase().startsWith("http")) url = `${env.API_IHE}${path}`;
        axios
            .put(url, payload, {
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
                const error = err.response
                    ? err.response.data.message
                    : JSON.parse(JSON.stringify(err));
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
            .post(`${env.API_SECURITY}/files`, data, {
                headers: {
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${getToken ? getToken : ""}`,
                    "x-api-key": env.API_KEY,
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
                const error = err.response
                    ? err.response.data.message
                    : JSON.parse(JSON.stringify(err));
                return reject(error);
            });
    });
};