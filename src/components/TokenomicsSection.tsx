import { motion } from "framer-motion";
import { useState } from "react";
import { Copy, Check } from "lucide-react";

const CONTRACT_ADDRESS = "0x1234567890abcdef1234567890abcdef12345678";

const tokenomics = [
  { title: "Total Supply", value: "1,000,000,000", rotation: -3 },
  { title: "Buy/Sell Tax", value: "0%", rotation: 2 },
  { title: "Liquidity", value: "Burned 🔥", rotation: -2 },
];

const TokenomicsSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background floating elements */}
      <motion.div
        className="absolute top-20 right-10 w-40 h-40 rounded-full bg-primary/5 blur-3xl"
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-60 h-60 rounded-full bg-secondary/30 blur-3xl"
        animate={{ y: [0, 20, 0], scale: [1, 0.9, 1] }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-cartoon text-5xl md:text-6xl text-primary comic-shadow mb-4">
            Tokenomics
          </h2>
          <p className="text-muted-foreground text-xl">No surprises.</p>
        </motion.div>

        {/* Floating Cards - Not aligned! */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12">
          {tokenomics.map((item, index) => (
            <motion.div
              key={item.title}
              className="tilted-card w-full sm:w-64 text-center"
              style={{ 
                "--tilt": `${item.rotation}deg`,
                "--base-rotation": `${item.rotation}deg`
              } as React.CSSProperties}
              initial={{ opacity: 0, y: 80, rotate: item.rotation * 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: item.rotation }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -12, 
                rotate: item.rotation * 0.3,
                scale: 1.02
              }}
            >
              <motion.div
                animate={{ 
                  y: [0, -5, 0],
                }}
                transition={{ 
                  duration: 4 + index, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: index * 0.5
                }}
              >
                <h3 className="font-cartoon text-xl text-muted-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-2xl md:text-3xl font-bold text-foreground">
                  {item.value}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Contract Address Box - Fits text */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="font-cartoon text-xl text-muted-foreground mb-3 text-center">
            Contract Address
          </h3>
          <motion.div
            className="tilted-card inline-flex items-center gap-3 px-5 py-4"
            style={{ "--tilt": "-1deg" } as React.CSSProperties}
            whileHover={{ scale: 1.02, rotate: 0 }}
          >
            <p className="font-mono text-xs sm:text-sm md:text-base text-foreground">
              {CONTRACT_ADDRESS}
            </p>
            <motion.button
              onClick={handleCopy}
              className="flex-shrink-0 p-2 rounded-lg bg-primary/20 hover:bg-primary/30 border border-primary/30 transition-colors"
              whileTap={{ scale: 0.95 }}
              title="Copy to clipboard"
            >
              {copied ? (
                <Check className="w-4 h-4 text-primary" />
              ) : (
                <Copy className="w-4 h-4 text-foreground" />
              )}
            </motion.button>
          </motion.div>
          {copied && (
            <motion.p
              className="text-center text-primary text-sm mt-2 font-cartoon"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Copied!
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
