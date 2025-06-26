'use client'

import React, {useEffect, useRef} from 'react';
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface FloatingShape {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
}

const STAR_COUNT = 100;
const MIN_STAR_SIZE = 1;
const MAX_STAR_SIZE = 4;
const MIN_OPACITY = 0.2;
const MAX_OPACITY = 1;
const STAR_SPEED = 0.3;
const BACKGROUND_COLOR = '#1a1818';

export const AnimatedBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number | null>(null);
    const shapesRef = useRef<FloatingShape[]>([]);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const subheadingRef = useRef<HTMLParagraphElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const initializeCanvas = (canvas: HTMLCanvasElement) => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };

    const createShapes = (canvas: HTMLCanvasElement) => {
        const shapes: FloatingShape[] = [];

        for (let i = 0; i < STAR_COUNT; i++) {
            shapes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * (MAX_STAR_SIZE - MIN_STAR_SIZE) + MIN_STAR_SIZE,
                speedX: (Math.random() - 0.5) * STAR_SPEED,
                speedY: (Math.random() - 0.5) * STAR_SPEED,
                opacity: Math.random() * (MAX_OPACITY - MIN_OPACITY) + MIN_OPACITY,
            });
        }

        shapesRef.current = shapes;
    };

    const updateShapePosition = (shape: FloatingShape, canvas: HTMLCanvasElement) => {
        shape.x += shape.speedX;
        shape.y += shape.speedY;

        // Wrap around edges
        if (shape.x < -shape.size) shape.x = canvas.width + shape.size;
        if (shape.x > canvas.width + shape.size) shape.x = -shape.size;
        if (shape.y < -shape.size) shape.y = canvas.height + shape.size;
        if (shape.y > canvas.height + shape.size) shape.y = -shape.size;
    };

    const drawStar = (ctx: CanvasRenderingContext2D, shape: FloatingShape) => {
        const starGradient = ctx.createRadialGradient(
            shape.x, shape.y, 0,
            shape.x, shape.y, shape.size * 2
        );
        starGradient.addColorStop(0, `rgba(255, 255, 255, ${shape.opacity})`);
        starGradient.addColorStop(0.5, `rgba(255, 255, 255, ${shape.opacity * 0.3})`);
        starGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = starGradient;
        ctx.beginPath();
        ctx.arc(shape.x, shape.y, shape.size, 0, Math.PI * 2);
        ctx.fill();
    };

    const animate = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
        // Clear canvas with dark space background
        ctx.fillStyle = BACKGROUND_COLOR;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        shapesRef.current.forEach((shape) => {
            updateShapePosition(shape, canvas);
            drawStar(ctx, shape);
        });

        animationRef.current = requestAnimationFrame(() => animate(canvas, ctx));
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const handleResize = () => {
            initializeCanvas(canvas);
            createShapes(canvas);
        };

        // Initialize animation
        initializeCanvas(canvas);
        createShapes(canvas);
        animate(canvas, ctx);

        // Event listeners
        window.addEventListener('resize', handleResize);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const ctx = gsap.context(() => {
            if (headingRef.current) {
                gsap.from(headingRef.current, {
                    opacity: 0,
                    y: 40,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: headingRef.current,
                        start: "top 80%",
                    },
                });
            }
            if (subheadingRef.current) {
                gsap.from(subheadingRef.current, {
                    opacity: 0,
                    y: 40,
                    duration: 1,
                    delay: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: subheadingRef.current,
                        start: "top 85%",
                    },
                });
            }
            if (buttonRef.current) {
                gsap.from(buttonRef.current, {
                    opacity: 0,
                    y: 40,
                    duration: 1,
                    delay: 0.4,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: buttonRef.current,
                        start: "top 90%",
                    },
                });
            }
        });
        return () => ctx.revert();
    }, []);

    return (
        <div className="relative bg-[#1a1818] overflow-hidden">
            {/* Animated Canvas Background */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
                style={{zIndex: 1}}
            />

            {/* Decorative stars */}
            <Image
                src="/assets/images/home/Star 2 (1).png"
                alt="Decorative star"
                width={100}
                height={100}
                className="object-cover absolute z-[19] left-20 top-25"
            />

            <Image
                src="/assets/images/home/Star 2 (1).png"
                alt="Decorative star"
                width={100}
                height={100}
                className="object-cover absolute z-[19] right-[20%] top-[60%]"
            />

            {/* Main content */}
            <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 ref={headingRef} className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        Beyond Just <span
                        style={{
                            background: 'linear-gradient(135deg, #F2682F, #EE2A6D, #F04750)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
        Code
      </span> —<br/>
                        We Build Impact.
                    </h1>

                    <p ref={subheadingRef} className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                        We design, develop, and deploy IT services that
                        empower startups to enterprises—across industries
                        and borders.
                    </p>

                    <button
                        ref={buttonRef}
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-full hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                        Let's Started
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Globe image */}
            <div className="flex justify-center items-center">
                <Image
                    src="/assets/images/home/globe-blue-tech-BfBV6GvzpM.png"
                    alt="Globe illustration"
                    width={148}
                    height={148}
                    className="z-10"
                    style={{
                        filter: 'drop-shadow(0 0 100px #B91C5C) drop-shadow(0 0 20px #B91C5C) drop-shadow(0 0 60px #991B1B)'
                    }}
                />
            </div>
        </div>
    );
};

export default AnimatedBackground;