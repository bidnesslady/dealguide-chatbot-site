import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-slate-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-slate-900">
              Transform Your Deals With <span className="text-primary">AI-Powered</span> Insights
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              DealGuide AI helps professionals analyze opportunities, optimize negotiations, and close deals with confidence using advanced artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button variant="default" size="lg" className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 shadow-lg">
                  <a href="#signup" className="w-full text-center">Start Free Trial</a>
                </Button>
              </motion.div>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <a href="#features" className="w-full text-center">Learn More</a>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-2 text-slate-600 flex-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
              <span>No credit card required</span>
              <span className="mx-2">•</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary">
                <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
              </svg>
              <span>Secure & private</span>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="bg-white shadow-xl rounded-xl overflow-hidden border border-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="DealGuide AI dashboard preview" 
                  className="w-full h-auto"
                  loading="lazy"
                />
                <motion.div 
                  className="absolute -bottom-6 -right-6 bg-primary text-white px-6 py-3 rounded-lg shadow-lg"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 3 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <span className="font-bold">New! AI Deal Analysis</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
