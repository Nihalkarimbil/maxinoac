import Image from "next/image";
import { Users, Award, MapPin } from "lucide-react";

import Snowflakes from "@/components/ui/Snowflakes";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-blue-50 text-white py-20 lg:py-18 px-6 lg:px-20 relative overflow-hidden">
        <Snowflakes count={40} color="text-gray-300" />
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl text-blue-900  font-semibold mb-6">
            About
            <span className="italic font-bold text-cyan-900">
              {" "}
              MA<span className="text-cyan-400">X</span>INO
            </span>{" "}
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            We are dedicated to providing the highest quality air conditioning
            and appliance services in the region.
          </p>
        </div>
      </section>

      {/* Story & Mission */}
      <section className="py-20 bg-white px-6 lg:px-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Our Story</h2>
              <p className="text-slate-600 leading-relaxed">
                Founded in 2015, Maxino started with a simple mission: to make
                home maintenance hassle-free. What began as a small team of two
                technicians has now grown into a premier service provider with a
                workforce of expert professionals.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We understand the importance of a comfortable home environment,
                especially during extreme weather conditions. That's why we
                strive to offer same-day service and 100% customer satisfaction.
              </p>

              <div className="pt-6 grid grid-cols-2 gap-6">
                <div className="flex items-center gap-2 bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <h3 className="text-2xl font-bold text-primary mb-1">500+</h3>
                  <p className="text-sm font-semibold text-slate-600">Happy Customers</p>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <h3 className="text-2xl font-bold text-primary mb-1">4+</h3>
                  <p className="text-sm font-semibold text-slate-600">Years Experience</p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] bg-slate-200 rounded-2xl overflow-hidden shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-100">
                <Image
                  src="/logo.png"
                  alt="About Maxino"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-2">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                To deliver reliable, efficient, and affordable appliance care
                solutions that enhance the quality of life for our customers,
                while empowering our technicians with dignified livelihoods.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-2">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                To become the most trusted household name for home services
                across the nation, known for our integrity, technical
                excellence, and customer-centric approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Serving Across Tech City</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Pandikkad",
              "Tuvvur",
              "Melattur",
              "Wandoor",
              "Perinthalmanna",
              "Manjeri",
              "Karuvarakundu",
              "Kalikavu",
            ].map((area) => (
              <div
                key={area}
                className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full border border-slate-200 text-slate-600 font-medium"
              >
                <MapPin className="h-4 w-4 text-primary" />
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
