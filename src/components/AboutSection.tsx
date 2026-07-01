import { motion } from "framer-motion";
import moodiCharacter from "@/assets/about.png";

const AboutSection = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Block - Slightly tilted */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -50, rotate: -2 }}
            whileInView={{ opacity: 1, x: 0, rotate: -1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div 
              className="tilted-card bg-card/80 backdrop-blur-sm"
              style={{ "--tilt": "-2deg" } as React.CSSProperties}
            >
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed space-y-4">
                <span className="block font-cartoon text-3xl md:text-4xl text-primary mb-6">
                  In a market that never shuts up,
                </span>
                <span className="block text-2xl text-foreground/80 mb-4">
                  MOODI chose silence.
                </span>
                
                <span className="block text-muted-foreground mt-8 mb-4">
                  No roadmap.<br />
                  No countdowns.<br />
                  No promises.
                </span>
                
                <span className="block text-foreground/90 my-6">
                  Charts go up, charts go down.<br />
                  <span className="text-primary font-semibold">MOODI stays seated.</span>
                </span>
                
                <span className="block text-muted-foreground mt-8">
                  Born on BSC, raised on indifference.<br />
                  MOODI isn't early.<br />
                  MOODI isn't late.
                </span>
                
                <span className="block font-cartoon text-2xl text-primary mt-8">
                  MOODI just exists.
                </span>
              </p>
            </div>
          </motion.div>

          {/* Character illustration */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: 50, rotate: 3 }}
            whileInView={{ opacity: 1, x: 0, rotate: 2 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.img
              src={moodiCharacter}
              alt="MOODI being unbothered"
              className="w-48 md:w-64 lg:w-72 drop-shadow-2xl opacity-80"
              style={{ transform: "scaleX(-1)" }}
              animate={{ 
                y: [0, -5, 0],
                rotate: [2, 3, 2]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
