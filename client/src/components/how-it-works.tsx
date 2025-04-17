import { motion } from "framer-motion";

export function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Upload Your Deal",
      description: "Input deal details or upload contracts and documents for AI analysis.",
    },
    {
      number: 2,
      title: "Get AI Analysis",
      description: "Our advanced algorithms analyze terms, identify risks, and suggest improvements.",
    },
    {
      number: 3,
      title: "Make Better Deals",
      description: "Use AI-powered insights and recommendations to negotiate and close better deals.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            How DealGuide AI Works
          </h2>
          <p className="text-slate-600 text-lg">
            A simple three-step process to transform your deal-making capabilities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {step.number}
              </motion.div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
