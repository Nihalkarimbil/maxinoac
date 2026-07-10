"use client"
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Landing = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (textRef.current && containerRef.current) {
        gsap.to(textRef.current, {
          y: "80vh",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        });
      }
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    let animationFrameId: number;
    
    const updateVideoTime = () => {
      if (videoRef.current && videoRef.current.readyState >= 1 && containerRef.current) {
        const video = videoRef.current;
        const container = containerRef.current;
        const duration = video.duration || 0;
        
        if (duration > 0) {
          // Calculate scroll progress based on the container's position in the viewport
          const rect = container.getBoundingClientRect();
          const maxScroll = container.scrollHeight - window.innerHeight;
          
          if (maxScroll > 0) {
            // rect.top is 0 when container top is at viewport top
            // rect.top is -maxScroll when container bottom is at viewport bottom
            const scrollProgress = Math.min(Math.max(-rect.top / maxScroll, 0), 1);
            
            const targetTime = scrollProgress * duration;
            const currentTime = video.currentTime;
            const diff = targetTime - currentTime;
            
            // Smooth interpolation
            if (Math.abs(diff) > 0.05) {
              video.currentTime += diff * 0.1;
            }
          }
        }
      }
      animationFrameId = requestAnimationFrame(updateVideoTime);
    };

    animationFrameId = requestAnimationFrame(updateVideoTime);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[250vh] bg-black">
      {/* Sticky container that holds the full-screen video */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
        <video
          ref={videoRef}
          src="/herovedio.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          muted
          playsInline
          preload="auto"
        />
        
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        
        {/* Maxino Text Overlay */}
       <div className="relative z-10 flex flex-1 items-center justify-center px-3 pointer-events-none">
          <h1 ref={textRef} className="flex flex-wrap items-center justify-center gap-1 text-center font-display text-[48px] uppercase leading-none tracking-normal text-transparent [-webkit-text-stroke:2px_#ffffff] md:gap-2 md:text-[108px] md:[-webkit-text-stroke:4px_#ffffff]">
           MAXINO
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Landing;
