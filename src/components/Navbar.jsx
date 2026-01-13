import { Link, useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { searchCompanies } from "../services/api";

export default function Navbar() {
  const navigate = useNavigate();
  const debounceRef = useRef(null);

  /* ================= AUTH ================= */
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  /* ================= SEARCH ================= */
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(false);

  /* ================= PLACEHOLDER ================= */
  const [placeholderText, setPlaceholderText] = useState("");
  const fullText = "Search for stocks";

  useEffect(() => {
    // typing animation
    let index = 0;
    const type = () => {
      if (index <= fullText.length) {
        setPlaceholderText(fullText.slice(0, index));
        index++;
        setTimeout(type, 80);
      }
    };
    type();

    setIsAuthenticated(!!localStorage.getItem("access_token"));
  }, []);

  /* ================= HANDLE INPUT ================= */
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (!value.trim()) {
      setSuggestions([]);
      setShowDropdown(false);
      return;
    }

    // debounce API call
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(async () => {
      try {
        setLoading(true);
        const results = await searchCompanies(value);

        // alphabetically sort & limit
        const sorted = results
          .sort((a, b) => a.name.localeCompare(b.name))
          .slice(0, 10);

        setSuggestions(sorted);
        setShowDropdown(true);
      } catch (err) {
        console.error("Search failed");
      } finally {
        setLoading(false);
      }
    }, 300);
  };

  /* ================= ENTER KEY ================= */
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (!query.trim()) return;

      if (!isAuthenticated) {
        toast.error("Login to see company data");
        return;
      }

      navigate(`/company/${query.toUpperCase()}`);
      setQuery("");
      setShowDropdown(false);
    }
  };

  /* ================= CLICK SUGGESTION ================= */
  const handleSelect = (company) => {
    if (!isAuthenticated) {
      toast.error("Login to see company data");
      return;
    }

    navigate(`/company/${company.symbol}`);
    setQuery("");
    setSuggestions([]);
    setShowDropdown(false);
  };

  /* ================= LOGOUT ================= */
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 py-4 border-b bg-white shadow-sm">
      {/* Logo */}
      {/* <span
        className="text-lg font-bold cursor-pointer"
        style={{ fontFamily: "Bree Serif" }}
        onClick={() => navigate("/")}
      >
        Candle
      </span> */}

      <span
        className="text-xl font-bold cursor-pointer tracking-wide"
        style={{ fontFamily: "Bree Serif" }}
        onClick={() => navigate("/")}
      >
        Candle
      </span>

      {/* Search */}
      <div className="relative w-96">
        <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
        <input
          type="text"
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={
            isAuthenticated
              ? placeholderText
              : "Login to search individual companies"
          }
          className="w-full bg-gray-100 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-gray-300"
        />

        {/* Dropdown */}
        {showDropdown && (
          <ul className="absolute top-12 left-0 w-full bg-white border rounded-lg shadow-md z-50 max-h-72 overflow-y-auto">
            {loading && (
              <li className="px-4 py-2 text-gray-500 text-sm">Searching…</li>
            )}

            {!loading && suggestions.length === 0 && (
              <li className="px-4 py-2 text-gray-500 text-sm">
                No companies found
              </li>
            )}

            {!loading &&
              suggestions.map((company) => (
                <li
                  key={company.symbol}
                  onClick={() => handleSelect(company)}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                >
                  <div className="font-medium">{company.name}</div>
                  <div className="text-sm text-gray-500">{company.symbol}</div>
                </li>
              ))}
          </ul>
        )}
      </div>

      {/* Auth Buttons */}
      {!isAuthenticated ? (
        <div className="flex gap-4">
          <Link to="/login">Login</Link>
          <Link to="/signup">
            <button className="bg-black text-white px-4 py-2 rounded-md">
              Sign Up
            </button>
          </Link>
        </div>
      ) : (
        <button
          onClick={handleLogout}
          className="bg-black text-white px-4 py-2 rounded-md"
        >
          Logout
        </button>
      )}
    </header>
  );
}
