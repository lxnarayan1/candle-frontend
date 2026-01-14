// import React, { useEffect, useState } from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   CartesianGrid,
// } from "recharts";
// import { getMarketOverview } from "../services/api";

// const ranges = ["1D", "5D", "1M", "3M", "YTD", "1Y"];



// const symbols = [
//   { label: "NIFTY 50", value: "^NSEI" },
//   { label: "SENSEX", value: "^BSESN" },
//   { label: "BANK NIFTY", value: "^NSEBANK" },
//   { label: "NIFTY IT", value: "^CNXIT" },
//   { label: "NIFTY FMCG", value: "^CNXFMCG" },
//   { label: "NIFTY PHARMA", value: "^CNXPHARMA" },
//   { label: "NIFTY METAL", value: "^CNXMETAL" },
//   { label: "NIFTY AUTO", value: "^CNXAUTO" },
//   { label: "NIFTY ENERGY", value: "^CNXENERGY" },
  
// ];

// export default function GlobalMarkets() {
//   const [range, setRange] = useState("1D");
//   const [symbol, setSymbol] = useState("^NSEI");
//   const [market, setMarket] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchMarket = () => {
//     setLoading(true);
//     getMarketOverview(symbol, range)
//       .then((res) => {
//         setMarket(res);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(
//           err.response?.data?.detail ||
//             "Market data unavailable. Please try again."
//         );
//         setLoading(false);
//       });
//   };

//   useEffect(() => {
//     fetchMarket();
//   }, [symbol, range]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         Loading market data…
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-red-500">
//         {error}
//       </div>
//     );
//   }

//   return (
//     <section className="min-h-screen px-6 py-20 bg-gray-50 flex flex-col items-center">
//       <h1 className="text-4xl font-bold mb-8">Global Markets</h1>

//       <div className="w-full max-w-5xl bg-white p-8 rounded-2xl shadow">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-8">
//           <div>
//             <p className="text-gray-500">Current Value</p>
//             <p className="text-3xl font-bold">
//               {market.current_value.toLocaleString()}
//             </p>
//           </div>

//           <div>
//             <p className="text-gray-500">Gain</p>
//             <p
//               className={`text-3xl font-bold ${
//                 market.gain >= 0 ? "text-green-600" : "text-red-600"
//               }`}
//             >
//               {market.gain >= 0 ? "+" : ""}
//               {market.gain} ({market.gain_percent}%)
//             </p>
//           </div>

//           <div>
//             <p className="text-gray-500">Day Range</p>
//             <p className="text-xl font-semibold">
//               {market.day_range.low} — {market.day_range.high}
//             </p>
//           </div>

//           {/* Symbol dropdown */}
//           <select
//             value={symbol}
//             onChange={(e) => setSymbol(e.target.value)}
//             className="border px-4 py-2 rounded-lg"
//           >
//             {symbols.map((s) => (
//               <option key={s.value} value={s.value}>
//                 {s.label}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Chart */}
//         <div className="h-80">
//           <ResponsiveContainer width="100%" height="100%">
//             <LineChart data={market.price_movement}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="time" />
//               <YAxis domain={["dataMin - 50", "dataMax + 50"]} />
//               <Tooltip />
//               <Line
//                 type="monotone"
//                 dataKey="value"
//                 stroke="#22c55e"
//                 strokeWidth={3}
//                 dot={false}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Range Buttons */}
//         <div className="flex justify-center gap-4 mt-8">
//           {ranges.map((r) => (
//             <button
//               key={r}
//               onClick={() => setRange(r)}
//               className={`px-4 py-2 rounded-full ${
//                 r === range
//                   ? "bg-black text-white"
//                   : "bg-gray-200 hover:bg-gray-300"
//               }`}
//             >
//               {r}
//             </button>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import { useEffect, useState } from "react";
import { getMarketOverview } from "../api/api";

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
