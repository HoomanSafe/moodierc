import { motion } from "framer-motion";

const tweets = [
  {
    id: 1,
    rotation: -3,
    username: "@cryptofrog42",
    text: "bought $MOODI and now I just... sit. Is this investing?",
    avatar: "🐸",
  },
  {
    id: 2,
    rotation: 4,
    username: "@unbothered_anon",
    text: "why does this frog understand me better than my therapist",
    avatar: "🌿",
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
            <motion.div
              key={tweet.id}
              className="tilted-card max-w-sm w-full"
              style={{ "--tilt": `${tweet.rotation}deg` } as React.CSSProperties}
              initial={{ opacity: 0, y: 50, rotate: tweet.rotation * 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: tweet.rotation }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8, rotate: tweet.rotation * 0.3 }}
            >
              {/* Paper texture feel */}
              <div className="absolute inset-0 bg-gradient-to-br from-card to-secondary/30 rounded-2xl" />
              
              <div className="relative">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-2xl">
                    {tweet.avatar}
                  </div>
                  <span className="font-body font-semibold text-foreground/80">
                    {tweet.username}
                  </span>
                </div>
                
                {/* Tweet content */}
                <p className="text-foreground text-lg leading-relaxed">
                  {tweet.text}
                </p>
                
                {/* Subtle pin effect */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary/60 shadow-lg" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeenOnXSection;
