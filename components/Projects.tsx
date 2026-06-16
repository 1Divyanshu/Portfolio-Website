"use client"
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { ReactNode } from "react";
import { 
  ShoppingBag, 
  MessageSquare, 
  Link2, 
  KeyRound, 
  SquareArrowOutUpRight 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter
} from '@/components/ui/card'; 
import { Button } from '@/components/ui/button';

export default function FeaturedProjects() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.project-card');

    gsap.fromTo(cards, 
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.3,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    ScrollTrigger.refresh();
  }, { scope: containerRef }); 

  const TechBadge = ({ children} : { children: ReactNode }) => (
    <span className="px-2.5 py-1 text-xs font-semibold text-emerald-800 bg-emerald-100/50 border border-emerald-200 rounded-md">
      {children}
    </span>
  );

  const projects = [
    {
      id: 1,
      title: "Cosplay E-Commerce",
      description: "A comprehensive digital storefront for cosplay gear featuring a modern glassmorphic aesthetic and secure, cookie-based user session management.",
      icon: <ShoppingBag className="w-6 h-6 text-emerald-700" />,
      techStack: ["Next.js", "Tailwind CSS", "JWT", "Framer Motion", "MongoDB"],
      githubLink: "https://github.com/1Divyanshu/cosplay-ecommerce.git",
      liveLink: "https://cosplay-ecommerce.vercel.app" 
    },
    {
      id: 2,
      title: "Mood-Based Chat App",
      description: "A real-time social platform where users can manually set their mood status to dynamically influence and style the visual theme of their chat rooms.",
      icon: <MessageSquare className="w-6 h-6 text-emerald-700" />,
      techStack: ["Docker", "WebSockets", "Node.js", "Tailwind", "TypeScript"],
      githubLink: "https://github.com/1Divyanshu/chat-app.git",
      liveLink: null
    },
    {
      id: 3,
      title: "Shortify",
      description: "A streamlined URL shortener service built to convert long, cumbersome links into manageable URLs, powered by a robust MongoDB backend.",
      icon: <Link2 className="w-6 h-6 text-emerald-700" />,
      techStack: ["React", "MongoDB", "JavaScript", "Node.js"],
      liveLink: null 
    },
    {
      id: 4,
      title: "Password Manager",
      description: "A local utility application designed to generate, securely store, and manage encrypted credentials and passwords for personal use.",
      icon: <KeyRound className="w-6 h-6 text-emerald-700" />,
      techStack: ["React", "TypeScript", "Vite", "Node.js"],
      liveLink: null 
    }
  ];

  return (
    <section id='projects' ref={containerRef} className="w-full py-24 relative text-zinc-900 overflow-hidden">
      <div className="absolute top-0 right-0 md:right-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] blur-[100px] md:blur-[150px] rounded-full pointer-events-none bg-emerald-100/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between items-center text-center md:text-left">
          <div className="w-full text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-950 mb-4">
              Featured Projects
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto md:mx-0 text-lg flex justify-self-center">
              A selection of my recent full-stack builds, focusing on seamless user experiences and scalable backend architectures.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-15">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="project-card flex flex-col h-full bg-white border border-zinc-200 shadow-sm transition-all duration-300 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-950/5 hover:-translate-y-1 group"
            >
              <CardHeader className="pb-4 flex flex-row items-start gap-4 space-y-0">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-100 shadow-inner shadow-emerald-950/5 group-hover:bg-emerald-100 transition-colors">
                  {project.icon}
                </div>
                <div className="space-y-1.5">
                  <CardTitle className="text-2xl text-zinc-950 font-bold leading-none">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-zinc-600 text-base leading-snug">
                    {project.description}
                  </CardDescription>
                </div>
              </CardHeader>
              
              <CardContent className="flex-grow pt-2">
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.techStack.map((tech, index) => (
                    <TechBadge key={index}>{tech}</TechBadge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="pt-6 border-t border-zinc-100 mt-auto flex flex-col md:flex-row justify-center gap-4 md:gap-10">
                
                <Button 
                  asChild 
                  className="w-full md:w-1/3 flex bg-zinc-900 text-white hover:bg-emerald-600 transition-colors cursor-pointer"
                >
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <svg 
                      className="w-4 h-4 fill-current shrink-0" 
                      viewBox="0 0 24 24" 
                      aria-hidden="true"
                      >
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      <span>View Repository</span>
                  </a>
                </Button>
                
                {project.liveLink && (
                  <Button
                    asChild
                    className="w-full md:w-1/3 flex text-white hover:bg-emerald-600 transition-colors cursor-pointer"
                  >
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <SquareArrowOutUpRight className="w-4 h-4 shrink-0"/>
                      <span>Live Demo</span>
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}