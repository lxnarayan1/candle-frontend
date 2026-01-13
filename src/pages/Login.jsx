// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Eye, EyeOff, ArrowRight } from "lucide-react";
// import api  from "../services/api";

// export default function Login() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//     setError(''); // Clear error when user types
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     try {
//       const response = await api.login(formData.email, formData.password);
      
//       // Store tokens
//       localStorage.setItem('access_token', response.access);
//       localStorage.setItem('refresh_token', response.refresh);
      
//       // Redirect to home page
//       navigate('/');
//     } catch (err) {
//       console.error('Login error:', err);
//       setError(
//         err.response?.data?.detail || 
//         err.response?.data?.non_field_errors?.[0] ||
//         'Invalid email or password. Please try again.'
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex">
//       {/* LEFT – Animated Background */}
//       <div className="w-1/2 relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
//         {/* Floating Orbs Animation */}
//         <div className="absolute inset-0">
//           {/* Large Gradient Orbs */}
//           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-700 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-float-slow"></div>
//           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-600 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-float-medium"></div>
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gray-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-float-fast"></div>
          
//           {/* Animated Grid Lines */}
//           <div className="absolute inset-0 opacity-10">
//             <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
//               <defs>
//                 <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
//                   <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
//                 </pattern>
//               </defs>
//               <rect width="100%" height="100%" fill="url(#grid)" />
//             </svg>
//           </div>

//           {/* Animated Chart Lines */}
//           <div className="absolute inset-0">
//             <svg className="w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
//               <path 
//                 className="chart-path"
//                 d="M 0,80 L 20,60 L 30,65 L 40,45 L 50,50 L 60,30 L 70,35 L 80,20 L 100,25" 
//                 stroke="white" 
//                 strokeWidth="2" 
//                 fill="none"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//               <path 
//                 className="chart-path animation-delay-1s"
//                 d="M 0,90 L 15,75 L 25,80 L 35,60 L 50,65 L 65,45 L 75,50 L 85,35 L 100,40" 
//                 stroke="rgba(255,255,255,0.4)" 
//                 strokeWidth="2" 
//                 fill="none"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </div>

//           {/* Floating Particles */}
//           <div className="particle particle-1"></div>
//           <div className="particle particle-2"></div>
//           <div className="particle particle-3"></div>
//           <div className="particle particle-4"></div>
//           <div className="particle particle-5"></div>
//           <div className="particle particle-6"></div>
//         </div>

//         {/* Content Overlay */}
//         <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-16 text-white">
//           <div className="max-w-lg">
//             <div className="mb-8">
//               <h2 className="text-5xl font-bold leading-tight mb-4">
//                 Welcome back to Candle
//               </h2>
//               <p className="text-xl text-white/70 leading-relaxed">
//                 Your gateway to smarter trading decisions and real-time market insights.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* RIGHT – Login Form */}
//       <div className="w-1/2 flex items-center justify-center px-12 bg-white relative">
//         {/* Subtle dot pattern */}
//         <div className="absolute inset-0 opacity-[0.03]">
//           <div className="absolute inset-0" style={{
//             backgroundImage: `radial-gradient(circle at 2px 2px, rgb(0 0 0) 1px, transparent 0)`,
//             backgroundSize: '32px 32px'
//           }}></div>
//         </div>

//         <div className="w-full max-w-md relative z-10">
//           {/* Logo */}
//           <div className="text-center mb-10">
//             <Link to="/" className="inline-block">
//               <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-3">
//                 Candle
//               </h1>
//             </Link>
//             <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-3">
//               Sign in
//             </h2>
//             <p className="text-gray-600">
//               New to Candle?{' '}
//               <Link to="/signup" className="text-gray-900 hover:text-gray-700 font-semibold transition-colors">
//                 Create an account
//               </Link>
//             </p>
//           </div>

//           {/* Error Message */}
//           {error && (
//             <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
//               {error}
//             </div>
//           )}

//           {/* Form */}
//           <form onSubmit={handleSubmit} className="space-y-5">
//             {/* Social Buttons */}
//             <div className="grid grid-cols-2 gap-3">
//               <button
//                 type="button"
//                 className="flex items-center justify-center px-4 py-3 border-2 border-gray-200 rounded-xl text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-200"
//               >
//                 <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
//                   <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
//                   <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
//                   <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
//                   <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
//                 </svg>
//                 Google
//               </button>
//               <button
//                 type="button"
//                 className="flex items-center justify-center px-4 py-3 border-2 border-gray-200 rounded-xl text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-200"
//               >
//                 <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
//                 </svg>
//                 GitHub
//               </button>
//             </div>

//             {/* Divider */}
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-300"></div>
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-4 bg-white text-gray-500 font-medium">Or with email</span>
//               </div>
//             </div>

//             {/* Email Field */}
//             <div>
//               <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
//                 Email
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 required
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="block w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200"
//                 placeholder="you@example.com"
//               />
//             </div>

//             {/* Password Field */}
//             <div>
//               <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
//                 Password
//               </label>
//               <div className="relative">
//                 <input
//                   id="password"
//                   name="password"
//                   type={showPassword ? "text" : "password"}
//                   autoComplete="current-password"
//                   required
//                   value={formData.password}
//                   onChange={handleChange}
//                   className="block w-full px-4 py-3.5 pr-12 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200"
//                   placeholder="Enter your password"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute inset-y-0 right-0 pr-4 flex items-center"
//                 >
//                   {showPassword ? (
//                     <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
//                   ) : (
//                     <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
//                   )}
//                 </button>
//               </div>
//             </div>

//             {/* Remember & Forgot */}
//             <div className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <input
//                   id="remember-me"
//                   name="remember-me"
//                   type="checkbox"
//                   className="h-4 w-4 text-gray-900 focus:ring-gray-500 border-gray-300 rounded cursor-pointer"
//                 />
//                 <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 cursor-pointer">
//                   Remember me
//                 </label>
//               </div>
//               <a href="#" className="text-sm text-gray-900 hover:text-gray-700 font-medium transition-colors">
//                 Forgot password?
//               </a>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               disabled={loading}
//               className="group relative w-full flex items-center justify-center py-4 px-4 border border-transparent rounded-xl text-white bg-gradient-to-r from-gray-900 via-gray-800 to-black hover:from-gray-800 hover:via-gray-700 hover:to-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 font-semibold text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
//             >
//               {loading ? 'Signing in...' : 'Sign in'}
//               {!loading && <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />}
//             </button>
//           </form>

//           {/* Footer */}
//           <div className="mt-8 text-center">
//             <Link to="/" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
//               ← Back to home
//             </Link>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes float-slow {
//           0%, 100% { transform: translate(0, 0) scale(1); }
//           50% { transform: translate(-30px, -30px) scale(1.1); }
//         }
        
//         @keyframes float-medium {
//           0%, 100% { transform: translate(0, 0) scale(1); }
//           50% { transform: translate(40px, 20px) scale(1.15); }
//         }
        
//         @keyframes float-fast {
//           0%, 100% { transform: translate(-50%, -50%) scale(1); }
//           50% { transform: translate(calc(-50% + 20px), calc(-50% - 40px)) scale(1.2); }
//         }
        
//         .animate-float-slow {
//           animation: float-slow 8s ease-in-out infinite;
//         }
        
//         .animate-float-medium {
//           animation: float-medium 6s ease-in-out infinite;
//         }
        
//         .animate-float-fast {
//           animation: float-fast 10s ease-in-out infinite;
//         }

//         @keyframes draw-path {
//           0% {
//             stroke-dashoffset: 1000;
//             opacity: 0;
//           }
//           10% {
//             opacity: 1;
//           }
//           100% {
//             stroke-dashoffset: 0;
//             opacity: 1;
//           }
//         }
        
//         .chart-path {
//           stroke-dasharray: 1000;
//           stroke-dashoffset: 1000;
//           animation: draw-path 4s ease-in-out infinite;
//         }
        
//         .animation-delay-1s {
//           animation-delay: 1s;
//         }

//         @keyframes particle-float {
//           0% {
//             transform: translate(0, 100vh) scale(0);
//             opacity: 0;
//           }
//           10% {
//             opacity: 1;
//           }
//           90% {
//             opacity: 1;
//           }
//           100% {
//             transform: translate(var(--tx), -100vh) scale(1);
//             opacity: 0;
//           }
//         }
        
//         .particle {
//           position: absolute;
//           width: 4px;
//           height: 4px;
//           background: white;
//           border-radius: 50%;
//           opacity: 0.6;
//         }
        
//         .particle-1 {
//           left: 10%;
//           --tx: 20px;
//           animation: particle-float 8s ease-in-out infinite;
//         }
        
//         .particle-2 {
//           left: 30%;
//           --tx: -30px;
//           animation: particle-float 10s ease-in-out infinite 1s;
//         }
        
//         .particle-3 {
//           left: 50%;
//           --tx: 40px;
//           animation: particle-float 12s ease-in-out infinite 2s;
//         }
        
//         .particle-4 {
//           left: 70%;
//           --tx: -20px;
//           animation: particle-float 9s ease-in-out infinite 0.5s;
//         }
        
//         .particle-5 {
//           left: 85%;
//           --tx: 25px;
//           animation: particle-float 11s ease-in-out infinite 1.5s;
//         }
        
//         .particle-6 {
//           left: 20%;
//           --tx: -35px;
//           animation: particle-float 13s ease-in-out infinite 3s;
//         }
//       `}</style>
//     </div>
//   );
// }

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { login } from "../services/api"; // Import named export

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError(''); // Clear error when user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await login(formData.email, formData.password);
      
      // Store tokens
      localStorage.setItem('access_token', response.access);
      localStorage.setItem('refresh_token', response.refresh);
      
      // Redirect to home page
      navigate('/');
    } catch (err) {
      console.error('Login error:', err);
      setError(
        err.response?.data?.detail || 
        err.response?.data?.non_field_errors?.[0] ||
        'Invalid email or password. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* LEFT – Animated Background */}
      <div className="w-1/2 relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        {/* Floating Orbs Animation */}
        <div className="absolute inset-0">
          {/* Large Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-700 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-float-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-600 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-float-medium"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gray-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-float-fast"></div>
          
          {/* Animated Grid Lines */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Animated Chart Lines */}
          <div className="absolute inset-0">
            <svg className="w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path 
                className="chart-path"
                d="M 0,80 L 20,60 L 30,65 L 40,45 L 50,50 L 60,30 L 70,35 L 80,20 L 100,25" 
                stroke="white" 
                strokeWidth="2" 
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path 
                className="chart-path animation-delay-1s"
                d="M 0,90 L 15,75 L 25,80 L 35,60 L 50,65 L 65,45 L 75,50 L 85,35 L 100,40" 
                stroke="rgba(255,255,255,0.4)" 
                strokeWidth="2" 
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Floating Particles */}
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
          <div className="particle particle-6"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-16 text-white">
          <div className="max-w-lg">
            <div className="mb-8">
              <h2 className="text-5xl font-bold leading-tight mb-4">
                Welcome back to Candle
              </h2>
              <p className="text-xl text-white/70 leading-relaxed">
                Your gateway to smarter trading decisions and real-time market insights.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT – Login Form */}
      <div className="w-1/2 flex items-center justify-center px-12 bg-white relative">
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(0 0 0) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}></div>
        </div>

        <div className="w-full max-w-md relative z-10">
          {/* Logo */}
          <div className="text-center mb-10">
            <Link to="/" className="inline-block">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-3">
                Candle
              </h1>
            </Link>
            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-3">
              Sign in
            </h2>
            <p className="text-gray-600">
              New to Candle?{' '}
              <Link to="/signup" className="text-gray-900 hover:text-gray-700 font-semibold transition-colors">
                Create an account
              </Link>
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-center px-4 py-3 border-2 border-gray-200 rounded-xl text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-200"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </button>
              <button
                type="button"
                className="flex items-center justify-center px-4 py-3 border-2 border-gray-200 rounded-xl text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </button>
            </div>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500 font-medium">Or with email</span>
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="block w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200"
                placeholder="you@example.com"
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full px-4 py-3.5 pr-12 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-gray-900 focus:ring-gray-500 border-gray-300 rounded cursor-pointer"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 cursor-pointer">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-gray-900 hover:text-gray-700 font-medium transition-colors">
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex items-center justify-center py-4 px-4 border border-transparent rounded-xl text-white bg-gradient-to-r from-gray-900 via-gray-800 to-black hover:from-gray-800 hover:via-gray-700 hover:to-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 font-semibold text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? 'Signing in...' : 'Sign in'}
              {!loading && <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center">
            <Link to="/" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
              ← Back to home
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-30px, -30px) scale(1.1); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(40px, 20px) scale(1.15); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(calc(-50% + 20px), calc(-50% - 40px)) scale(1.2); }
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 6s ease-in-out infinite;
        }
        
        .animate-float-fast {
          animation: float-fast 10s ease-in-out infinite;
        }

        @keyframes draw-path {
          0% {
            stroke-dashoffset: 1000;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }
        
        .chart-path {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw-path 4s ease-in-out infinite;
        }
        
        .animation-delay-1s {
          animation-delay: 1s;
        }

        @keyframes particle-float {
          0% {
            transform: translate(0, 100vh) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translate(var(--tx), -100vh) scale(1);
            opacity: 0;
          }
        }
        
        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: white;
          border-radius: 50%;
          opacity: 0.6;
        }
        
        .particle-1 {
          left: 10%;
          --tx: 20px;
          animation: particle-float 8s ease-in-out infinite;
        }
        
        .particle-2 {
          left: 30%;
          --tx: -30px;
          animation: particle-float 10s ease-in-out infinite 1s;
        }
        
        .particle-3 {
          left: 50%;
          --tx: 40px;
          animation: particle-float 12s ease-in-out infinite 2s;
        }
        
        .particle-4 {
          left: 70%;
          --tx: -20px;
          animation: particle-float 9s ease-in-out infinite 0.5s;
        }
        
        .particle-5 {
          left: 85%;
          --tx: 25px;
          animation: particle-float 11s ease-in-out infinite 1.5s;
        }
        
        .particle-6 {
          left: 20%;
          --tx: -35px;
          animation: particle-float 13s ease-in-out infinite 3s;
        }
      `}</style>
    </div>
  );
}