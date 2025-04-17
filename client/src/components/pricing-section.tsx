import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";

export function PricingSection() {
  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for independent professionals and freelancers.",
      features: [
        "5 deal analyses per month",
        "Basic risk assessment",
        "Contract review assistance",
        "Email support",
      ],
      buttonText: "Start Free Trial",
      buttonVariant: "outline",
      popular: false,
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Ideal for growing businesses and teams.",
      features: [
        "25 deal analyses per month",
        "Advanced risk assessment",
        "Full contract review & suggestions",
        "Negotiation coaching",
        "Priority support",
      ],
      buttonText: "Start Free Trial",
      buttonVariant: "default",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$249",
      period: "/month",
      description: "For established teams with high-volume needs.",
      features: [
        "Unlimited deal analyses",
        "Premium risk assessment",
        "Full contract optimization",
        "Advanced negotiation strategies",
        "Dedicated account manager",
        "API integration",
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline",
      popular: false,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-slate-600 text-lg">
            Choose the plan that's right for your business needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${plan.popular ? 'transform -translate-y-4' : ''}`}
              whileHover={{ y: plan.popular ? -20 : -5 }}
            >
              <Card 
                className={`h-full ${
                  plan.popular 
                    ? 'border-2 border-primary shadow-xl' 
                    : 'border border-slate-200 shadow-md'
                }`}
              >
                <CardHeader className={`p-6 ${plan.popular ? 'bg-primary text-white' : 'bg-slate-50 border-b border-slate-200'} relative`}>
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                      MOST POPULAR
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className={`ml-2 ${plan.popular ? 'text-white/80' : 'text-slate-600'}`}>{plan.period}</span>
                  </div>
                  <p className={plan.popular ? 'text-blue-100' : 'text-slate-600'}>{plan.description}</p>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckIcon className="h-5 w-5 text-primary" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Button 
                      variant={plan.buttonVariant as "default" | "outline"} 
                      className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                    >
                      <a href="#signup" className="w-full text-center">{plan.buttonText}</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
