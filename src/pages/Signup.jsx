// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Eye, EyeOff, ArrowRight, CheckCircle2 } from "lucide-react";
// import api from "../services/api";

// export default function Signup() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//     setError(''); // Clear error when user types
//   };

//   const validatePassword = (password) => {
//     const checks = {
//       length: password.length >= 8,
//       uppercase: /[A-Z]/.test(password) && /[a-z]/.test(password),
//       number: /[0-9]/.test(password)
//     };
//     return checks;
//   };

//   const passwordChecks = validatePassword(formData.password);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     // Validation
//     if (formData.password !== formData.confirmPassword) {
//       setError('Passwords do not match');
//       setLoading(false);
//       return;
//     }

//     if (!passwordChecks.length || !passwordChecks.uppercase || !passwordChecks.number) {
//       setError('Please meet all password requirements');
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await api.signup(
//         formData.fullName,
//         formData.email,
//         formData.password
//       );
      
//       // Store tokens
//       localStorage.setItem('access_token', response.access);
//       localStorage.setItem('refresh_token', response.refresh);
//       localStorage.setItem('user', JSON.stringify(response.user));
      
//       // Redirect to home page
//       navigate('/');
//     } catch (err) {
//       console.error('Signup error:', err);
//       setError(
//         err.response?.data?.email?.[0] || 
//         err.response?.data?.password?.[0] ||
//         err.response?.data?.full_name?.[0] ||
//         err.response?.data?.detail ||
//         'Failed to create account. Please try again.'
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex">
//       {/* LEFT – Animated Background */}
//       <div className="w-1/2 relative overflow-hidden bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-600">
//         {/* Ripple Effect Background */}
//         <div className="absolute inset-0">
//           {/* Animated Ripples */}
//           <div className="ripple ripple-1"></div>
//           <div className="ripple ripple-2"></div>
//           <div className="ripple ripple-3"></div>
//           <div className="ripple ripple-4"></div>
//           <div className="ripple ripple-5"></div>

//           {/* Geometric Shapes */}
//           <div className="absolute top-20 left-20 w-32 h-32 border-4 border-white/20 rounded-2xl rotate-45 animate-spin-slow"></div>
//           <div className="absolute bottom-32 right-32 w-24 h-24 border-4 border-white/20 rounded-full animate-pulse-slow"></div>
//           <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-lg animate-float-1"></div>
//           <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full animate-float-2"></div>

//           {/* Candlestick Chart Visualization */}
//           <div className="absolute bottom-0 left-0 right-0 h-64 flex items-end justify-around px-12 pb-8 opacity-30">
//             <div className="candle-bar bg-white/40" style={{ height: '60%', animationDelay: '0s' }}></div>
//             <div className="candle-bar bg-white/40" style={{ height: '80%', animationDelay: '0.2s' }}></div>
//             <div className="candle-bar bg-white/40" style={{ height: '45%', animationDelay: '0.4s' }}></div>
//             <div className="candle-bar bg-white/40" style={{ height: '90%', animationDelay: '0.6s' }}></div>
//             <div className="candle-bar bg-white/40" style={{ height: '55%', animationDelay: '0.8s' }}></div>
//             <div className="candle-bar bg-white/40" style={{ height: '75%', animationDelay: '1s' }}></div>
//             <div className="candle-bar bg-white/40" style={{ height: '65%', animationDelay: '1.2s' }}></div>
//             <div className="candle-bar bg-white/40" style={{ height: '85%', animationDelay: '1.4s' }}></div>
//             <div className="candle-bar bg-white/40" style={{ height: '50%', animationDelay: '1.6s' }}></div>
//             <div className="candle-bar bg-white/40" style={{ height: '70%', animationDelay: '1.8s' }}></div>
//           </div>

//           {/* Gradient Overlay */}
//           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-teal-900/30"></div>
//         </div>

//         {/* Content */}
//         <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-16 text-white">
//           <div className="max-w-lg">
//             <div className="mb-8">
//               <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-lg rounded-3xl mb-8 rotate-animation">
//                 <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
//                 </svg>
//               </div>
              
//               <h2 className="text-5xl font-bold leading-tight mb-4">
//                 Join the future of trading
//               </h2>
//               <p className="text-xl text-white/90 leading-relaxed">
//                 Create your account and unlock powerful tools designed for modern investors.
//               </p>
//             </div>

//             {/* Feature Highlights */}
//             <div className="space-y-4 mt-12">
//               <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all">
//                 <div className="flex-shrink-0 w-10 h-10 bg-emerald-400 rounded-lg flex items-center justify-center">
//                   <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
//                   </svg>
//                 </div>
//                 <div>
//                   <div className="font-semibold text-lg">Real-time Market Data</div>
//                   <div className="text-white/70 text-sm">Access live quotes and charts</div>
//                 </div>
//               </div>

//               <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all">
//                 <div className="flex-shrink-0 w-10 h-10 bg-cyan-400 rounded-lg flex items-center justify-center">
//                   <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
//                   </svg>
//                 </div>
//                 <div>
//                   <div className="font-semibold text-lg">Advanced Analytics</div>
//                   <div className="text-white/70 text-sm">Professional charting tools</div>
//                 </div>
//               </div>

//               <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all">
//                 <div className="flex-shrink-0 w-10 h-10 bg-teal-400 rounded-lg flex items-center justify-center">
//                   <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
//                   </svg>
//                 </div>
//                 <div>
//                   <div className="font-semibold text-lg">Secure & Private</div>
//                   <div className="text-white/70 text-sm">Bank-grade encryption</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* RIGHT – Signup Form */}
//       <div className="w-1/2 flex items-center justify-center px-12 bg-white relative overflow-y-auto">
//         {/* Subtle dot pattern */}
//         <div className="absolute inset-0 opacity-[0.03]">
//           <div className="absolute inset-0" style={{
//             backgroundImage: `radial-gradient(circle at 2px 2px, rgb(0 0 0) 1px, transparent 0)`,
//             backgroundSize: '32px 32px'
//           }}></div>
//         </div>

//         <div className="w-full max-w-md relative z-10 py-8">
//           {/* Logo */}
//           <div className="text-center mb-8">
//             <Link to="/" className="inline-block">
//               <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-3">
//                 Candle
//               </h1>
//             </Link>
//             <h2 className="text-3xl font-bold text-gray-900 mt-6 mb-3">
//               Create account
//             </h2>
//             <p className="text-gray-600">
//               Already have an account?{' '}
//               <Link to="/login" className="text-teal-600 hover:text-teal-700 font-semibold transition-colors">
//                 Sign in
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
//           <form className="space-y-4" onSubmit={handleSubmit}>
//             {/* Social Buttons */}
//             <div className="grid grid-cols-2 gap-3">
//               <button
//                 type="button"
//                 className="flex items-center justify-center px-4 py-3 border-2 border-gray-200 rounded-xl text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-all duration-200"
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
//                 className="flex items-center justify-center px-4 py-3 border-2 border-gray-200 rounded-xl text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-all duration-200"
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

//             {/* Full Name */}
//             <div>
//               <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
//                 Full name
//               </label>
//               <input
//                 id="fullName"
//                 name="fullName"
//                 type="text"
//                 autoComplete="name"
//                 required
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 className="block w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
//                 placeholder="John Doe"
//               />
//             </div>

//             {/* Email */}
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
//                 className="block w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
//                 placeholder="you@example.com"
//               />
//             </div>

//             {/* Password */}
//             <div>
//               <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
//                 Password
//               </label>
//               <div className="relative">
//                 <input
//                   id="password"
//                   name="password"
//                   type={showPassword ? "text" : "password"}
//                   autoComplete="new-password"
//                   required
//                   value={formData.password}
//                   onChange={handleChange}
//                   className="block w-full px-4 py-3.5 pr-12 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
//                   placeholder="At least 8 characters"
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
              
//               {/* Password Strength */}
//               {formData.password && (
//                 <div className="mt-3 space-y-2">
//                   <div className="flex items-center text-xs">
//                     {passwordChecks.length ? (
//                       <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
//                     ) : (
//                       <div className="w-4 h-4 rounded-full border-2 border-gray-300 mr-2"></div>
//                     )}
//                     <span className={passwordChecks.length ? 'text-green-600 font-medium' : 'text-gray-500'}>
//                       At least 8 characters
//                     </span>
//                   </div>
//                   <div className="flex items-center text-xs">
//                     {passwordChecks.uppercase ? (
//                       <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
//                     ) : (
//                       <div className="w-4 h-4 rounded-full border-2 border-gray-300 mr-2"></div>
//                     )}
//                     <span className={passwordChecks.uppercase ? 'text-green-600 font-medium' : 'text-gray-500'}>
//                       Uppercase & lowercase
//                     </span>
//                   </div>
//                   <div className="flex items-center text-xs">
//                     {passwordChecks.number ? (
//                       <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
//                     ) : (
//                       <div className="w-4 h-4 rounded-full border-2 border-gray-300 mr-2"></div>
//                     )}
//                     <span className={passwordChecks.number ? 'text-green-600 font-medium' : 'text-gray-500'}>
//                       Contains a number
//                     </span>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Confirm Password */}
//             <div>
//               <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-2">
//                 Confirm password
//               </label>
//               <div className="relative">
//                 <input
//                   id="confirmPassword"
//                   name="confirmPassword"
//                   type={showConfirmPassword ? "text" : "password"}
//                   autoComplete="new-password"
//                   required
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                   className="block w-full px-4 py-3.5 pr-12 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
//                   placeholder="Re-enter password"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                   className="absolute inset-y-0 right-0 pr-4 flex items-center"
//                 >
//                   {showConfirmPassword ? (
//                     <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
//                   ) : (
//                     <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
//                   )}
//                 </button>
//               </div>
//             </div>

//             {/* Terms */}
//             <div className="flex items-start pt-2">
//               <input
//                 id="terms"
//                 name="terms"
//                 type="checkbox"
//                 required
//                 className="h-4 w-4 mt-1 text-teal-600 focus:ring-teal-500 border-gray-300 rounded cursor-pointer"
//               />
//               <label htmlFor="terms" className="ml-3 block text-sm text-gray-600 cursor-pointer">
//                 I agree to the{' '}
//                 <a href="#" className="text-teal-600 hover:text-teal-700 font-semibold">
//                   Terms
//                 </a>{' '}
//                 and{' '}
//                 <a href="#" className="text-teal-600 hover:text-teal-700 font-semibold">
//                   Privacy Policy
//                 </a>
//               </label>
//             </div>

//             {/* Submit */}
//             <button
//               type="submit"
//               disabled={loading}
//               className="group relative w-full flex items-center justify-center py-4 px-4 border border-transparent rounded-xl text-white bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 hover:from-emerald-600 hover:via-teal-700 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 font-semibold text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
//             >
//               {loading ? 'Creating account...' : 'Create account'}
//               {!loading && <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />}
//             </button>
//           </form>

//           {/* Footer */}
//           <div className="mt-6 text-center">
//             <Link to="/" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
//               ← Back to home
//             </Link>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes ripple {
//           0% {
//             transform: translate(-50%, -50%) scale(0);
//             opacity: 1;
//           }
//           100% {
//             transform: translate(-50%, -50%) scale(2);
//             opacity: 0;
//           }
//         }
        
//         .ripple {
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           width: 600px;
//           height: 600px;
//           border: 2px solid rgba(255, 255, 255, 0.3);
//           border-radius: 50%;
//           animation: ripple 6s ease-out infinite;
//         }
        
//         .ripple-1 { animation-delay: 0s; }
//         .ripple-2 { animation-delay: 1.2s; }
//         .ripple-3 { animation-delay: 2.4s; }
//         .ripple-4 { animation-delay: 3.6s; }
//         .ripple-5 { animation-delay: 4.8s; }

//         @keyframes spin-slow {
//           from { transform: rotate(45deg); }
//           to { transform: rotate(405deg); }
//         }
        
//         .animate-spin-slow {
//           animation: spin-slow 20s linear infinite;
//         }

//         @keyframes pulse-slow {
//           0%, 100% { transform: scale(1); opacity: 0.6; }
//           50% { transform: scale(1.1); opacity: 0.8; }
//         }
        
//         .animate-pulse-slow {
//           animation: pulse-slow 3s ease-in-out infinite;
//         }

//         @keyframes float-1 {
//           0%, 100% { transform: translate(0, 0) rotate(0deg); }
//           50% { transform: translate(20px, -20px) rotate(180deg); }
//         }
        
//         .animate-float-1 {
//           animation: float-1 6s ease-in-out infinite;
//         }

//         @keyframes float-2 {
//           0%, 100% { transform: translate(0, 0); }
//           50% { transform: translate(-30px, 30px); }
//         }
        
//         .animate-float-2 {
//           animation: float-2 8s ease-in-out infinite;
//         }

//         @keyframes candle-grow {
//           0% { transform: scaleY(0); opacity: 0; }
//           50% { opacity: 1; }
//           100% { transform: scaleY(1); opacity: 1; }
//         }
        
//         .candle-bar {
//           width: 12px;
//           border-radius: 6px 6px 0 0;
//           transform-origin: bottom;
//           animation: candle-grow 2s ease-out infinite;
//         }

//         @keyframes rotate-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
        
//         .rotate-animation {
//           animation: rotate-slow 20s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// }


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, ArrowRight, CheckCircle2 } from "lucide-react";
import { signup } from "../services/api"; // Import named export

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setError(''); // Clear error when user types
  };

  const validatePassword = (password) => {
    const checks = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password) && /[a-z]/.test(password),
      number: /[0-9]/.test(password)
    };
    return checks;
  };

  const passwordChecks = validatePassword(formData.password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    if (!passwordChecks.length || !passwordChecks.uppercase || !passwordChecks.number) {
      setError('Please meet all password requirements');
      setLoading(false);
      return;
    }

    try {
      const response = await signup(
        formData.fullName,
        formData.email,
        formData.password
      );
      
      // Store tokens
      localStorage.setItem('access_token', response.access);
      localStorage.setItem('refresh_token', response.refresh);
      if (response.user) {
        localStorage.setItem('user', JSON.stringify(response.user));
      }
      
      // Redirect to home page
      navigate('/');
    } catch (err) {
      console.error('Signup error:', err);
      setError(
        err.response?.data?.email?.[0] || 
        err.response?.data?.password?.[0] ||
        err.response?.data?.full_name?.[0] ||
        err.response?.data?.detail ||
        'Failed to create account. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* LEFT – Animated Background */}
      <div className="w-1/2 relative overflow-hidden bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-600">
        {/* Ripple Effect Background */}
        <div className="absolute inset-0">
          {/* Animated Ripples */}
          <div className="ripple ripple-1"></div>
          <div className="ripple ripple-2"></div>
          <div className="ripple ripple-3"></div>
          <div className="ripple ripple-4"></div>
          <div className="ripple ripple-5"></div>

          {/* Geometric Shapes */}
          <div className="absolute top-20 left-20 w-32 h-32 border-4 border-white/20 rounded-2xl rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-32 right-32 w-24 h-24 border-4 border-white/20 rounded-full animate-pulse-slow"></div>
          <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-lg animate-float-1"></div>
          <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full animate-float-2"></div>

          {/* Candlestick Chart Visualization */}
          <div className="absolute bottom-0 left-0 right-0 h-64 flex items-end justify-around px-12 pb-8 opacity-30">
            <div className="candle-bar bg-white/40" style={{ height: '60%', animationDelay: '0s' }}></div>
            <div className="candle-bar bg-white/40" style={{ height: '80%', animationDelay: '0.2s' }}></div>
            <div className="candle-bar bg-white/40" style={{ height: '45%', animationDelay: '0.4s' }}></div>
            <div className="candle-bar bg-white/40" style={{ height: '90%', animationDelay: '0.6s' }}></div>
            <div className="candle-bar bg-white/40" style={{ height: '55%', animationDelay: '0.8s' }}></div>
            <div className="candle-bar bg-white/40" style={{ height: '75%', animationDelay: '1s' }}></div>
            <div className="candle-bar bg-white/40" style={{ height: '65%', animationDelay: '1.2s' }}></div>
            <div className="candle-bar bg-white/40" style={{ height: '85%', animationDelay: '1.4s' }}></div>
            <div className="candle-bar bg-white/40" style={{ height: '50%', animationDelay: '1.6s' }}></div>
            <div className="candle-bar bg-white/40" style={{ height: '70%', animationDelay: '1.8s' }}></div>
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-teal-900/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-16 text-white">
          <div className="max-w-lg">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-lg rounded-3xl mb-8 rotate-animation">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              
              <h2 className="text-5xl font-bold leading-tight mb-4">
                Join the future of trading
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                Create your account and unlock powerful tools designed for modern investors.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="space-y-4 mt-12">
              <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-400 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-lg">Real-time Market Data</div>
                  <div className="text-white/70 text-sm">Access live quotes and charts</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all">
                <div className="flex-shrink-0 w-10 h-10 bg-cyan-400 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-lg">Advanced Analytics</div>
                  <div className="text-white/70 text-sm">Professional charting tools</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all">
                <div className="flex-shrink-0 w-10 h-10 bg-teal-400 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-lg">Secure & Private</div>
                  <div className="text-white/70 text-sm">Bank-grade encryption</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT – Signup Form */}
      <div className="w-1/2 flex items-center justify-center px-12 bg-white relative overflow-y-auto">
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(0 0 0) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}></div>
        </div>

        <div className="w-full max-w-md relative z-10 py-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-block">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-3">
                Candle
              </h1>
            </Link>
            <h2 className="text-3xl font-bold text-gray-900 mt-6 mb-3">
              Create account
            </h2>
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-teal-600 hover:text-teal-700 font-semibold transition-colors">
                Sign in
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
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-center px-4 py-3 border-2 border-gray-200 rounded-xl text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-all duration-200"
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
                className="flex items-center justify-center px-4 py-3 border-2 border-gray-200 rounded-xl text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-all duration-200"
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

            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                Full name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="block w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
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
                className="block w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                placeholder="you@example.com"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full px-4 py-3.5 pr-12 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                  placeholder="At least 8 characters"
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
              
              {/* Password Strength */}
              {formData.password && (
                <div className="mt-3 space-y-2">
                  <div className="flex items-center text-xs">
                    {passwordChecks.length ? (
                      <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                    ) : (
                      <div className="w-4 h-4 rounded-full border-2 border-gray-300 mr-2"></div>
                    )}
                    <span className={passwordChecks.length ? 'text-green-600 font-medium' : 'text-gray-500'}>
                      At least 8 characters
                    </span>
                  </div>
                  <div className="flex items-center text-xs">
                    {passwordChecks.uppercase ? (
                      <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                    ) : (
                      <div className="w-4 h-4 rounded-full border-2 border-gray-300 mr-2"></div>
                    )}
                    <span className={passwordChecks.uppercase ? 'text-green-600 font-medium' : 'text-gray-500'}>
                      Uppercase & lowercase
                    </span>
                  </div>
                  <div className="flex items-center text-xs">
                    {passwordChecks.number ? (
                      <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                    ) : (
                      <div className="w-4 h-4 rounded-full border-2 border-gray-300 mr-2"></div>
                    )}
                    <span className={passwordChecks.number ? 'text-green-600 font-medium' : 'text-gray-500'}>
                      Contains a number
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-2">
                Confirm password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="block w-full px-4 py-3.5 pr-12 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                  placeholder="Re-enter password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                  )}
                </button>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start pt-2">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 mt-1 text-teal-600 focus:ring-teal-500 border-gray-300 rounded cursor-pointer"
              />
              <label htmlFor="terms" className="ml-3 block text-sm text-gray-600 cursor-pointer">
                I agree to the{' '}
                <a href="#" className="text-teal-600 hover:text-teal-700 font-semibold">
                  Terms
                </a>{' '}
                and{' '}
                <a href="#" className="text-teal-600 hover:text-teal-700 font-semibold">
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex items-center justify-center py-4 px-4 border border-transparent rounded-xl text-white bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 hover:from-emerald-600 hover:via-teal-700 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 font-semibold text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? 'Creating account...' : 'Create account'}
              {!loading && <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center">
            <Link to="/" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
              ← Back to home
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ripple {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(2);
            opacity: 0;
          }
        }
        
        .ripple {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 600px;
          height: 600px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          animation: ripple 6s ease-out infinite;
        }
        
        .ripple-1 { animation-delay: 0s; }
        .ripple-2 { animation-delay: 1.2s; }
        .ripple-3 { animation-delay: 2.4s; }
        .ripple-4 { animation-delay: 3.6s; }
        .ripple-5 { animation-delay: 4.8s; }

        @keyframes spin-slow {
          from { transform: rotate(45deg); }
          to { transform: rotate(405deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(20px, -20px) rotate(180deg); }
        }
        
        .animate-float-1 {
          animation: float-1 6s ease-in-out infinite;
        }

        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-30px, 30px); }
        }
        
        .animate-float-2 {
          animation: float-2 8s ease-in-out infinite;
        }

        @keyframes candle-grow {
          0% { transform: scaleY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: scaleY(1); opacity: 1; }
        }
        
        .candle-bar {
          width: 12px;
          border-radius: 6px 6px 0 0;
          transform-origin: bottom;
          animation: candle-grow 2s ease-out infinite;
        }

        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .rotate-animation {
          animation: rotate-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
}