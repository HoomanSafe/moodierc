import { motion } from "framer-motion";

const socials = [
  {
    name: "Twitter",
    href: "https://x.com/moodi_rh",
    rotation: -5,
    icon: "/icons/x.png",
  },
  /*{
    name: "Telegram",
    href: "https://t.me/",
    rotation: 3,
    icon: "/icons/telegram.png",
  }*/,
  {
    name: "DexTools",
    href: "https://www.dextools.io/app/en/ether",
    rotation: -2,
    icon: "/icons/dextools.png",
  },
  {
    name: "DexScreener",
    href: "https://dexscreener.com/",
    rotation: 4,
    icon: "/icons/dexscreener.png",
  },
];

const SocialStickers = () => {
  return (
    <>
      {/* Local styles ONLY for this component */}
      <style>{`
        .sticker {
          width: 52px;
          height: 52px;
          border-radius: 9999px;
          background: hsl(var(--card, 0 0% 100%));
          box-shadow:
            0 8px 16px rgba(0,0,0,0.15),
            inset 0 2px 0 rgba(255,255,255,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          user-select: none;
          transition: box-shadow 0.25s ease;
        }

        .sticker:hover {
          box-shadow:
            0 12px 24px rgba(0,0,0,0.25),
            0 0 0 3px rgba(120,120,255,0.25);
        }

        .sticker-img {
          width: 26px;
          height: 26px;
          object-fit: contain;
          filter: drop-shadow(0 3px 4px rgba(0,0,0,0.35));
          pointer-events: none;
        }

        @media (max-width: 640px) {
          .sticker {
            width: 46px;
            height: 46px;
          }
          .sticker-img {
            width: 22px;
            height: 22px;
          }
        }
      `}</style>

      <div className="flex gap-5 flex-wrap justify-center">
        {socials.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            title={social.name}
            className="sticker"
            style={{ transform: `rotate(${social.rotation}deg)` }}
            initial={{ opacity: 0, scale: 0, rotate: social.rotation * 2 }}
            animate={{ opacity: 1, scale: 1, rotate: social.rotation }}
            transition={{
              delay: 0.4 + index * 0.1,
              type: "spring",
              stiffness: 220,
              damping: 15,
            }}
            whileHover={{ scale: 1.18, rotate: -social.rotation }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={social.icon}
              alt={social.name}
              className="sticker-img"
              draggable={false}
            />
          </motion.a>
        ))}
      </div>
    </>
  );
};

export default SocialStickers;
