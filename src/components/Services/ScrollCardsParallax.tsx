// components/ScrollCardsParallax.tsx
'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Card {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  gradient: string;
  tags: string[];
}

const cardsData: Card[] = [
  {
    id: 1,
    title: "Web Development",
    subtitle: "Modern Solutions",
    description: "Creating responsive and dynamic web applications using the latest technologies like React, Next.js, and TypeScript.",
    image: "/api/placeholder/400/300",
    gradient: "from-red-500 via-red-600 to-orange-500",
    tags: ["React", "Next.js", "TypeScript"]
  },
  {
    id: 2,
    title: "Mobile Apps",
    subtitle: "Cross Platform",
    description: "Building native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
    image: "/api/placeholder/400/300",
    gradient: "from-orange-500 via-orange-600 to-red-500",
    tags: ["React Native", "Flutter", "iOS"]
  },
  {
    id: 3,
    title: "UI/UX Design",
    subtitle: "User Centered",
    description: "Designing intuitive and beautiful user interfaces that enhance user engagement and drive business growth.",
    image: "/api/placeholder/400/300",
    gradient: "from-red-600 via-orange-500 to-red-500",
    tags: ["Figma", "Adobe XD", "Sketch"]
  },
  {
    id: 4,
    title: "Backend Services",
    subtitle: "Scalable Architecture",
    description: "Developing robust backend systems and APIs that can scale with your business needs and handle millions of requests.",
    image: "/api/placeholder/400/300",
    gradient: "from-orange-600 via-red-500 to-orange-500",
    tags: ["Node.js", "Python", "AWS"]
  },
  {
    id: 5,
    title: "DevOps & Cloud",
    subtitle: "Infrastructure",
    description: "Implementing DevOps practices and cloud solutions to ensure reliable, secure, and scalable application deployment.",
    image: "/api/placeholder/400/300",
    gradient: "from-red-500 via-orange-600 to-red-600",
    tags: ["Docker", "Kubernetes", "AWS"]
  }
];

export const ScrollCardsParallax: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef}>
      {/* Fixed Background */}
      <div className="fixed inset-0 bg-[#1A1818] z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-full filter blur-3xl" />
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-red-600/10 to-orange-600/10 rounded-full filter blur-3xl" />
      </div>

      {/* Header Section */}
      <section className="relative h-80 flex items-center justify-center z-10">
        <motion.div
          className="text-center px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl lg:text-7xl font-bold text-white mb-6">
            What  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">We Deliver</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover how we transform ideas into reality with our comprehensive range of digital services
          </p>
        </motion.div>
      </section>

      {/* Cards Stacking Section */}
      <section className="relative" style={{ height: `${cardsData.length * 100}vh` }}>
        {cardsData.map((card, index) => {
          const cardProgress = useTransform(
            scrollYProgress,
            [
              (index) / cardsData.length,
              (index + 0.5) / cardsData.length,
              (index + 1) / cardsData.length
            ],
            [0, 0.5, 1]
          );

          const y = useTransform(cardProgress, [0, 1], [100, index * 30]);
          const opacity = useTransform(cardProgress, [0, 0.2, 1], [0, 1, 1]);

          return (
            <motion.div
              key={card.id}
              className="sticky top-20 flex items-center justify-center px-4"
              style={{
                y,
                opacity,
                zIndex: index + 1, // Higher index = higher z-index (front)
                height: '100vh'
              }}
            >
              <div className="w-full max-w-5xl">
                <div className="relative bg-[#1A1818] rounded-3xl overflow-hidden border border-gray-800">
                  {/* Animated Background Gradient */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-10`}
                    animate={{
                      opacity: [0.1, 0.15, 0.1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10 p-8 lg:p-12">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      
                      {/* Text Content */}
                      <div className="space-y-6">
                        {/* Card Number */}
                        <motion.div
                          className="flex items-center space-x-4"
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.1 }}
                        >
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${card.gradient} flex items-center justify-center`}>
                            <span className="text-white font-bold text-lg">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                          </div>
                          <div className={`h-0.5 w-16 bg-gradient-to-r ${card.gradient}`} />
                        </motion.div>

                        {/* Tags */}
                        <motion.div 
                          className="flex flex-wrap gap-2"
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                        >
                          {card.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1 rounded-full text-xs font-medium bg-gray-800 text-gray-300 border border-gray-700"
                            >
                              {tag}
                            </span>
                          ))}
                        </motion.div>

                        {/* Title */}
                        <motion.div
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                        >
                          <h3 className="text-4xl lg:text-5xl font-bold text-white mb-3">
                            {card.title}
                          </h3>
                          <p className={`text-xl font-medium bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent`}>
                            {card.subtitle}
                          </p>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                          className="text-lg text-gray-300 leading-relaxed"
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                        >
                          {card.description}
                        </motion.p>

                        {/* CTA Button */}
                        <motion.div
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.5 }}
                        >
                          <button className={`group relative px-8 py-4 rounded-full bg-gradient-to-r ${card.gradient} text-white font-medium overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 hover:scale-105`}>
                            <span className="relative z-10 flex items-center">
                              Explore More
                              <svg 
                                className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </span>
                          </button>
                        </motion.div>
                      </div>

                      {/* Visual Section */}
                      <motion.div
                        className="relative"
                        initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                      >
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-800 border border-gray-700">
                          <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-20`} />
                          
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                              <motion.div 
                                className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${card.gradient} flex items-center justify-center`}
                                animate={{
                                  rotateY: [0, 360],
                                }}
                                transition={{
                                  duration: 8,
                                  repeat: Infinity,
                                  ease: "linear"
                                }}
                              >
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 7a2 2 0 012-2h10a2 2 0 012 2v2M7 7h10" />
                                </svg>
                              </motion.div>
                              <p className="text-gray-400 font-medium text-lg">
                                {card.title}
                              </p>
                              <p className="text-gray-500 text-sm mt-2">
                                Interactive Preview
                              </p>
                            </div>
                          </div>
                          
                          {/* Floating particles */}
                          {[...Array(6)].map((_, i) => (
                            <motion.div
                              key={i}
                              className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${card.gradient}`}
                              style={{
                                top: `${20 + (i * 12)}%`,
                                left: `${15 + (i * 15)}%`,
                              }}
                              animate={{
                                y: [0, -20, 0],
                                opacity: [0.3, 1, 0.3],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: i * 0.5,
                                ease: "easeInOut"
                              }}
                            />
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>
    </div>
  );
};