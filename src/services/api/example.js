import { GET } from "@configs/api";
import env from "@configs/env";

let baseURL = ""
let path = window.location.protocol + '//' + window.location.hostname;

if (path.includes("127")) {
    baseURL = env.API_LOCAL
} else if (path.includes("dev.rangon")) {
    baseURL = env.API_DEV
} else {
    baseURL = env.API_PROD
}

export default {
    get: () => GET(`${baseURL}/api/test`)
}