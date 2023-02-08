import axios from "@libs/axios";
import env from "@configs/env";
import _ from "lodash";

export const GET = async (path, params) => {
    const getToken = localStorage.getItem("token");
    var header = {
        "Access-Control-Allow-Origin": "*",
        // Authorization: `Bearer ${getToken || ""}`,
        "Content-Type": "application/json",
        // TODO: Remove later
        'X-RapidAPI-Key': '1b8e0c91c6mshadb8a0762c738e6p10be95jsnc1365c6f498e',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    };

    return new Promise((resolve, reject) => {
        axios
            .get(path, {
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
        Authorization: `Bearer ${getToken || ""}`,
        "Content-Type": "application/json",
    };

    return new Promise((resolve, reject) => {
        axios
            .post(path, payload, {
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
        Authorization: `Bearer ${getToken || ""}`,
        "Content-Type": "application/json",
    };

    return new Promise((resolve, reject) => {
        axios
            .put(path, payload, {
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
                const error = err.response
                    ? err.response.data.message
                    : JSON.parse(JSON.stringify(err));
                return reject(error);
            });
    });
};