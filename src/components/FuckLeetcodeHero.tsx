import React from "react";
import { Button } from "@/components/ui/button";
import { useWaitlistCount } from "@/hooks/use-waitlist-count";

const FuckLeetcodeHero = () => {
  const { waitlistCount } = useWaitlistCount();
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById("waitlist");
    waitlistSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background effects - smaller on mobile */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-background to-neon-green/10"></div>
      <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-neon-green/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-neon-purple/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }}></div>

      <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="text-foreground">Fuck</span>
            <span className="text-neon-green">Leet</span>
            <span className="text-neon-purple">Code</span>
          </h1>
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            Stop pretending to care about <span className="text-neon-blue">algorithm puzzles</span> and 
            <br className="hidden sm:block" />
            start building <span className="text-neon-green">actual shit</span> that matters.
          </div>
        </div>

        <div className="mb-8 sm:mb-12">
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed">
            We automatically solve one LeetCode problem per day to keep your streak alive, 
            while you focus on real development work. Because life's too short for binary trees.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-12">
          <Button 
            onClick={scrollToWaitlist}
            className="bg-neon-green hover:bg-neon-green/80 text-background text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto font-semibold border border-neon-green/50 hover:border-neon-green transition-all duration-300 hover:shadow-lg hover:shadow-neon-green/25 w-full sm:w-auto"
          >
            Join the Waiting List
          </Button>
          <p className="text-sm sm:text-base text-muted-foreground">
            <span className="text-neon-purple">🎯</span> {typeof waitlistCount === 'number' ? waitlistCount.toLocaleString() : waitlistCount} developers already signed up
          </p>
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl mb-2">🤖</div>
            <div className="text-xs sm:text-sm text-muted-foreground">AI solves for you</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl mb-2">🔥</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Streak stays alive</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl mb-2">💼</div>
            <div className="text-xs sm:text-sm text-muted-foreground">HR gets impressed</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuckLeetcodeHero;