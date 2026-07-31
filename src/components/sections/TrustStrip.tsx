type TrustStripProps = {
  items: string[];
};

export function TrustStrip({ items }: TrustStripProps) {
  return (
    <div className="trust-strip">
      {items.map((item) => (
        <div className="trust-strip__item" key={item}>
          {item}
        </div>
      ))}
    </div>
  );
}
