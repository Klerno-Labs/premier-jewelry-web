"use client";

import { Star, Quote } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "@/config/images";

const TESTIMONIALS = [
  {
    name: "Maria L.",
    role: "CEO, Lumina Tech",
    content: "Pegrio completely transformed our operational workflow. We've seen a 40% increase in efficiency within just three months. Their team is unparalleled.",
    rating: 5
  },
  {
    name: "James T.",
    role: "Director, GreenLeaf Solutions",
    content: "The strategic guidance provided by Pegrio was instrumental in our Series B funding round. They understood our vision and articulated it perfectly to investors.",
    rating: 5
  },
  {
    name: "Sarah Jenkins",
    role: "Founder, Urban Eats",
    content: "Professional, responsive, and incredibly knowledgeable. They helped us rebrand from the ground up, and customer engagement has skyrocketed.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-cyan-100 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600">
            Don&apos;t just take our word for it. Here is what our partners have to say about working with Pegrio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-blue-100" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
                     <Image
                      src={images["gallery-1"].src} // Using a generic business image as avatar placeholder for variety
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}