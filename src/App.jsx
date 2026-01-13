// import { Routes, Route, useLocation } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import HeroSection from "./components/HeroSection";
// import GlobalMarkets from "./components/GlobalMarkets";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";

// export default function App() {
//   const location = useLocation();
  
//   // Hide navbar on login and signup pages
//   const hideNavbar = location.pathname === "/login" || location.pathname === "/signup";

//   return (
//     <>
//       {!hideNavbar && <Navbar />}

//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <HeroSection />
//               <GlobalMarkets />
//             </>
//           }
//         />

//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//       </Routes>
//     </>
//   );
// }

// import { Routes, Route, useLocation } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import HeroSection from "./components/HeroSection";
// import GlobalMarkets from "./components/GlobalMarkets";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import ProtectedRoute from "./components/ProtectedRoute";

// export default function App() {
//   const location = useLocation();

//   // Hide navbar on login & signup
//   const hideNavbar =
//     location.pathname === "/login" || location.pathname === "/signup";

//   return (
//     <>
//       {!hideNavbar && <Navbar />}

//       <Routes>
//         {/* ✅ PUBLIC ROUTES */}
//         <Route path="/" element={<HeroSection />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />

//         {/* ✅ PROTECTED ROUTES */}
//         <Route
//           path="/markets"
//           element={
//             <ProtectedRoute>
//               <GlobalMarkets />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </>
//   );
// }

// import { Routes, Route, useLocation } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import HeroSection from "./components/HeroSection";
// import GlobalMarkets from "./components/GlobalMarkets";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";

// export default function App() {
//   const location = useLocation();

//   const hideNavbar =
//     location.pathname === "/login" || location.pathname === "/signup";

//   return (
//     <>
//       {!hideNavbar && <Navbar />}

//       <Routes>
//         {/* ✅ PUBLIC ROUTES */}
//         <Route
//           path="/"
//           element={
//             <>
//               <HeroSection />
//               <GlobalMarkets />
//             </>
//           }
//         />

//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//       </Routes>
//     </>
//   );
// }

import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import GlobalMarkets from "./components/GlobalMarkets";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CompanyDetail from "./components/CompanyDetail";

export default function App() {
  const location = useLocation();

  const hideNavbar =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        {/* 🌍 PUBLIC HOME */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <GlobalMarkets />
            </>
          }
        />

        {/* 🔐 AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* 🏢 COMPANY PAGE (auth enforced via navbar + API) */}
        <Route path="/company/:symbol" element={<CompanyDetail />} />

        {/* ❌ FALLBACK */}
        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center">
              Page not found
            </div>
          }
        />
      </Routes>
    </>
  );
}
