"use client";

import { ArrowRight, BarChart, Users, Lightbulb } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "@/config/images";

const SERVICES = [
  {
    title: "Strategic Consulting",
    description: "Navigate complex business landscapes with our data-driven roadmap planning and market analysis.",
    icon: <Lightbulb className="h-8 w-8 text-blue-600" />,
    image: images["service-1"],
    link: "#contact"
  },
  {
    title: "Digital Transformation",
    description: "Modernize your operations with cutting-edge technology integration and workflow automation.",
    icon: <BarChart className="h-8 w-8 text-blue-600" />,
    image: images["service-2"],
    link: "#contact"
  },
  {
    title: "Brand Development",
    description: "Craft a compelling narrative and visual identity that resonates with your target audience.",
    icon: <Users className="h-8 w-8 text-blue-600" />,
    image: images["service-3"],
    link: "#contact"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Comprehensive Solutions for Every Stage
          </h2>
          <p className="text-lg text-gray-600">
            Whether you are a startup looking to find your footing or an enterprise seeking optimization, our tailored services meet you where you are.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-gray-900/20 transition-colors" />
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 flex-1">{service.description}</p>
                <a 
                  href={service.link}
                  className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 group-hover:translate-x-1 transition-all duration-300 w-fit"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}