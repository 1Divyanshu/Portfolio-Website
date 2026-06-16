"use client"
import Navbar from "@/components/Navbar";
import TechnicalSkills from "@/components/TechnicalSkills";
import Projects from "@/components/Projects";
import Getintouch from "@/components/Getintouch";
import Education from "@/components/Education";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <Education />
      <TechnicalSkills />
      <Projects />
      <Getintouch />
    </div>
  );
}