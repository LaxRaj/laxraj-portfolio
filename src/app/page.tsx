import Image from "next/image";
import Navbar from './components/Navbar';
import WhySection from './components/WhySection';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="who" className="flex min-h-screen max-w-screen-lg mx-auto flex-col items-center justify-center">
        <p className="text-gray-900 text-3xl zen text-center">
          Hello, I'm <span className="text-5xl text-black ballet">Lakshyaraj S. Bhati</span><br />
          I thrive on curiosity and collaboration—whether I'm architecting intuitive <span className="underline">React</span> and <span className="underline">Node.js</span> experiences, 
          exploring <span className="underline">Python</span>-driven data workflows, or leading upskilling initiatives as Vice-President of Professional 
          Development at <span className="underline">Muslim Tech Collaborative</span>. A natural problem-solver and lifelong learner, I'm passionate about 
          turning complex challenges into elegant, accessible web solutions that empower <span className="underline">both users and teams</span>.
        </p>
      </main>
      <WhySection />
    </>
  );
}
