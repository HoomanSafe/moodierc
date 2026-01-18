const TickerDivider = () => {
  const items = Array.from({ length: 24 });

  return (
    <div className="relative py-6 overflow-hidden bg-secondary border-y-2 border-border">
      <div className="ticker-scroll whitespace-nowrap flex">
        {items.map((_, i) => (
          <span
            key={i}
            className="font-cartoon text-xl md:text-2xl text-primary/80 tracking-wider mr-8"
          >
            $MOODI
          </span>
        ))}
      </div>
    </div>
  );
};

export default TickerDivider;
