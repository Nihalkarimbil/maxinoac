"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { CheckCircle, Clock, ShieldCheck } from "lucide-react";

const HealthcareLayout = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row w-full md:max-w-6xl mx-auto py-8 md:py-16 px-4 md:px-6 gap-8 bg-[#f8fafc]">
      <div
        className="w-full md:w-1/2 relative h-64 md:h-96 min-h-[16rem] md:min-h-[24rem]"
        data-aos="flip-right"
      >
        <div className="block md:hidden w-full h-full rounded-lg shadow-lg overflow-hidden">
          <Image
            src="https://i.pinimg.com/1200x/d5/c8/db/d5c8db0bce80f3f8ffec899b834ab54d.jpg"
            alt="Healthcare professional with patient"
            fill
            className="object-cover"
          />
        </div>

        <div className="hidden md:block w-full h-full relative">
          <div className="absolute left-0 top-0 w-48 h-40 shadow-lg rounded-lg overflow-hidden">
            <Image
              src="https://i.pinimg.com/1200x/3b/8f/a5/3b8fa5fcc564aebad91984d04b0920d3.jpg"
              alt="Parent with child"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute left-16 top-32 w-64 h-48 shadow-lg rounded-lg overflow-hidden">
            <Image
              src="https://i.pinimg.com/736x/d3/76/54/d376547e97b72f7f1902107156fab6cf.jpg"
              alt="Healthcare professional with patient"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute right-16 top-5 w-40 h-36 shadow-lg rounded-lg overflow-hidden">
            <Image
              src="https://i.pinimg.com/736x/2b/01/52/2b0152d7b395941c41a5b2547876f240.jpg"
              alt="Family healthcare"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute left-0 bottom-0 w-48 h-32 shadow-lg rounded-lg overflow-hidden">
            <Image
              src="https://i.pinimg.com/736x/ae/c5/e9/aec5e90366915adf291b9ac8f2b954f9.jpg"
              alt="Serene landscape"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute right-24 bottom-16 bg-white p-4 rounded-full shadow-lg">
            <div className="w-12 h-12 flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="Smiling child"
                width={48}
                height={48}
                className="object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full md:w-1/2 flex flex-col justify-center space-y-6 pt-6 md:pt-12"
        data-aos="flip-left"
      >
        <h2 className="text-3xl font-bold tracking-tight">
          Why Maxino is the Best Choice?
        </h2>
        <div className="space-y-6">
          {[
            {
              title: "Experienced Technicians",
              desc: "Our team comprises certified professionals with years of field experience.",
              icon: CheckCircle,
            },
            {
              title: "Transparent Pricing",
              desc: "No hidden charges. We provide upfront quotes before starting any work.",
              icon: ShieldCheck,
            },
            {
              title: "On-Time Service",
              desc: "We value your time. Our technicians arrive at your scheduled slot.",
              icon: Clock,
            },
          ].map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="mt-1">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">{item.title}</h4>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthcareLayout;
