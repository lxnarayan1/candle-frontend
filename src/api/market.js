import { getMarketOverview } from "../services/api";

export const fetchMarketOverview = async () => {
  return await getMarketOverview();
};
