import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  TrendingUp,
  TrendingDown,
  BarChart3,
  Activity,
} from "lucide-react";
import { getCompanyData } from "../services/api";

const TIMEFRAMES = ["1D", "1W", "1M", "3M", "1Y"];

export default function CompanyDetail() {
  const { symbol } = useParams();

  const [range, setRange] = useState("1D");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCompany();
    // eslint-disable-next-line
  }, [symbol, range]);

  const fetchCompany = async () => {
    try {
      setLoading(true);
      const res = await getCompanyData(symbol, range);
      setData(res);
    } catch (err) {
      setError("Unable to load company data");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading company data…
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  const isPositive = data.gain >= 0;

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-6">
        <h1 className="text-3xl font-bold">{data.name}</h1>
        <p className="text-gray-500">{data.symbol}</p>
      </div>

      {/* Price Card */}
      <div className="max-w-7xl mx-auto bg-white p-6 rounded-2xl shadow mb-6">
        <div className="flex justify-between items-end mb-6">
          <div>
            <div className="flex items-center gap-4">
              <h2 className="text-4xl font-bold">
                {data.current_value}
              </h2>
              <span
                className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold ${
                  isPositive
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {isPositive ? (
                  <TrendingUp size={16} />
                ) : (
                  <TrendingDown size={16} />
                )}
                {data.gain} ({data.gain_percent}%)
              </span>
            </div>
          </div>

          <div className="flex gap-2">
            {TIMEFRAMES.map((tf) => (
              <button
                key={tf}
                onClick={() => setRange(tf)}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  range === tf
                    ? "bg-black text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {tf}
              </button>
            ))}
          </div>
        </div>

        {/* Chart */}
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data.price_movement}>
              <defs>
                <linearGradient id="price" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor={isPositive ? "#22c55e" : "#ef4444"}
                    stopOpacity={0.3}
                  />
                  <stop
                    offset="95%"
                    stopColor={isPositive ? "#22c55e" : "#ef4444"}
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis domain={["dataMin - 10", "dataMax + 10"]} />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="value"
                stroke={isPositive ? "#22c55e" : "#ef4444"}
                fill="url(#price)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <Stat label="Open" value={data.stats.open} icon={Activity} />
        <Stat label="High" value={data.stats.high} icon={TrendingUp} />
        <Stat label="Low" value={data.stats.low} icon={TrendingDown} />
        <Stat label="Prev Close" value={data.stats.prev_close} icon={BarChart3} />
        <Stat label="Market Cap" value={data.stats.market_cap} icon={BarChart3} />
        <Stat label="Volume" value={data.stats.volume} icon={BarChart3} />
      </div>
    </div>
  );
}

/* ================= SMALL COMPONENT ================= */

function Stat({ label, value, icon: Icon }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <div className="flex justify-between text-gray-500 mb-1">
        <span>{label}</span>
        <Icon size={16} />
      </div>
      <p className="text-xl font-semibold">{value}</p>
    </div>
  );
}
