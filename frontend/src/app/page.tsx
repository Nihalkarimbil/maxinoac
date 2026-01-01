"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import ServiceCard from '@/components/ServiceCard';
import Landing from '@/components/landing/Landing';
import { Wrench, Snowflake, PenTool, CheckCircle, ShieldCheck, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import HealthcareLayout from '@/components/landing/LayoutPage';
import Snowflakes from '@/components/ui/Snowflakes';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <Landing />

      {/* Services Section */}
      <section className="py-12 bg-[#f8fafc]">
        <div className="container mx-auto px-4 lg:px-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Our Premium Services
            </h2>
            <p className="text-slate-600 text-lg">
              We offer comprehensive solutions for all your air conditioning
              needs.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp}>
              <ServiceCard
                icon={Snowflake}
                title="AC Installation"
                description="Professional installation of Split, Window, and Central AC units with proper insulation and drainage setup."
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <ServiceCard
                icon={Wrench}
                title="Repair Service"
                description="Quick troubleshooting and repair for cooling issues, gas leakage, noise problems, and more."
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <ServiceCard
                icon={PenTool}
                title="Maintenance"
                description="Regular servicing including deep cleaning, filter replacement, and performance checks to ensure longevity."
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      {/* <section className="py-20 bg-[#f8fafc]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/img.png"
                alt="Professional AC Technician"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2 space-y-8"
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
            </motion.div>
          </div>
        </div>
      </section> */}

      <section className="py-8 bg-[#f8fafc]">
      <HealthcareLayout/>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-blue-50 text-blue-400 relative overflow-hidden">
        <Snowflakes count={30} color="text-blue-200" />
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Experience Comfort?
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-blue-400 text-lg mb-8 max-w-2xl mx-auto"
          >
            Book your service today and get flat 10% off on your first
            maintenance visit.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link href="/booking">
              <Button size="lg" variant="secondary" className="font-semibold shadow-lg hover:shadow-xl transition-all">
                Book Appointment Now
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
