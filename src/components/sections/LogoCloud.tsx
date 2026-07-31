type LogoCloudProps = {
  items: string[];
};

export function LogoCloud({ items }: LogoCloudProps) {
  return (
    <div className="logo-cloud">
      {items.map((item) => (
        <div className="logo-tile" key={item}>
          {item}
        </div>
      ))}
    </div>
  );
}
