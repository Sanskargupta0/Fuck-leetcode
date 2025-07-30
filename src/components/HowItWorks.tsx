
import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      icon: "🤖",
      title: "We solve it",
      description: "Our AI picks and solves a random LeetCode problem",
      color: "neon-green"
    },
    {
      icon: "😎",
      title: "You chill",
      description: "Continue working on stuff that actually pays bills",
      color: "neon-blue"
    },
    {
      icon: "📈",
      title: "HR gets impressed",
      description: "Your streak looks fire on your GitHub profile",
      color: "neon-purple"
    },
    {
      icon: "💻",
      title: "You code real stuff",
      description: "Build products, not toy algorithm solutions",
      color: "neon-green"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            How It <span className="text-neon-green">Works</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            It's embarrassingly simple. We handle the BS, you handle the real work.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-card border border-dark-border rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:border-neon-green/50 transition-all duration-300 hover:transform hover:scale-105 h-full flex flex-col">
                <div className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4">{step.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed flex-1">
                  {step.description}
                </p>
              </div>
              
              {/* Connection line - hidden on mobile and tablet */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-neon-green to-neon-purple opacity-50"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-card border border-dark-border rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
              <span className="text-neon-green font-semibold">TL;DR:</span> We solve it. You chill. HR gets impressed. You code real stuff.
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              (And yes, we know this is morally questionable. That's why it's called <span className="text-neon-purple">fuck</span>leetcode.)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
