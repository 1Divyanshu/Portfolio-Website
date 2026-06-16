"use client"
import { useRef, useState, FormEvent } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// Don't forget to import Github, Linkedin, and Twitter (or whichever socials you prefer)
import { Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function Getintouch() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      }
    });

    tl.from('.contact-header', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    })
      .from('.contact-card', {
        x: -40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
      }, "-=0.4")
      .from('.contact-form', {
        x: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      }, "-=0.6");

  }, { scope: containerRef });


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      alert("Message sent cleanly!");
      form.reset();
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id='contact' ref={containerRef} className="py-24 relative overflow-hidden bg-ink text-white">
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
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" />
      <div className="absolute top-12 left-12 w-[300px] h-[300px]  rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">

        <div className="contact-header text-center mb-16 opacity-100">
          <h2 className="text-4xl text-emerald-500 md:text-5xl font-extrabold tracking-tight mb-4">
            Get In Touch
          </h2>
          <p className="text-zinc-600 max-w-xl mx-auto text-lg">
            Have an exciting internship opportunity or a freelance project? Drop a message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Tactical Information Cards */}
          <div className="lg:col-span-5 space-y-6">

            <div className="contact-card p-6 bg-zinc-50 rounded-2xl border border-zinc-100 flex items-start gap-4 shadow-sm shadow-zinc-950/5">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-100 shrink-0">
                <Mail className="w-5 h-5 text-emerald-700" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-wider">Email Me</h4>
                <p className="text-zinc-900 font-semibold mt-1 break-all">dibubhatt1999@gmail.com</p>
              </div>
            </div>

            <div className="contact-card p-6 bg-zinc-50 rounded-2xl border border-zinc-100 flex items-start gap-4 shadow-sm shadow-zinc-950/5">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-100 shrink-0">
                <MapPin className="w-5 h-5 text-emerald-700" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-wider">Location</h4>
                <p className="text-zinc-900 font-semibold mt-1">Palakkad, Kerala, India</p>
              </div>
            </div>

            {/* NEW: Follow Me Section */}
            <div className="contact-card p-6 bg-zinc-50 rounded-2xl border border-zinc-100 shadow-sm shadow-zinc-950/5">
              <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-4">Social Profiles</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/divyanshu.shekhar_bhatt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 shadow-sm transition-all duration-300 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-700 hover:-translate-y-1"
                  aria-label="Instagram Profile"
                >
                  <Image src={"/instagram-logo_971166-164497.avif"} alt='insta icon' width={100} height={100}/>
                  <span className="w-5 h-5" />
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 shadow-sm transition-all duration-300 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-700 hover:-translate-y-1"
                  aria-label="GitHub Profile"
                >
                  <Image src={"/2111432.png"} alt='github icon' width={100} height={100}/>
                  <span className="w-5 h-5" />
                </a>

                <a
                  href="https://www.linkedin.com/in/divyanshu-shekhar-bhatt-7b5410368?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 shadow-sm transition-all duration-300 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-700 hover:-translate-y-1"
                  aria-label="Linkedin Profile"
                >
                  <Image src={"/4138130.png"} alt='github icon' width={100} height={100}/>
                  <span className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Interactive Form */}
          <div className="contact-form lg:col-span-7 bg-white p-8 rounded-2xl border border-zinc-100 shadow-xl shadow-zinc-950/5">
            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-zinc-700 tracking-wide">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Roronoa"
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl font-medium text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-zinc-700 tracking-wide">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your@gmail.com"
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl font-medium text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-bold text-zinc-700 tracking-wide">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="Project Collaboration Request"
                  className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl font-medium text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all text-sm"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-zinc-700 tracking-wide">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Describe your design objectives or backend requirements..."
                  className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl font-medium text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all resize-none text-sm leading-relaxed"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-6 rounded-xl font-bold tracking-wide bg-zinc-950 text-white hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <Send className={`w-4 h-4 ${isSubmitting ? 'animate-pulse' : ''}`} />
                <span>{isSubmitting ? 'Transmitting...' : 'Send Message'}</span>
              </Button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}