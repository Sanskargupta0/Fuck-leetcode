import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Will this get me into FAANG?",
      answer: "Maybe. We're not your mom. But a consistent LeetCode streak definitely won't hurt your chances. Just don't mention us in the interview."
    },
    {
      question: "Is this legal?",
      answer: "Morally, yes. Legally, we plead the fifth. LeetCode ToS are... complicated. But hey, so is life."
    },
    {
      question: "What if I actually want to learn algorithms?",
      answer: "That's cute. But seriously, if you want to learn, go take an actual computer science course. This is for people who just want the green squares."
    },
    {
      question: "How do you solve the problems?",
      answer: "AI magic. GPT-4, Claude, and sometimes a very caffeinated intern. We rotate to keep it interesting."
    },
    {
      question: "Will recruiters know it's automated?",
      answer: "Unless you tell them, probably not. Our solutions look human enough to pass the vibe check. Just don't submit a solution in Assembly language for a Python problem."
    },
    {
      question: "What happens if LeetCode catches on?",
      answer: "We'll cross that bridge when we get there. Worst case, we pivot to HackerRank. Or you actually have to solve problems yourself. *gasp*"
    },
    {
      question: "Can I customize which problems to solve?",
      answer: "Not in v1. We pick random problems because consistency is key. If you want customization, go build your own bot."
    },
    {
      question: "Do you support other coding platforms?",
      answer: "LeetCode only for now. We might add HackerRank, CodeSignal, etc. if enough people beg us. Bribery also works."
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="text-neon-purple">FAQ</span> (Frequently Asked Questions)
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            All the questions we know you're thinking but are too afraid to ask.
          </p>
        </div>

        <div className="animate-fade-in">
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-dark-border rounded-lg sm:rounded-xl overflow-hidden"
              >
                <AccordionTrigger className="px-4 sm:px-6 py-3 sm:py-4 text-left hover:bg-secondary/50 text-foreground hover:no-underline">
                  <span className="text-base sm:text-lg font-medium pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-4 sm:px-6 pb-3 sm:pb-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 sm:mt-16 text-center animate-fade-in">
          <div className="bg-card border border-dark-border rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-foreground">
              Still have questions?
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
              Email us at <a href="mailto:sanskargupta362002@gmail.com" className="text-neon-green hover:underline">sanskargupta362002@gmail.com</a> or reach out on social media. 
              We're probably procrastinating anyway.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
              <a href="https://x.com/Sanskar362002" target="_blank" rel="noopener noreferrer" className="text-neon-blue hover:underline text-sm">
                Twitter/X: @Sanskar362002
              </a>
              <a href="https://github.com/Sanskargupta0" target="_blank" rel="noopener noreferrer" className="text-neon-purple hover:underline text-sm">
                GitHub: @Sanskargupta0
              </a>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">
              <span className="text-neon-purple">*</span> Response time: 24-48 hours (unless we're debugging our own code)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;