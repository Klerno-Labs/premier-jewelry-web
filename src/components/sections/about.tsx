"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { images } from "@/config/images";
import { cn } from "@/lib/utils";

const FEATURES = [
  "Data-driven decision making",
  "Sustainable growth strategies",
  "End-to-end project management",
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative grid grid-cols-2 gap-4"
          >
            <div className="space-y-4 mt-8">
              <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={images.about.src}
                  alt={images.about.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={images["team-1"].src}
                  alt={images["team-1"].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/50 rounded-full blur-3xl opacity-50" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-6">
              Built on a Foundation of Excellence
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded in 2020, Pegrio emerged from a simple idea: businesses shouldn't have to choose between growth and stability. We are a team of seasoned consultants, creatives, and technologists dedicated to solving your toughest challenges.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our approach is holistic. We don't just offer advice; we roll up our sleeves and work alongside you to implement strategies that deliver measurable ROI. From Houston to the global market, we are your partners in progress.
            </p>
            
            <ul className="space-y-4 mb-8">
              {FEATURES.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-6">
              <div>
                <div className="text-3xl font-bold text-gray-900">150+</div>
                <div className="text-sm text-gray-500">Projects Delivered</div>
              </div>
              <div className="w-px h-12 bg-gray-300" />
              <div>
                <div className="text-3xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-500">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}