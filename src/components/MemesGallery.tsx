import { motion } from "framer-motion";

import meme1 from "@/assets/memes/meme-1.jpg";
import meme2 from "@/assets/memes/meme-2.jpg";
import meme3 from "@/assets/memes/meme-3.jpg";
import meme4 from "@/assets/memes/meme-4.jpg";
import meme5 from "@/assets/memes/meme-5.jpg";
import meme6 from "@/assets/memes/meme-6.jpg";
import meme7 from "@/assets/memes/meme-7.jpg";
import meme8 from "@/assets/memes/meme-8.jpg";
import meme9 from "@/assets/memes/meme-9.jpg";
import meme10 from "@/assets/memes/meme-10.jpg";

const memes = [
  { src: meme1, rotation: -3, size: "col-span-1 row-span-1" },
  { src: meme2, rotation: 2, size: "col-span-1 row-span-2 md:row-span-1" },
  { src: meme3, rotation: -1, size: "col-span-1 row-span-1" },
  { src: meme4, rotation: 4, size: "col-span-1 row-span-1" },
  { src: meme5, rotation: -2, size: "col-span-1 row-span-1" },
  { src: meme6, rotation: 3, size: "col-span-1 row-span-1" },
  { src: meme7, rotation: -4, size: "col-span-1 row-span-1" },
  { src: meme8, rotation: 1, size: "col-span-1 row-span-1" },
  { src: meme9, rotation: -3, size: "col-span-1 row-span-1" },
  { src: meme10, rotation: 2, size: "col-span-1 row-span-1" },
];

const MemesGallery = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden bg-[#050814]">

      {/* 🌊 NEON CYBER WATER BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="cyber-ripple r1" />
        <div className="cyber-ripple r2" />
        <div className="cyber-ripple r3" />
        <div className="cyber-ripple r4" />
        <div className="cyber-ripple r5" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 container mx-auto max-w-6xl">

        <motion.h2
          className="font-cartoon text-5xl md:text-6xl text-primary comic-shadow text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Memes
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {memes.map((meme, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden rounded-2xl shadow-2xl ${meme.size}`}
              style={{ transform: `rotate(${meme.rotation}deg)` }}
              initial={{ opacity: 0, y: 40, rotate: meme.rotation * 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: meme.rotation }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{
                scale: 1.08,
                rotate: 0,
                zIndex: 20,
              }}
            >
              <img
                src={meme.src}
                alt={`MOODI meme ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🎨 INTERNAL CSS */}
      <style>{`
        .cyber-ripple {
          position: absolute;
          width: 80vmax;
          height: 80vmax;
          border-radius: 50%;
          background:
            repeating-radial-gradient(
              circle,
              rgba(0,255,255,0.6) 0px,
              rgba(0,255,255,0.6) 2px,
              rgba(0,180,255,0.25) 6px,
              rgba(0,0,0,0) 14px
            );
          filter: blur(0.5px);
          mix-blend-mode: screen;
          animation: cyberExpand linear infinite;
        }

        /* RANDOM POSITIONS */
        .r1 { top: -10%; left: 15%; animation-duration: 18s; }
        .r2 { top: 40%; left: -20%; animation-duration: 26s; opacity: 0.7; }
        .r3 { top: 60%; left: 50%; animation-duration: 32s; opacity: 0.5; }
        .r4 { top: 10%; left: 70%; animation-duration: 22s; opacity: 0.6; }
        .r5 { top: 75%; left: 25%; animation-duration: 36s; opacity: 0.4; }

        @keyframes cyberExpand {
          0% {
            transform: scale(0.2);
            opacity: 0.9;
          }
          70% {
            opacity: 0.5;
          }
          100% {
            transform: scale(1.6);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default MemesGallery;
