import { GET } from "@configs/api";
import env from "@configs/env";

let baseURL = ""

if (import.meta.env.MODE === "development") {
    baseURL = env.API_DEV
} else {
    baseURL = env.API_PROD
}

export default {
    get: () => GET(`${baseURL}/api/test`)
}