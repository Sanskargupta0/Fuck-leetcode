
import React from "react";
import { useWaitlistCount } from "@/hooks/use-waitlist-count";

const Footer = () => {
  const { waitlistCount } = useWaitlistCount();
  return (
    <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-dark-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              <span className="text-foreground">Fuck</span>
              <span className="text-neon-green">Leet</span>
              <span className="text-neon-purple">Code</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              Automating the grind so you can focus on building stuff that actually matters. 
              Because life's too short for binary trees.
            </p>
          </div>

          {/* Links */}
          <div className="sm:col-span-1 lg:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#waitlist" className="text-muted-foreground hover:text-neon-green transition-colors text-sm block py-1">
                  Join Waitlist
                </a>
              </li>
              <li>
                <a href="mailto:sanskargupta362002@gmail.com" className="text-muted-foreground hover:text-neon-green transition-colors text-sm block py-1">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="https://x.com/Sanskar362002" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-neon-green transition-colors text-sm block py-1">
                  Twitter/X
                </a>
              </li>
              <li>
                <a href="https://github.com/Sanskargupta0" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-neon-green transition-colors text-sm block py-1">
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Status */}
          <div className="sm:col-span-1 lg:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-foreground">Current Status</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-neon-green rounded-full mr-2 flex-shrink-0"></div>
                <span className="text-muted-foreground">Building MVP</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-neon-purple rounded-full mr-2 flex-shrink-0"></div>
                <span className="text-muted-foreground">
                  {typeof waitlistCount === 'number' ? waitlistCount.toLocaleString() : waitlistCount} developers waiting
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-neon-blue rounded-full mr-2 flex-shrink-0"></div>
                <span className="text-muted-foreground">Launch: Q3 2025</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-dark-border pt-6 lg:pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-xs sm:text-sm text-muted-foreground text-center lg:text-left">
              © 2025 FuckLeetCode. Not affiliated with LeetCode. Obviously.
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm text-muted-foreground">
              <span className="text-center sm:text-left">Developed by Sanskar Gupta</span>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <a href="https://github.com/Sanskargupta0" target="_blank" rel="noopener noreferrer" className="hover:text-neon-green transition-colors">
                  GitHub
                </a>
                <a href="https://x.com/Sanskar362002" target="_blank" rel="noopener noreferrer" className="hover:text-neon-green transition-colors">
                  Twitter/X
                </a>
                <a href="mailto:sanskargupta362002@gmail.com" className="hover:text-neon-green transition-colors">
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
