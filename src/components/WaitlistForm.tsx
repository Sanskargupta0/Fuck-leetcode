import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { addToWaitlist, fetchWaitlistCount } from "@/lib/api";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [waitlistCount, setWaitlistCount] = useState<number | string>(193);
  const { toast } = useToast();

  useEffect(() => {
    // Fetch current waitlist count on component mount
    setWaitlistCount("Let me check the waitlist count...");
    
    fetchWaitlistCount().then(count => {
      if (count > 0) {
        setWaitlistCount(count);
      } else {
        // Fallback to initial count if API fails
        setWaitlistCount(193);
      }
    }).catch(() => {
      // Fallback to initial count if API fails
      setWaitlistCount(193);
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Hold up! 🤨",
        description: "We need your email to keep you in the loop.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const success = await addToWaitlist(email);

      if (success) {
        toast({
          title: "👉 Boom! You just became 87% more hirable 🚀",
          description: "We'll let you know when we're ready to automate your LeetCode grind.",
        });
        setEmail("");
        // Update waitlist count
        setWaitlistCount(prev => typeof prev === 'number' ? prev + 1 : 92739);
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      toast({
        title: "Shit. Something broke. 💥",
        description: "Try again, or just email us directly. We're humans (mostly).",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="waitlist" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background effects - smaller on mobile */}
      <div className="absolute top-10 left-10 w-48 h-48 sm:w-96 sm:h-96 bg-neon-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 sm:w-80 sm:h-80 bg-neon-purple/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Ready to <span className="text-neon-green">Stop Pretending</span>?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto px-4 sm:px-0">
            Join the waitlist and never manually solve another LeetCode problem again. 
            Your future self will thank you.
          </p>
          
          {/* Waitlist count display */}
          <div className="mb-6 sm:mb-8">
            <p className="text-sm sm:text-base text-muted-foreground">
              <span className="text-neon-purple font-semibold">
                {typeof waitlistCount === 'number' ? waitlistCount.toLocaleString() : waitlistCount}
              </span> developers already waiting
            </p>
          </div>
        </div>

        <div className="bg-card border border-dark-border rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 xl:p-12 animate-fade-in max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <Input
                type="email"
                placeholder="your.email@whatever.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background border-dark-border text-foreground placeholder:text-muted-foreground text-base sm:text-lg p-3 sm:p-4 h-12 sm:h-14 rounded-xl w-full"
                disabled={isLoading}
              />
            </div>
            
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-neon-green hover:bg-neon-green/80 text-background text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-12 sm:h-14 font-semibold border border-neon-green/50 hover:border-neon-green transition-all duration-300 hover:shadow-lg hover:shadow-neon-green/25 rounded-xl"
            >
              {isLoading ? "Adding you to the resistance..." : "Join the Waiting List"}
            </Button>
          </form>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-xs sm:text-sm text-muted-foreground">
            <div className="flex items-center">
              <span className="text-neon-green mr-2">✓</span>
              No spam (we're too lazy)
            </div>
            <div className="flex items-center">
              <span className="text-neon-purple mr-2">✓</span>
              Early access guaranteed
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground px-4 sm:px-0">
            <span className="text-neon-blue">💡</span> Pro tip: Use your work email. Make it look official.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;