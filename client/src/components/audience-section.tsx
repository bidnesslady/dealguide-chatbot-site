import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckIcon } from "lucide-react";

export function AudienceSection() {
  const audiences = [
    {
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Coaches & Consultants",
      description: "Enhance your service offerings with AI-powered deal analysis that helps your clients make better business decisions.",
      benefits: [
        "Client proposal evaluation",
        "Service pricing optimization",
        "Contract term improvement",
      ],
    },
    {
      image: "https://images.unsplash.com/photo-1661956601349-f61c959a8fd4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Digital Product Sellers",
      description: "Optimize partnership agreements and licensing deals to maximize your digital product revenue.",
      benefits: [
        "Affiliate agreement analysis",
        "Partnership opportunity evaluation",
        "Licensing term optimization",
      ],
    },
    {
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Real Estate Professionals",
      description: "Evaluate property deals faster and negotiate better terms with AI-powered property analysis.",
      benefits: [
        "Property investment analysis",
        "Offer and counteroffer evaluation",
        "Risk assessment for clients",
      ],
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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="audience" className="py-20 bg-gradient-to-br from-blue-50 to-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Who Benefits from DealGuide AI?
          </h2>
          <p className="text-slate-600 text-lg">
            Our platform is designed for professionals who want to optimize their deal-making process.
          </p>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {audiences.map((audience, index) => (
            <motion.div 
              key={index}
              variants={item}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="h-full"
            >
              <Card className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full">
                <div className="h-40 bg-primary relative">
                  <img 
                    src={audience.image}
                    alt={audience.title} 
                    className="w-full h-full object-cover opacity-80"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 to-transparent flex items-end p-6">
                    <h3 className="text-white text-2xl font-bold">{audience.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-slate-600 mb-4">{audience.description}</p>
                  <ul className="space-y-2">
                    {audience.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckIcon className="h-5 w-5 text-primary" />
                        <span className="text-slate-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
