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
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <motion.h2
          className="font-cartoon text-5xl md:text-6xl text-primary comic-shadow text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Memes
        </motion.h2>

        {/* Messy Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {memes.map((meme, index) => (
            <motion.div
              key={index}
              className={`meme-card ${meme.size}`}
              style={{ "--rotation": `${meme.rotation}deg` } as React.CSSProperties}
              initial={{ opacity: 0, y: 50, rotate: meme.rotation * 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: meme.rotation }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ 
                scale: 1.08, 
                rotate: 0,
                zIndex: 10,
                transition: { duration: 0.2 }
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
    </section>
  );
};

export default MemesGallery;
