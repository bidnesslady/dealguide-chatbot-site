import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "DealGuide AI has completely transformed how I approach client contracts. The AI insights helped me increase my average deal value by 22% in just three months.",
      name: "Sarah J.",
      role: "Business Coach",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      initials: "SJ",
    },
    {
      quote: "The negotiation coaching feature is invaluable. It helped me identify points of leverage I would have missed, resulting in better partnership terms for my online course launch.",
      name: "Marcus T.",
      role: "Digital Course Creator",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      initials: "MT",
    },
    {
      quote: "As a real estate investor, time is money. DealGuide AI cuts my property analysis time by 65% while giving me deeper insights into each potential investment.",
      name: "Elena R.",
      role: "Real Estate Investor",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      initials: "ER",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-slate-600 text-lg">
            Professionals across industries trust DealGuide AI to help them make better deals.
          </p>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="bg-slate-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow relative"
              variants={item}
            >
              <div className="text-primary/30 absolute -top-4 left-6 text-6xl">"</div>
              <div className="pt-4">
                <p className="text-slate-700 mb-6 relative z-10">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary-100">{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                    <p className="text-slate-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
