// import axios from "axios";

// const apiClient = axios.create({
//   baseURL: "http://127.0.0.1:8000/api/",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });


// apiClient.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("access_token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );


// /**
//  * IMPORTANT:
//  * - Do NOT redirect to /login here
//  * - This allows PUBLIC pages (like markets on home) to work
//  * - Components/routes decide when login is required
//  */
// apiClient.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       // Only clear tokens, no forced navigation
//       localStorage.removeItem("access_token");
//       localStorage.removeItem("refresh_token");
//     }
//     return Promise.reject(error);
//   }
// );

// export const searchCompanies = async (query) => {
//   const res = await apiClient.get("market/search/", {
//     params: { q: query },
//   });
//   return res.data;
// };

// export const getCompanyData = async (symbol, range) => {
//   const res = await apiClient.get("market/company/", {
//     params: { symbol, range },
//   });
//   return res.data;
// };


// export const login = async (email, password) => {
//   const res = await apiClient.post("accounts/login/", {
//     email,
//     password,
//   });
//   return res.data;
// };

// export const signup = async (fullName, email, password) => {
//   const res = await apiClient.post("accounts/signup/", {
//     full_name: fullName,
//     email,
//     password,
//   });
//   return res.data;
// };


// export const getMarketOverview = async (symbol, range) => {
//   const res = await apiClient.get("market/overview/", {
//     params: { symbol, range },
//   });
//   return res.data;
// };

// export default apiClient;

import axios from "axios";

const apiClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api/`,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Attach token ONLY if present
 * Allows public APIs (market overview) to work
 */
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

/**
 * IMPORTANT:
 * - Do NOT redirect to /login here
 * - Public pages must continue working
 */
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
    }
    return Promise.reject(error);
  }
);

/* ================= API FUNCTIONS ================= */

export const getMarketOverview = async (symbol, range) => {
  const res = await apiClient.get("market/overview/", {
    params: { symbol, range },
  });
  return res.data;
};

export const searchCompanies = async (query) => {
  const res = await apiClient.get("market/search/", {
    params: { q: query },
  });
  return res.data;
};

export const getCompanyData = async (symbol, range) => {
  const res = await apiClient.get("market/company/", {
    params: { symbol, range },
  });
  return res.data;
};

export const login = async (email, password) => {
  const res = await apiClient.post("accounts/login/", {
    email,
    password,
  });
  return res.data;
};

export const signup = async (fullName, email, password) => {
  const res = await apiClient.post("accounts/signup/", {
    full_name: fullName,
    email,
    password,
  });
  return res.data;
};

export default apiClient;
