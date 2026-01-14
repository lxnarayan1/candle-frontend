import { useEffect, useState } from "react";
import { getMarketOverview } from "../services/api";

const GlobalMarkets = () => {
  const [market, setMarket] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const symbol = "^NSEI";
  const range = "1D";

  useEffect(() => {
    const fetchMarket = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getMarketOverview(symbol, range);
        setMarket(data);
      } catch (err) {
        console.error("Market API error:", err);
        setError("Market data unavailable. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchMarket();
  }, []);

  /* ================= STATES ================= */

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64 text-gray-500">
        Loading market data…
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64 text-red-500">
        {error}
      </div>
    );
  }

  if (!market) return null;

  const isPositive = market.gain >= 0;

  /* ================= UI ================= */

  return (
    <section className="max-w-4xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Market Overview <span className="text-gray-500">({market.index})</span>
        </h2>
        <p className="text-sm text-gray-500">
          Live intraday snapshot
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="rounded-xl border bg-white p-4 shadow-sm">
          <p className="text-sm text-gray-500">Current Value</p>
          <p className="text-xl font-semibold">
            {market.current_value.toLocaleString()}
          </p>
        </div>

        <div className="rounded-xl border bg-white p-4 shadow-sm">
          <p className="text-sm text-gray-500">Change</p>
          <p
            className={`text-xl font-semibold ${
              isPositive ? "text-green-600" : "text-red-600"
            }`}
          >
            {market.gain} ({market.gain_percent}%)
          </p>
        </div>

        <div className="rounded-xl border bg-white p-4 shadow-sm">
          <p className="text-sm text-gray-500">Day Range</p>
          <p className="text-sm font-medium">
            {market.day_range.low} – {market.day_range.high}
          </p>
        </div>
      </div>

      {/* Price Movement */}
      <div className="rounded-xl border bg-white p-4 shadow-sm">
        <h3 className="font-semibold mb-3 text-gray-800">
          Price Movement
        </h3>

        <div className="max-h-64 overflow-y-auto text-sm">
          <table className="w-full border-collapse">
            <thead className="sticky top-0 bg-white">
              <tr className="text-left text-gray-500 border-b">
                <th className="py-2">Time</th>
                <th className="py-2">Value</th>
              </tr>
            </thead>
            <tbody>
              {market.price_movement?.map((point, index) => (
                <tr
                  key={index}
                  className="border-b last:border-none"
                >
                  <td className="py-1">{point.time}</td>
                  <td className="py-1 font-medium">
                    {point.value.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default GlobalMarkets;
