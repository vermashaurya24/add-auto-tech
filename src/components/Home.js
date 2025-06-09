
import { motion } from "framer-motion";
import "./component-styles/Body.css"; 



const cards = [
  { title: "Latest Product", description: "Check out our latest innovation in smart agriculture.",href:"latest-product" },
  { title: "Trending Now", description: "Top-performing sensors in 2025.",href:"trending-now" },
  { title: "Meet the Team", description: "The brains behind the breakthrough.", href:"about-us" },
  { title: "Join Us", description: "We're hiring AI & IoT enthusiasts." ,href:"careers" },
   
];

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
    </div>
  );
};

export default Body;