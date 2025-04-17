import { motion } from "framer-motion";

export function BrandsSection() {
  const brands = [
    { src: "https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", alt: "Company logo" },
    { src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", alt: "Company logo" },
    { src: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", alt: "Company logo" },
    { src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", alt: "Company logo" },
    { src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", alt: "Company logo" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <p className="text-center text-slate-500 mb-8">Trusted by professionals at</p>
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {brands.map((brand, index) => (
            <motion.div 
              key={index} 
              className="w-24 md:w-32 grayscale hover:grayscale-0 transition-all"
              variants={item}
            >
              <img src={brand.src} alt={brand.alt} className="w-full" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
