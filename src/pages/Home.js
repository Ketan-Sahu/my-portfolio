import React, { lazy, Suspense } from 'react';
import selfImg from '../assets/example-project-1.jpg'; // ✅ import image

const About = lazy(() => import('../components/About'));
const Projects = lazy(() => import('../components/Projects'));
const Skills = lazy(() => import('../components/Skills'));
const Resume = lazy(() => import('../components/Resume'));
const Contact = lazy(() => import('../components/Contact'));

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section id="hero" className="py-12 text-center">
        <img src={selfImg} id="selfimg" alt="self" className="w-48 mx-auto rounded-full" />
        <h1 className="text-4xl font-bold mt-4">Hi, I'm Ketan Sahu</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          I'm a Full Stack Java Developer with a strong foundation in Java, Spring Boot, and modern front-end technologies like React and Angular. I enjoy building scalable web applications, writing clean code, and solving real-world problems through end-to-end development. Always eager to learn, I stay updated with the latest tech trends and best practices.
        </p>
      </section>

      <Suspense fallback={<div>Loading About...</div>}>
        <About />
      </Suspense>

      <Suspense fallback={<div>Loading Projects...</div>}>
        <Projects />
      </Suspense>

      <Suspense fallback={<div>Loading Skills...</div>}>
        <Skills />
      </Suspense>

      <Suspense fallback={<div>Loading Resume...</div>}>
        <Resume />
      </Suspense>

      <Suspense fallback={<div>Loading Contact...</div>}>
        <Contact />
      </Suspense>
    </div>
  );
}
