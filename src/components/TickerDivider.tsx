const TickerDivider = () => {
  const text = "$MOODI • TOO CHILL TO CARE • ";
  const repeatedText = text.repeat(12);

  return (
    <div className="relative py-6 overflow-hidden bg-secondary border-y-2 border-border">
      <div className="ticker-scroll whitespace-nowrap">
        <span className="font-cartoon text-xl md:text-2xl text-primary/80 tracking-wider">
          {repeatedText}
        </span>
        <span className="font-cartoon text-xl md:text-2xl text-primary/80 tracking-wider">
          {repeatedText}
        </span>
      </div>
    </div>
  );
};

export default TickerDivider;
