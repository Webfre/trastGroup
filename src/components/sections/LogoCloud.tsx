export type LogoCloudItem =
  | string
  | {
      name: string;
      logo: string;
    };

type LogoCloudProps = {
  items: LogoCloudItem[];
  marquee?: boolean;
};

function isLogoItem(item: LogoCloudItem): item is { name: string; logo: string } {
  return typeof item !== "string";
}

function renderLogoItem(item: LogoCloudItem, key: string) {
  if (isLogoItem(item)) {
    return (
      <div className="logo-tile logo-tile--image" key={key}>
        <img src={item.logo} alt={item.name} loading="lazy" />
      </div>
    );
  }

  return (
    <div className="logo-tile" key={key}>
      {item}
    </div>
  );
}

export function LogoCloud({ items, marquee = false }: LogoCloudProps) {
  if (marquee) {
    return (
      <div className="logo-cloud logo-cloud--marquee">
        <div className="logo-cloud__track">
          <div className="logo-cloud__group">
            {items.map((item, index) => renderLogoItem(item, `main-${index}`))}
          </div>
          <div className="logo-cloud__group" aria-hidden="true">
            {items.map((item, index) => renderLogoItem(item, `copy-${index}`))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="logo-cloud">
      {items.map((item, index) => renderLogoItem(item, `grid-${index}`))}
    </div>
  );
}
