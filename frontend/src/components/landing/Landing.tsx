// import Link from 'next/link';
// import React from 'react'

// function Landing() {
//   return (
//     <div className="py-12">
//       <section className="mt-8 grid gap-6 md:grid-cols-2 md:items-center">
//         <div>
//           <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
//             Keep Your Cool with Maxino AC Services
//           </h1>
//           <p className="mt-4 text-zinc-600 text-lg">
//             Fast, reliable AC installation, repair, and maintenance for homes
//             and businesses. Certified technicians. Transparent pricing. 24/7
//             emergency support.
//           </p>
//           <div className="mt-6 flex gap-3">
//             <Link
//               href="/request-service"
//               className="inline-flex items-center rounded-md bg-blue-600 px-5 py-2.5 text-white hover:bg-blue-700"
//             >
//               Request Service
//             </Link>
//             <Link
//               href="/about"
//               className="inline-flex items-center rounded-md border border-zinc-300 px-5 py-2.5 hover:bg-zinc-100"
//             >
//               Learn More
//             </Link>
//           </div>
//           <p className="mt-3 text-sm text-zinc-500">
//             Response within 15 minutes during business hours.
//           </p>
//         </div>
//         <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
//           <ul className="grid gap-4">
//             <li className="flex items-start gap-3">
//               <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white text-sm">
//                 1
//               </span>
//               <div>
//                 <h3 className="font-semibold">Installation & Replacement</h3>
//                 <p className="text-sm text-zinc-600">
//                   Energy-efficient AC units installed by licensed pros.
//                 </p>
//               </div>
//             </li>
//             <li className="flex items-start gap-3">
//               <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white text-sm">
//                 2
//               </span>
//               <div>
//                 <h3 className="font-semibold">Repairs & Troubleshooting</h3>
//                 <p className="text-sm text-zinc-600">
//                   No-cool, leaks, strange noises — we fix it right.
//                 </p>
//               </div>
//             </li>
//             <li className="flex items-start gap-3">
//               <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white text-sm">
//                 3
//               </span>
//               <div>
//                 <h3 className="font-semibold">Maintenance Plans</h3>
//                 <p className="text-sm text-zinc-600">
//                   Seasonal tune-ups to extend lifespan and save energy.
//                 </p>
//               </div>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <section className="mt-16">
//         <h2 className="text-2xl font-semibold">Why choose Maxino?</h2>
//         <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
//           <div className="rounded-lg border border-zinc-200 bg-white p-4">
//             <p className="font-medium">Certified Technicians</p>
//             <p className="text-sm text-zinc-600">
//               Highly trained, background-checked, and insured.
//             </p>
//           </div>
//           <div className="rounded-lg border border-zinc-200 bg-white p-4">
//             <p className="font-medium">Fast Response</p>
//             <p className="text-sm text-zinc-600">
//               Same-day appointments and 24/7 emergency support.
//             </p>
//           </div>
//           <div className="rounded-lg border border-zinc-200 bg-white p-4">
//             <p className="font-medium">Transparent Pricing</p>
//             <p className="text-sm text-zinc-600">
//               No hidden fees. Clear quotes before any work starts.
//             </p>
//           </div>
//         </div>
//         <div className="mt-8">
//           <Link
//             href="/request-service"
//             className="inline-flex items-center rounded-md bg-blue-600 px-5 py-2.5 text-white hover:bg-blue-700"
//           >
//             Book your service now
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Landing
"use client"
import React from "react";
import Image from "next/image";
import {
 
  ShieldCheck,
  Clock,
} from "lucide-react";

const Landing = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#f8fafc] overflow-hidden  flex items-center selection:bg-blue-100">
      {/* --- PROFESSIONAL BACKGROUND ELEMENTS --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-blue-100/40 to-cyan-100/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[600px] h-[600px] bg-gradient-to-tr from-slate-200/50 to-blue-50/50 rounded-full blur-[100px]" />
        {/* Subtle Grid Pattern for "Professional" feel */}
        <div className="absolute inset-0 opacity-[0.03] sbg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          {/* LEFT COLUMN: Content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            {/* Brand Logo */}
            

            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Maxino <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                  Air Contitioning Services
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-500 max-w-lg leading-relaxed font-light">
                Experience precision climate control. We provide high-efficiency
                installations and 24/7 emergency repairs for modern homes.
              </p>
            </div>

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-slate-100 rounded-lg shadow-sm">
                <ShieldCheck size={18} className="text-blue-500" />
                <span className="text-sm font-semibold text-slate-600">
                  Certified Techs
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-slate-100 rounded-lg shadow-sm">
                <Clock size={18} className="text-blue-500" />
                <span className="text-sm font-semibold text-slate-600">
                  24/7 Support
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
              <button className="w-full sm:w-auto bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold shadow-xl shadow-slate-200 hover:bg-blue-600 hover:shadow-blue-200 transition-all duration-300 transform hover:-translate-y-1">
                Book a Service
              </button>
              <button className="group flex items-center gap-2 font-bold text-slate-700 hover:text-blue-600 transition-colors">
                View Pricing
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Professional AC Presentation */}
          <div className="relative group">
            {/* The "Airflow" Visual Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10">
              <div className="absolute inset-0 border-[40px] border-blue-100/30 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-10 border-[2px] border-dashed border-blue-200/50 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            </div>

            {/* Image Container with Floating Animation */}
            <div className="relative z-10 drop-shadow-[0_35px_35px_rgba(0,0,0,0.1)] animate-bounce-slow">
              <div className="relative overflow-hidden rounded-3xl p-4">
                <Image
                  src="/ac-hero.png"
                  alt="Modern AC Unit"
                  width={700}
                  height={500}
                  className="object-contain transform transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
            </div>

            {/* Floating Info Card */}
            
          </div>
        </div>

        {/* --- REFINED FOOTER SECTION --- */}
        
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Landing;
// import React from "react";
// import Image from "next/image";
// import {
//   Video,
//   Calendar,
//   ArrowRight,
//   Instagram,
//   Facebook,
//   Send,
// } from "lucide-react";

