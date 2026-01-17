import { motion } from "framer-motion";
import SocialStickers from "./SocialStickers";

const Footer = () => {
  return (
    <footer className="relative py-16 px-4 border-t border-border overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Logo */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-cartoon text-4xl text-primary">$MOODI</span>
        </motion.div>

        {/* Social Links */}
        <div className="flex justify-center mb-12">
          <SocialStickers />
        </div>

        {/* Disclaimer */}
        <motion.p
          className="text-center text-muted-foreground text-sm max-w-lg mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Moodi is a tribute project inspired by the artistic style of Matt Furie. 
          This project is not affiliated with, endorsed by, or sponsored by Matt Furie.
        </motion.p>

        {/* Copyright */}
        <motion.p
          className="text-center text-muted-foreground/50 text-xs mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          © {new Date().getFullYear()} MOODI. Too chill to copyright.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
