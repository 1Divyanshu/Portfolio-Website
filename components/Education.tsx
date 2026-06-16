"use client"
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, BookOpen, Calendar, MapPin, Award } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Education() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse', 
      }
    });

  
    tl.fromTo('.edu-header', 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }
    )
    .fromTo('.edu-card-single',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.4' // Overlap so it starts right as the header finishes fading in
    );
  }, { scope: containerRef });

  const AcademicFocusBar = ({ level = 5 }) => {
    return (
      <div  className="flex gap-1 w-full max-w-[200px] group">
        {[...Array(7)].map((_, i) => (
          <div key={i} className="h-1.5 w-full rounded-sm bg-zinc-100 overflow-hidden">
            <div
              style={{
                transitionDuration: '250ms',
                transitionDelay: `${i * 60}ms`
              }}

              className={`h-full bg-emerald-600 w-0 transition-all cubic-bezier(0.4, 0, 0.2, 1) ${i < level ? 'group-hover:w-full' : ''}`}
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id='education' ref={containerRef} className="py-24 relative overflow-hidden bg-white text-zinc-900">
      {/* Subtle green ambient accent glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-50/60 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 flex flex-col items-center">


        <div className="edu-header text-center mb-12 w-full">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-emerald-800 mb-4">
            Education
          </h2>
          <p className="text-zinc-600 max-w-xl mx-auto text-lg">
            Engineering background combined with full-stack development expertise.
          </p>

        </div>

        {/* Main Card Wrapper targeted by GSAP */}
        <div className="edu-card-single w-full max-w-xl relative group">
          
          {/* Decorative Top Left Zoro Green Dot */}
          <div className="absolute -left-2 -top-2 w-4 h-4 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm" />

          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold tracking-wider uppercase bg-emerald-50 text-emerald-800 border border-emerald-100 rounded-full mb-3">
            <Calendar className="w-3 h-3" /> 2024 — Present
          </span>

          <Card className="flex flex-col bg-white border border-zinc-100 shadow-lg transition-all duration-300 hover:border-emerald-200 hover:shadow-xl hover:-translate-y-1 text-left">
            <CardHeader className="pb-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-4 border border-emerald-100 shadow-inner">
                <GraduationCap className="w-6 h-6 text-emerald-700" />
              </div>
              <CardTitle className="text-xl md:text-2xl text-zinc-950 font-extrabold leading-tight">
                Indian Institute of Technology Palakkad
              </CardTitle>
              <CardDescription className="text-emerald-700 font-bold flex items-center gap-1.5 text-sm mt-2">
                <BookOpen className="w-4 h-4" /> Pursuing B.Tech
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4 pt-4 border-t border-zinc-50">
              <div className="flex items-center gap-1.5 text-zinc-500 text-sm font-semibold">
                <MapPin className="w-4 h-4 shrink-0" /> Palakkad, Kerala, India
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
}