// const ACServiceBanner = () => {
//   return (
//     <section className="relative w-full min-h-[600px] flex items-center justify-center p-6 md:p-12 overflow-hidden font-sans">
//       {/* Background with Gradient and Blur Orbs */}
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 rounded-[40px] z-0" />
//       <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-white/10 blur-[80px] rounded-full z-0" />

//       <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
//         {/* Left Content Column */}
//         <div className="text-white space-y-8 animate-in fade-in slide-in-from-left duration-1000">
//           <div className="space-y-4">
//             <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
//               Arctic Breeze —
//             </h1>
//             <p className="text-xl md:text-2xl font-medium text-blue-50 opacity-90 max-w-lg">
//               Smart cooling solutions for modern homes and commercial spaces.
//             </p>
//             <p className="text-sm md:text-base text-blue-100/80 max-w-md leading-relaxed">
//               Experience 24/7 premium AC maintenance, emergency repairs, and
//               smart thermostat installations with our certified expert
//               technicians.
//             </p>
//           </div>

//           {/* CTA Buttons */}
//           <div className="flex flex-wrap gap-4 items-center">
//             <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 px-8 py-4 rounded-full transition-all text-white font-medium group">
//               <Video className="w-5 h-5" />
//               <span>Book Virtual Consult</span>
//             </button>

//             <button className="flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full transition-all font-bold hover:shadow-lg hover:scale-105 active:scale-95">
//               <Calendar className="w-5 h-5" />
//               Schedule Now
//             </button>
//           </div>

//           {/* Social Icons */}
//           <div className="flex gap-6 opacity-70">
//             <Send className="w-5 h-5 cursor-pointer hover:opacity-100" />
//             <Facebook className="w-5 h-5 cursor-pointer hover:opacity-100" />
//             <Instagram className="w-5 h-5 cursor-pointer hover:opacity-100" />
//           </div>
//         </div>

//         {/* Right Visual Column (Floating Phones) */}
//         <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
//           {/* Main Phone - App Interface */}
//           <div className="relative z-20 transform -rotate-12 translate-x-8 hover:translate-y-[-10px] transition-transform duration-500">
//             <div className="w-[220px] h-[450px] bg-slate-900 rounded-[3rem] border-[6px] border-slate-800 overflow-hidden shadow-2xl">
//               {/* Mock App UI */}
//               <div className="bg-white h-full w-full p-4 text-slate-800">
//                 <div className="h-4 w-20 bg-slate-200 rounded-full mb-6" />
//                 <div className="space-y-3">
//                   <div className="h-32 bg-blue-50 rounded-xl flex items-center justify-center">
//                     <span className="text-blue-500 font-bold">
//                       Service Tracking
//                     </span>
//                   </div>
//                   <div className="h-4 w-full bg-slate-100 rounded" />
//                   <div className="h-4 w-3/4 bg-slate-100 rounded" />
//                   <div className="mt-8 pt-4 border-t">
//                     <div className="flex justify-between items-center bg-blue-600 p-3 rounded-lg text-white">
//                       <span className="text-xs">AC Checkup</span>
//                       <ArrowRight className="w-4 h-4" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Background Phone - Branding */}
//           <div className="absolute z-10 transform rotate-12 -translate-x-12 opacity-90 scale-95 blur-[1px] hover:blur-0 transition-all">
//             <div className="w-[220px] h-[450px] bg-gradient-to-tr from-blue-700 to-blue-400 rounded-[3rem] border-[6px] border-white/20 flex items-center justify-center shadow-xl">
//               <div className="bg-white/20 p-6 rounded-2xl backdrop-blur-sm">
//                 <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 font-black text-xl">
//                   AB
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ACServiceBanner;
