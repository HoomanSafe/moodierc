import { motion } from "framer-motion";

const socials = [
  {
    name: "Twitter",
    href: "#",
    rotation: -5,
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Telegram",
    href: "#",
    rotation: 3,
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
  {
    name: "DexTools",
    href: "#",
    rotation: -2,
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "DexScreener",
    href: "#",
    rotation: 4,
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <circle cx="12" cy="12" r="10" stroke="currentColor" fill="none" strokeWidth="2" />
        <path d="M12 6v6l4 2" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

const SocialStickers = () => {
  return (
    <div className="flex gap-4 flex-wrap justify-center">
      {socials.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="sticker-icon text-foreground hover:text-primary"
          style={{ "--rotation": `${social.rotation}deg` } as React.CSSProperties}
          initial={{ opacity: 0, scale: 0, rotate: social.rotation * 2 }}
          animate={{ opacity: 1, scale: 1, rotate: social.rotation }}
          transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.15, rotate: -social.rotation }}
          title={social.name}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialStickers;
