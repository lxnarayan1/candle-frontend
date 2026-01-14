import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { getMarketOverview } from "../services/api";

const ranges = ["1D", "5D", "1M", "3M", "YTD", "1Y"];

const indices = {
  "NIFTY 50": "^NSEI",
  "BANKNIFTY": "^NSEBANK",
  "FINNIFTY": "^NSEFIN",
  "SENSEX": "^BSESN",
};

export default function GlobalMarkets() {
  const [market, setMarket] = useState(null);
  const [range, setRange] = useState("1D");
  const [index, setIndex] = useState("NIFTY 50");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMarket = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getMarketOverview(indices[index], range);
        setMarket(data);
      } catch (err) {
        console.error("Market API error:", err);
        setError("Market data unavailable");
      } finally {
        setLoading(false);
      }
    };

    fetchMarket();
  }, [index, range]);

  if (loading) {
    return (
      <div className="h-64 flex items-center justify-center text-gray-500">
        Loading market data…
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-64 flex items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  if (!market) return null;

  const isPositive = market.gain >= 0;

  const chartData =
    market.price_movement?.map((p) => ({
      time: p.time,
      value: p.value,
    })) || [];

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">
        Global Markets
      </h2>

      <div className="bg-white rounded-2xl shadow-md p-6">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6 items-end">
          <div>
            <p className="text-gray-500 text-sm">Current Value</p>
            <p className="text-3xl font-bold">
              {market.current_value.toLocaleString()}
            </p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Gain</p>
            <p
              className={`text-2xl font-semibold ${
                isPositive ? "text-green-600" : "text-red-600"
              }`}
            >
              {isPositive ? "+" : ""}
              {market.gain} ({market.gain_percent}%)
            </p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Day Range</p>
            <p className="text-lg font-medium">
              {market.day_range.low} — {market.day_range.high}
            </p>
          </div>

          {/* Index Dropdown */}
          <div className="md:text-right">
            <select
              value={index}
              onChange={(e) => setIndex(e.target.value)}
              className="border rounded-lg px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-black"
            >
              {Object.keys(indices).map((idx) => (
                <option key={idx} value={idx}>
                  {idx}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Chart */}
        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="time"
                tick={{ fontSize: 12 }}
                stroke="#6b7280"
              />
              <YAxis
                domain={["auto", "auto"]}
                tick={{ fontSize: 12 }}
                stroke="#6b7280"
              />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#00C853"
                strokeWidth={2.5}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Range Buttons */}
        <div className="flex justify-center gap-3 mt-6">
          {ranges.map((r) => (
            <button
              key={r}
              onClick={() => setRange(r)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition
                ${
                  range === r
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
