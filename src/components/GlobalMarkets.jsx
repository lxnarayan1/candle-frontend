import { useEffect, useState } from "react";
import { getMarketOverview } from "../services/api";

const GlobalMarkets = () => {
  const [market, setMarket] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const symbol = "^NSEI";
  const range = "1D";

  const fetchMarket = async () => {
    setLoading(true);
    setError(null); // ✅ IMPORTANT: reset error before request

    try {
      const data = await getMarketOverview(symbol, range);

      console.log("MARKET DATA:", data); // optional debug

      setMarket(data);
      setError(null); // ✅ IMPORTANT: clear error on success
    } catch (err) {
      console.error("Market API error:", err);
      setError(
        err.response?.data?.detail ||
          "Market data unavailable. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMarket();
  }, []);

  /* ================= RENDER STATES ================= */

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500">Loading market data…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!market) {
    return null;
  }

  /* ================= UI ================= */

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">
        Market Overview ({market.index})
      </h2>

      <div className="mb-4">
        <p>
          <strong>Current Value:</strong> {market.current_value}
        </p>
        <p
          className={
            market.gain >= 0 ? "text-green-600" : "text-red-600"
          }
        >
          <strong>Change:</strong> {market.gain} (
          {market.gain_percent}%)
        </p>
        <p>
          <strong>Day Range:</strong>{" "}
          {market.day_range.low} – {market.day_range.high}
        </p>
      </div>

      <div>
        <h3 className="font-medium mb-2">Price Movement</h3>
        <ul className="text-sm text-gray-600">
          {market.price_movement?.map((point, index) => (
            <li key={index}>
              {point.time} → {point.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GlobalMarkets;
