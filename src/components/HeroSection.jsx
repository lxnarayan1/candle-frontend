export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-between px-20 bg-gradient-to-br from-white via-white to-[#f3f7ff]">
      {/* LEFT TEXT */}
      <div className="max-w-3xl">
        <h1 className="text-[90px] leading-[90px] font-extrabold text-[#0E1525]">
          See the <br /> Market <br /> Clearly
        </h1>

        <p className="mt-6 text-2xl text-[#3A4656] max-w-2xl">
          Candle illuminates your investment decisions with powerful, clear,
          and actionable stock analysis
        </p>
      </div>

      {/* RIGHT CANDLE */}
      <div className="relative flex flex-col items-center mr-24">
        {/* Glow behind flame */}
        <div className="absolute -top-24 w-56 h-56 bg-yellow-300 opacity-20 blur-3xl rounded-full"></div>

        {/* Flame */}
        <div className="w-12 h-20 bg-gradient-to-b from-yellow-200 via-orange-400 to-red-500 rounded-full animate-flame"></div>

        {/* Wick */}
        <div className="w-1 h-14 bg-gray-900"></div>

        {/* Candle Body */}
        <div className="w-32 h-96 bg-gradient-to-b from-green-300 to-green-600 rounded-lg shadow-2xl"></div>
      </div>
    </section>
  );
}
