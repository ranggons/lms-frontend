const env = {
    API: import.meta.env.VITE_API,
    API_KEY: import.meta.env.VITE_API_KEY,
    URL: import.meta.env.VITE_URL,
    CALLBACK: import.meta.env.VITE_URL,
    API_PROD: import.meta.env.VITE_API_PROD,
    API_DEV: import.meta.env.VITE_API_DEV,
    API_LOCAL: import.meta.env.VITE_API_LOCAL,
    API_VERSION: import.meta.env.VITE_API_VERSION
};

export default env;
