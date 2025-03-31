"use client";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import { motion } from "framer-motion";

const meetupImages = [
  "/images/meetup/1.png",
  "/images/meetup/2.png",
  "/images/meetup/3.png",
];

export  function MeetupSection() {
  return (
    <section id="meetup" className="py-24 relative bg-gray-900/50">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-vibrantBlue to-deepBlue bg-clip-text text-transparent mb-6"
        >
          Offline Meetup Highlights
        </motion.h2>

        <p className="text-gray-400 mb-8">
          A glimpse into our amazing in-person event!
        </p>

        <div className="max-w-4xl mx-auto">
          <Carousel
            showThumbs={false}
            autoPlay
            infiniteLoop
            interval={3000}
            showStatus={false}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            {meetupImages.map((src, index) => (
              <div key={index} className="relative w-full  h-[500px]">
                <Image
                  src={src}
                  alt={`Meetup Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
