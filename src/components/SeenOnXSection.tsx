import { motion } from "framer-motion";

const tweets = [
  {
    id: 1,
    rotation: -3,
    username: "@moodieth",
    text: "bought $MOODI and now I just... sit. Is this investing?",
    avatar: "/logo.png",
    url: "https://x.com/",
  },
  {
    id: 2,
    rotation: 4,
    username: "@moodieth",
    text: "why does this frog understand me better than my therapist",
    avatar: "/logo.png",
    url: "https://x.com/",
  },
];

const SeenOnXSection = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-cartoon text-5xl md:text-6xl text-primary comic-shadow mb-6">
            Seen on X
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto leading-relaxed">
            MOODI doesn't tweet much.<br />
            But people keep posting anyway.<br />
            Sometimes memes.<br />
            Sometimes confusion.<br />
            Sometimes silence.
          </p>
        </motion.div>

        {/* Tweet Cards */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {tweets.map((tweet, index) => (
            <motion.a
              key={tweet.id}
              href={tweet.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative tilted-card max-w-sm w-full cursor-pointer"
              style={{ "--tilt": `${tweet.rotation}deg` } as React.CSSProperties}
              initial={{ opacity: 0, y: 50, rotate: tweet.rotation * 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: tweet.rotation }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8, rotate: tweet.rotation * 0.3 }}
            >
              {/* Paper background */}
              <div className="absolute inset-0 bg-gradient-to-br from-card to-secondary/30 rounded-2xl" />

              <div className="relative p-6">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  {/* Avatar Image */}
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-primary/20 bg-primary/10 shadow-sm">
                    <motion.img
                      src={tweet.avatar}
                      alt={tweet.username}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.08, rotate: 2 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    />
                  </div>

                  <span className="font-body font-semibold text-foreground/80">
                    {tweet.username}
                  </span>
                </div>

                {/* Tweet content */}
                <p className="text-foreground text-lg leading-relaxed">
                  {tweet.text}
                </p>

                {/* Pin */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary/60 shadow-lg" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeenOnXSection;
