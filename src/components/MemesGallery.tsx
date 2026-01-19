import { motion } from "framer-motion";

import meme1 from "@/assets/memes/meme-01.jpg";
import meme2 from "@/assets/memes/meme-02.jpg";
import meme3 from "@/assets/memes/about.jpg";
import meme4 from "@/assets/moodistate.jpg";
import meme5 from "@/assets/memes/meme-04.jpg";
import meme6 from "@/assets/memes/meme-05.jpg";
import meme7 from "@/assets/memes/meme-07.jpg";
import meme8 from "@/assets/memes/meme-08.jpg";
import meme9 from "@/assets/memes/meme-09.jpg";
import meme10 from "@/assets/memes/meme-11.jpg";

/* 🧩 ASYMMETRIC / MAGAZINE-STYLE LAYOUT */
const memes = [
  { src: meme1, rotation: -4, size: "col-span-2 row-span-2" }, // BIG HERO
  { src: meme2, rotation: 3, size: "col-span-1 row-span-2" },  // TALL
  { src: meme3, rotation: -2, size: "col-span-1 row-span-1" },
  { src: meme4, rotation: 4, size: "col-span-1 row-span-1" },  // WAS WIDE → NOW SQUARE
  { src: meme5, rotation: -3, size: "col-span-1 row-span-1" },
  { src: meme6, rotation: 2, size: "col-span-1 row-span-2" },  // TALL
  { src: meme7, rotation: -5, size: "col-span-2 row-span-2" }, // BIG
  { src: meme8, rotation: 1, size: "col-span-1 row-span-1" },  // BASE REFERENCE
  { src: meme9, rotation: -2, size: "col-span-1 row-span-1" }, // WAS WIDE → NOW SQUARE
  { src: meme10, rotation: 3, size: "col-span-1 row-span-1" },
];


const MemesGallery = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden bg-[#060b08]">
      
      {/* 🌱 NEON RIPPLE BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none z-0 ripple-field">
        {Array.from({ length: 24 }).map((_, i) => (
          <span key={i} className="mini-ripple" />
        ))}
      </div>

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

        {/* 🧱 ASYMMETRIC GRID */}
        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            auto-rows-[180px]
            md:auto-rows-[220px]
            gap-4
            md:gap-6
          "
        >
          {memes.map((meme, index) => (
            <motion.div
              key={index}
              className={`
                relative overflow-hidden rounded-2xl
                shadow-xl
                hover:shadow-[0_0_40px_rgba(0,255,150,0.35)]
                transition-shadow
                ${meme.size}
              `}
              style={{ transform: `rotate(${meme.rotation}deg)` }}
              initial={{ opacity: 0, y: 40, rotate: meme.rotation * 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: meme.rotation }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{
                scale: 1.06,
                rotate: 0,
                y: -6,
                zIndex: 30,
              }}
            >
              <img
                src={meme.src}
                alt={`Meme ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🎨 NEON RIPPLE CSS */}
      <style>{`
        .ripple-field {
          position: absolute;
          inset: 0;
        }

        .mini-ripple {
          position: absolute;
          width: 140px;
          height: 140px;
          border-radius: 50%;
          background:
            repeating-radial-gradient(
              circle,
              rgba(120,255,150,0.55) 0px,
              rgba(120,255,150,0.55) 1.5px,
              rgba(120,255,150,0.25) 4px,
              rgba(0,0,0,0) 10px
            );
          animation: miniRippleExpand linear infinite;
          mix-blend-mode: screen;
          opacity: 0.6;
        }

        /* RANDOM POSITIONS */
        .mini-ripple:nth-child(1)  { top: 10%; left: 15%; animation-duration: 14s; }
        .mini-ripple:nth-child(2)  { top: 30%; left: 70%; animation-duration: 18s; }
        .mini-ripple:nth-child(3)  { top: 55%; left: 40%; animation-duration: 22s; }
        .mini-ripple:nth-child(4)  { top: 75%; left: 20%; animation-duration: 16s; }
        .mini-ripple:nth-child(5)  { top: 85%; left: 65%; animation-duration: 20s; }
        .mini-ripple:nth-child(6)  { top: 45%; left: 85%; animation-duration: 24s; }
        .mini-ripple:nth-child(7)  { top: 5%;  left: 50%; animation-duration: 19s; }
        .mini-ripple:nth-child(8)  { top: 65%; left: 5%;  animation-duration: 26s; }
        .mini-ripple:nth-child(9)  { top: 20%; left: 35%; animation-duration: 17s; }
        .mini-ripple:nth-child(10) { top: 50%; left: 60%; animation-duration: 21s; }
        .mini-ripple:nth-child(11) { top: 90%; left: 40%; animation-duration: 28s; }
        .mini-ripple:nth-child(12) { top: 15%; left: 85%; animation-duration: 23s; }

        @keyframes miniRippleExpand {
          0% {
            transform: scale(0.2);
            opacity: 0.8;
          }
          70% {
            opacity: 0.5;
          }
          100% {
            transform: scale(1.4);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default MemesGallery;
