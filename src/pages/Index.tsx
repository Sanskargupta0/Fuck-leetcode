
import React, { useEffect } from "react";
import FuckLeetcodeHero from "@/components/FuckLeetcodeHero";
import HowItWorks from "@/components/HowItWorks";
import WaitlistForm from "@/components/WaitlistForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Initialize intersection observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.offsetTop - 20,
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        <FuckLeetcodeHero />
        <HowItWorks />
        <WaitlistForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
