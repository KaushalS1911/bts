'use client';
import React, { useEffect, useRef } from 'react';

interface FloatingShape {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
}

export const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const shapesRef = useRef<FloatingShape[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createShapes = () => {
      const shapes: FloatingShape[] = [];
      const shapeCount = 20;

      for (let i = 0; i < shapeCount; i++) {
        shapes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 80 + 20,
          speedX: (Math.random() - 0.5) * 1,
          speedY: (Math.random() - 0.5) * 1,
          opacity: Math.random() * 0.15 + 0.05,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02,
        });
      }

      shapesRef.current = shapes;
    };

    const animate = () => {
      // Clear canvas with the custom background color
      ctx.fillStyle = '#1A1818';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      shapesRef.current.forEach((shape, index) => {
        // Update position
        shape.x += shape.speedX;
        shape.y += shape.speedY;
        shape.rotation += shape.rotationSpeed;

        // Wrap around edges instead of bouncing
        if (shape.x < -shape.size) shape.x = canvas.width + shape.size;
        if (shape.x > canvas.width + shape.size) shape.x = -shape.size;
        if (shape.y < -shape.size) shape.y = canvas.height + shape.size;
        if (shape.y > canvas.height + shape.size) shape.y = -shape.size;

        // Save context for rotation
        ctx.save();
        ctx.translate(shape.x, shape.y);
        ctx.rotate(shape.rotation);

        // Create different shapes
        if (index % 3 === 0) {
          // Circles with gradient
          const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, shape.size);
          gradient.addColorStop(0, `rgba(255, 107, 107, ${shape.opacity})`);
          gradient.addColorStop(0.7, `rgba(238, 90, 36, ${shape.opacity * 0.5})`);
          gradient.addColorStop(1, 'rgba(255, 107, 107, 0)');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(0, 0, shape.size, 0, Math.PI * 2);
          ctx.fill();
        } else if (index % 3 === 1) {
          // Rectangles
          ctx.fillStyle = `rgba(255, 107, 107, ${shape.opacity * 0.3})`;
          ctx.fillRect(-shape.size/2, -shape.size/2, shape.size, shape.size);
        } else {
          // Triangles
          ctx.fillStyle = `rgba(238, 90, 36, ${shape.opacity * 0.4})`;
          ctx.beginPath();
          ctx.moveTo(0, -shape.size/2);
          ctx.lineTo(-shape.size/2, shape.size/2);
          ctx.lineTo(shape.size/2, shape.size/2);
          ctx.closePath();
          ctx.fill();
        }

        // Restore context
        ctx.restore();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Initialize
    resizeCanvas();
    createShapes();
    animate();

    // Event listeners
    const handleResize = () => {
      resizeCanvas();
      createShapes();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ 
        background: '#1A1818',
        zIndex: 1
      }}
    />
  );
};