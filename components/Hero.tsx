"use client"
import Image from "next/image";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Hero() {
  const containerRef = useRef(null);
  const leftSword = useRef(null);
  const rightSword = useRef(null);
  const centerSword = useRef(null);
  
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useGSAP(() => {
    // 1. Initial states
    gsap.set(centerSword.current, { rotation: 0 });
    gsap.set(leftSword.current, { rotation: 220 });
    gsap.set(rightSword.current, { rotation: 140 });
    
    gsap.set([titleRef.current, subtitleRef.current], { opacity: 0, y: 50 });

    // 2. Create a Master Timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=1500",   
        scrub: 1,         // Smooth scrubbing
        pin: true,        // Pins the container in place until the animation finishes
      },
    });

    // Sword Animation (all sync together using the "swords" label)
    tl.to(centerSword.current, {
      y: "150vh",
      scale: 0.2,
      opacity: 0,
      ease: "power4.inOut",
    }, "swords")
    .to(leftSword.current, {
      rotate: 150,
      opacity: 0,
      ease: "power4.inOut",
    }, "swords")
    .to(rightSword.current, {
      rotate: 210,
      opacity: 0,
      ease: "power4.inOut",
    }, "swords");

    //  Text Pops Up 
    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      ease: "back.out(1.7)",
      duration: 0.5
    })
    .to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      ease: "back.out(1.7)",
      duration: 0.5
    }, "-=0.3"); 

    ScrollTrigger.refresh();
  }, { scope: containerRef }); 

  return (
    <div id="about" ref={containerRef} className="relative w-full bg-white">
      <section className="bg-ink min-h-screen overflow-hidden relative">
        {/* Background Particles */}
        <div className="pointer-events-none absolute inset-0">
          {Array.from({ length: 18 }).map((_, i) => (
            <span
              key={i}
              className="absolute block rounded-full bg-haori/40 animate-floatY"
              style={{
                width: `${2 + (i % 3)}px`,
                height: `${2 + (i % 3)}px`,
                left: `${(i * 53) % 100}%`,
                top: `${(i * 31) % 100}%`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${5 + (i % 4)}s`,
              }}
            />
          ))}
        </div>

        {/* Glow Effects */}
        <div className="absolute -top-20 -right-20 md:-top-40 md:-right-40 w-[200px] md:w-[300px] h-[300px] md:h-[500px] bg-emerald-300/50 blur-[300px] md:blur-[550px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 md:-bottom-40 md:-left-40 w-[200px] md:w-[300px] h-[300px] md:h-[500px] bg-emerald-300/50 blur-[300px] md:blur-[550px] rounded-full pointer-events-none" />
        
        {/* Swords */}
        <div className="flex relative justify-center h-screen items-center">
          <div ref={centerSword} className="absolute pointer-events-none">
            <Image
              className="pointer-events-none w-64 md:w-[500px] h-auto"
              loading="eager"
              src="/farzi-rotated.png"
              alt="center Sword"
              width={500}
              height={500}
            />
          </div>

          <div ref={rightSword} className="absolute z-10 pointer-events-none">
            <Image
              className="pointer-events-none w-64 md:w-[500px] h-auto"
              loading="eager"
              src="/farzi-copy.png"
              alt="Right Sword"
              width={500}
              height={500}
            />
          </div>

          <div ref={leftSword} className="absolute pointer-events-none">
            <Image
              className="pointer-events-none w-64 md:w-[500px] h-auto"
              loading="eager"
              src="/farzi-copy.png"
              alt="left Sword"
              width={500}
              height={500}
            />
          </div>
        </div>

        {/* Main Name / Title */}
        <div ref={titleRef} className="absolute z-20 top-[15%] md:top-[28%] text-center w-full px-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-500 drop-shadow-sm pb-2">
            Divyanshu Shekhar Bhatt
          </h1>
        </div>

        {/* Subtitles and CTA */}
        <div ref={subtitleRef} className="absolute z-20 top-[32%] sm:top-[35%] md:top-[42%] text-center w-full flex flex-col items-center px-4">
          
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-emerald-400 tracking-widest uppercase mb-4 drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]">
            Full Stack Developer
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-zinc-300 leading-relaxed font-medium">
            I enjoy building web applications that reflect my perspective, <br className="hidden md:block" />  often taking an unorthodox approach to design.
          </p>
          
          {/* Availability Status Badge */}
          <div className="mt-8 md:mt-10 inline-flex items-center gap-3 px-5 py-2.5 md:px-6 md:py-3 rounded-full bg-emerald-950/30 border border-emerald-500/20 backdrop-blur-md shadow-lg transition-all duration-300 hover:bg-emerald-900/40 hover:border-emerald-500/40 cursor-default group">
            {/* Pulsing Dot */}
            <span className="relative flex h-2.5 w-2.5 md:h-3 md:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-full w-full bg-emerald-500"></span>
            </span>
            
            <span className="text-emerald-300 font-semibold tracking-wide text-xs sm:text-sm md:text-base group-hover:text-emerald-200 transition-colors">
              Open for projects and internships
            </span>
          </div>
          
        </div>
      </section>
    </div>
  );
}