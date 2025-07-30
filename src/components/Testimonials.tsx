
import React, { useRef } from "react";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  gradient: string;
  backgroundImage?: string;
}

const testimonials: TestimonialProps[] = [{
  content: "Atlas transformed our production line, handling repetitive tasks while our team focuses on innovation. 30% increase in output within three months.",
  author: "Sarah Chen",
  role: "VP of Operations, Axion Manufacturing",
  gradient: "from-blue-700 via-indigo-800 to-purple-900",
  backgroundImage: "/background-section1.png"
}, {
  content: "Implementing Atlas in our fulfillment centers reduced workplace injuries by 40% while improving order accuracy. The learning capabilities are remarkable.",
  author: "Michael Rodriguez",
  role: "Director of Logistics, GlobalShip",
  gradient: "from-indigo-900 via-purple-800 to-orange-500",
  backgroundImage: "/background-section2.png"
}, {
  content: "Atlas adapted to our lab protocols faster than any system we've used. It's like having another researcher who never gets tired and maintains perfect precision.",
  author: "Dr. Amara Patel",
  role: "Lead Scientist, BioAdvance Research",
  gradient: "from-purple-800 via-pink-700 to-red-500",
  backgroundImage: "/background-section3.png"
}, {
  content: "As a mid-size business, we never thought advanced robotics would be accessible to us. Atlas changed that equation entirely with its versatility and ease of deployment.",
  author: "Jason Lee",
  role: "CEO, Innovative Solutions Inc.",
  gradient: "from-orange-600 via-red-500 to-purple-600",
  backgroundImage: "/background-section1.png"
}];

const TestimonialCard = ({
  content,
  author,
  role,
  backgroundImage = "/background-section1.png"
}: TestimonialProps) => {
  return <div className="bg-cover bg-center rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 h-full flex flex-col justify-between text-white transform transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden min-h-[250px] sm:min-h-[300px]" style={{
    backgroundImage: `url('${backgroundImage}')`
  }}>
      <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white z-10"></div>
      
      <div className="relative z-0 h-full flex flex-col justify-between">
        <p className="text-sm sm:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8 font-medium leading-relaxed pr-12 sm:pr-16 lg:pr-20 flex-1">{`"${content}"`}</p>
        <div>
          <h4 className="font-semibold text-base sm:text-lg lg:text-xl">{author}</h4>
          <p className="text-white/80 text-sm sm:text-base">{role}</p>
        </div>
      </div>
    </div>;
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return <section className="py-8 sm:py-12 lg:py-16 bg-white relative overflow-hidden" id="testimonials" ref={sectionRef}>
      <div className="section-container opacity-0 animate-on-scroll px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-pulse-500 text-white mr-2 text-xs sm:text-sm">04</span>
            <span className="text-sm sm:text-base">Testimonials</span>
          </div>
        </div>
        
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-display font-bold mb-8 sm:mb-10 lg:mb-12 text-left leading-tight">What others say</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => <TestimonialCard key={index} content={testimonial.content} author={testimonial.author} role={testimonial.role} gradient={testimonial.gradient} backgroundImage={testimonial.backgroundImage} />)}
        </div>
      </div>
    </section>;
};

export default Testimonials;
