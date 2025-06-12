
import { motion } from "framer-motion";
import "./component-styles/Body.css"; 



const cards = [
  { title: "Latest Product", description: "Check out our latest innovation in smart agriculture.",href:"latest-product" },
  { title: "Trending Now", description: "Top-performing sensors in 2025.",href:"trending-now" },
  { title: "Meet the Team", description: "The brains behind the breakthrough.", href:"about-us" },
  { title: "Join Us", description: "We're hiring AI & IoT enthusiasts." ,href:"careers" },
   
];

const sectionCards=[
    {
      title: "Smart Irrigation System",
      description: "Real-time soil moisture data automates watering, saving water and boosting crop health.",
      image: "https://images.unsplash.com/photo-1581091012184-5c7b89a7b7c9?q=80&w=1080&auto=format",
    },
    {
      title: "AI-Powered Crop Monitoring",
      description: "Drones equipped with AI scan fields to detect crop diseases and anomalies early.",
      image: "https://images.unsplash.com/photo-1609630875174-574c94bf4b5d?q=80&w=1080&auto=format",
    },
    {
      title: "Weather Adaptive Sensors",
      description: "Sensors dynamically adapt to changing weather conditions for consistent data.",
      image: "https://images.unsplash.com/photo-1615572359973-fc0c59c7c94e?q=80&w=1080&auto=format",
    },
  ]

const tagline = "Your search for IoT-based sensors ends here.";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.3,
      ease: "easeOut",
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const Body = () => {
  const cardList = [...cards, ...cards]; // duplicate for infinite scroll
  

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen flex flex-col items-center justify-center px-4 py-5 overflow-hidden relative">
        <div className="background-shape shape1"></div>
    <div className="background-shape shape2"></div>
      {/* Tagline */}
     <motion.h1
        className="text-8xl md:text-5xl w-[80vw]  font-bold text-center mb-6 flex flex-wrap justify-center"

        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {tagline.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            style={{ display: "inline-block", whiteSpace: "pre" }}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>

        {/*Our Vision*/}
       <motion.div
  className="relative left-[-20%] mb-20 mt-16 px-8 py-12 max-w-[80%] md:max-w-[60%] bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 text-white"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
  viewport={{ once: true }}
>
  <div className="absolute inset-0 rounded-3xl border border-white/20 blur-[2px] pointer-events-none" />
  <motion.h2
    className="text-2xl md:text-3xl font-bold mb-4 text-teal-200"
    initial={{ opacity: 0, x: -30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: 0.3 }}
  >
    Our Vision
  </motion.h2>
  <motion.p
    className="text-sm md:text-base text-gray-100 leading-relaxed"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.5 }}
  >
    IoT-based sensors are the future of smart agriculture, enabling farmers to monitor and manage their crops with precision and efficiency. Our goal is to provide cutting-edge IoT solutions that empower farmers to make data-driven decisions, optimize resource usage, and enhance crop yields.
  </motion.p>
</motion.div>



      {/* Scroll effect gradient masks */}
      
      <div className="absolute left-0 top-1/2 h-56 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-1/2 h-56 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      {/* Auto-scrolling row */}
      <div className="slider">
        <div className="slider-track">
          {cardList.map((card, index) => (
  <motion.div
  key={index}
  className="min-w-[320px] w-[30vw] h-[400px] mx-5 my-8 bg-white/10 backdrop-blur-xl border border-white/20 text-white p-6 rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-start"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
  viewport={{ once: true }}
>
  <div className="w-full h-[150px] mb-4 flex items-center justify-center overflow-hidden rounded-xl bg-white/20">
    <img
      src={card.image || "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
      alt={card.title}
      className="h-full object-contain"
    />
  </div>
  <a href={`/${card.href}`} className="font-bold text-xl mb-2 text-center">{card.title}</a>
  <p className="text-sm text-gray-200 text-center">{card.description}</p>
</motion.div>

))}
        </div>
      </div>

{/* Zig-Zag Feature Section */}
<section className="w-full flex flex-col items-center py-20 space-y-24 px-6 md:px-20">
  {sectionCards.map((item, index) => {
    const isEven = index % 2 === 0;
    return (
      <motion.div
        key={index}
        className={`flex h-[60vh] flex-col md:flex-row items-center gap-8 w-full md:w-[70vw] bg-white/5 border border-white/20 rounded-3xl backdrop-blur-md p-8 shadow-2xl relative group overflow-hidden
          ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
        initial={{ opacity: 0, x: isEven ? -100 : 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Glow background shape */}
        <div className="absolute inset-0 bg-gradient-to-tr from-teal-400/10 to-pink-500/5 blur-2xl opacity-30 group-hover:opacity-50 transition duration-500" />

        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={item.image}
            alt={item.title}
            className="rounded-xl w-full h-[250px] object-cover shadow-md"
          />
        </div>

        {/* Text */}
        <div className="text-white md:w-1/2 z-10">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-300 drop-shadow">
            {item.title}
          </h3>
          <p className="text-sm md:text-base text-gray-200 leading-relaxed">
            {item.description}
          </p>
        </div>
      </motion.div>
    );
  })}
</section>


    </div>
  );
};

export default Body;