import axios from "axios";

const RAW_BASE_URL = import.meta.env.VITE_API_BASE_URL.replace(/\/$/, "");

const apiClient = axios.create({
  baseURL: `${RAW_BASE_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

/* ================= MARKET ================= */

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

export const getCompanyData = async (symbol) => {
  const res = await apiClient.get("market/company/", {
    params: { symbol },
  });
  return res.data;
};

/* ================= AUTH (if needed) ================= */

export const login = async (email, password) => {
  const res = await apiClient.post("accounts/login/", {
    email,
    password,
  });
  return res.data;
};

export default apiClient;

export const signup = async (fullName, email, password) => {
  const res = await apiClient.post("accounts/signup/", {
    full_name: fullName,
    email,
    password,
  });
  return res.data;
};


