"use client"
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { ReactNode } from 'react';
import { 
  MonitorSmartphone, 
  Server, 
  Database, 
  Wrench, 
  CheckCircle2 
} from 'lucide-react';

import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent, 
} from '@/components/ui/card'; 

gsap.registerPlugin(ScrollTrigger);

export default function TechnicalSkills() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%', 
        toggleActions: 'play none none reverse', 
      }
    });

    tl.fromTo('.skills-header', 
      { 
        y: 30, 
        opacity: 0 
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.2,
        stagger: 0.2,
        ease: 'power3.out',
      }
    )
    .fromTo('.tech-skill-card', 
      { 
        y: 60, 
        opacity: 0, 
        rotationX: -15, 
        transformPerspective: 1000 
      },
      {
        y: 0,
        opacity: 1,
        rotationX: 0,
        duration: 0.4,
        stagger: 0.15,
        ease: 'power3.out',
      }, 
      "-=0.4"
    );

  }, { scope: containerRef });

  const SkillItem = ({ children} : { children: ReactNode }) => (
    <li className="flex items-center gap-2.5 text-zinc-700 group py-1">
      <CheckCircle2 className="w-5 h-5 text-emerald-600 transition-transform group-hover:scale-110 shrink-0" />
      <span className="font-medium">{children}</span>
    </li>
  );

  const SegmentedBar = ({ level = 5 }) => {
    return (
      <div className="flex gap-1.5 w-full mt-1.5">
        {[...Array(level)].map((_, i) => (
          <div 
            key={i} 
            className="h-2 w-full rounded-sm bg-zinc-100 overflow-hidden"
          >
            <div
              style={{
                transitionDuration: '150ms',
                transitionDelay: `${i * 75}ms`,
              }}
              className={`h-full bg-emerald-600 w-0 ${i < level ? 'group-hover:w-full' : ''}`}
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id='skills' ref={containerRef} className="py-24 relative overflow-hidden bg-ink text-zinc-900">
      
      {/* Soft Light Green background glow/blob for atmosphere */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-emerald-100/50 blur-[550px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-emerald-100/50 blur-[550px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        
        <h1 className="skills-header text-4xl md:text-5xl font-extrabold text-center mb-4 tracking-tight text-white">
          Technical Skills
        </h1>
        <p className="skills-header text-center text-zinc-400 mb-16 max-w-2xl mx-auto text-lg">
          The tools, frameworks, and technologies that power the development of performant, scalable, and maintainable web applications.

        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center max-w-5xl mx-auto">
          {/* Frontend Card */}
          <Card className="tech-skill-card group flex flex-col h-full bg-white border border-zinc-100 shadow-lg shadow-zinc-950/5 transition-all duration-300 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-950/5 hover:-translate-y-1">
            <CardHeader className="pb-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center mb-5 border border-emerald-100 shadow-inner shadow-emerald-950/5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <MonitorSmartphone className="w-7 h-7 text-emerald-700" />
              </div>
              <CardTitle className="text-2xl text-zinc-950 font-bold">Frontend</CardTitle>
              <SegmentedBar level={3} />
            </CardHeader>
            <CardContent className="flex-grow pt-0">
              <ul className="space-y-1">
                <SkillItem>React</SkillItem>
                <SkillItem>TypeScript</SkillItem>
                <SkillItem>Tailwind CSS</SkillItem>
              </ul>
            </CardContent>
          </Card>

          {/* Backend Card */}
          <Card className="tech-skill-card group flex flex-col h-full bg-white border border-zinc-100 shadow-lg shadow-zinc-950/5 transition-all duration-300 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-950/5 hover:-translate-y-1">
            <CardHeader className="pb-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center mb-5 border border-emerald-100 shadow-inner shadow-emerald-950/5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Server className="w-7 h-7 text-emerald-700" />
              </div>
              <CardTitle className="text-2xl text-zinc-950 font-bold">Backend</CardTitle>
              <SegmentedBar level={4} />
            </CardHeader>
            <CardContent className="flex-grow pt-0">
              <ul className="space-y-1">
                <SkillItem>Node.js</SkillItem>
                <SkillItem>Express.js</SkillItem>
                <SkillItem>REST APIs</SkillItem>
                <SkillItem>Drizzle ORM</SkillItem>
              </ul>
            </CardContent>
          </Card>

          {/* Database Card */}
          <Card className="tech-skill-card group flex flex-col h-full bg-white border border-zinc-100 shadow-lg shadow-zinc-950/5 transition-all duration-300 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-950/5 hover:-translate-y-1">
            <CardHeader className="pb-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center mb-5 border border-emerald-100 shadow-inner shadow-emerald-950/5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Database className="w-7 h-7 text-emerald-700" />
              </div>
              <CardTitle className="text-2xl text-zinc-950 font-bold">Databases</CardTitle>
              <SegmentedBar level={2} />
            </CardHeader>
            <CardContent className="flex-grow pt-0">
              <ul className="space-y-1">
                <SkillItem>PostgreSQL</SkillItem>
                <SkillItem>MongoDB</SkillItem>
              </ul>
            </CardContent>
          </Card>

          {/* Tools Card */}
          <Card className="tech-skill-card group flex flex-col h-full bg-white border border-zinc-100 shadow-lg shadow-zinc-950/5 transition-all duration-300 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-950/5 hover:-translate-y-1">
            <CardHeader className="pb-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center mb-5 border border-emerald-100 shadow-inner shadow-emerald-950/5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Wrench className="w-7 h-7 text-emerald-700" />
              </div>
              <CardTitle className="text-2xl text-zinc-950 font-bold">Dev Tools</CardTitle>
              <SegmentedBar level={3} />
            </CardHeader>
            <CardContent className="flex-grow pt-0">
              <ul className="space-y-1">
                <SkillItem>Git & GitHub</SkillItem>
                <SkillItem>Docker</SkillItem>
                <SkillItem>Postman</SkillItem>
              </ul>
            </CardContent>
          </Card>

          {/* Frameworks Card */}
          <Card className="tech-skill-card group flex flex-col h-full bg-white border border-zinc-100 shadow-lg shadow-zinc-950/5 transition-all duration-300 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-950/5 hover:-translate-y-1">
            <CardHeader className="pb-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center mb-5 border border-emerald-100 shadow-inner shadow-emerald-950/5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <MonitorSmartphone className="w-7 h-7 text-emerald-700" />
              </div>
              <CardTitle className="text-2xl text-zinc-950 font-bold">Framework</CardTitle>
              <SegmentedBar level={2} />
            </CardHeader>
            <CardContent className="flex-grow pt-0">
              <ul className="space-y-1">
                <SkillItem>Next.js</SkillItem>
                <SkillItem>Svelte</SkillItem>
              </ul>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}