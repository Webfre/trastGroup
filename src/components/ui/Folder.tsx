import { useState } from "react";
import type { CSSProperties, MouseEvent, ReactNode } from "react";

type FolderProps = {
  autoOpen?: boolean;
  className?: string;
  color?: string;
  items?: ReactNode[];
  label?: string;
  size?: number;
};

const darkenColor = (hex: string, percent: number): string => {
  let color = hex.startsWith("#") ? hex.slice(1) : hex;

  if (color.length === 3) {
    color = color
      .split("")
      .map((character) => character + character)
      .join("");
  }

  const value = parseInt(color.slice(0, 6), 16);
  const red = Math.max(0, Math.min(255, Math.floor(((value >> 16) & 0xff) * (1 - percent))));
  const green = Math.max(0, Math.min(255, Math.floor(((value >> 8) & 0xff) * (1 - percent))));
  const blue = Math.max(0, Math.min(255, Math.floor((value & 0xff) * (1 - percent))));

  return `#${((1 << 24) + (red << 16) + (green << 8) + blue)
    .toString(16)
    .slice(1)
    .toUpperCase()}`;
};

export function Folder({
  autoOpen = false,
  className = "",
  color = "#e62c34",
  items = [],
  label = "Открыть папку",
  size = 1,
}: FolderProps) {
  const maxItems = 3;
  const papers = items.slice(0, maxItems);

  while (papers.length < maxItems) {
    papers.push(null);
  }

  const [isOpen, setIsOpen] = useState(false);
  const [paperOffsets, setPaperOffsets] = useState(
    Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })),
  );
  const isDisplayedOpen = isOpen || autoOpen;

  const handleClick = () => {
    setIsOpen((current) => !current);

    if (isDisplayedOpen) {
      setPaperOffsets(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })));
    }
  };

  const handlePaperMouseMove = (event: MouseEvent<HTMLDivElement>, index: number) => {
    if (!isDisplayedOpen) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = (event.clientX - centerX) * 0.15;
    const offsetY = (event.clientY - centerY) * 0.15;

    setPaperOffsets((current) => {
      const next = [...current];
      next[index] = { x: offsetX, y: offsetY };
      return next;
    });
  };

  const handlePaperMouseLeave = (index: number) => {
    setPaperOffsets((current) => {
      const next = [...current];
      next[index] = { x: 0, y: 0 };
      return next;
    });
  };

  const folderStyle = {
    "--folder-back-color": darkenColor(color, 0.1),
    "--folder-color": color,
    "--paper-1": "#edf0f3",
    "--paper-2": "#f7f7f5",
    "--paper-3": "#ffffff",
    transform: `scale(${size})`,
  } as CSSProperties;

  return (
    <div className={`folder-shell ${className}`.trim()} style={folderStyle}>
      <div
        aria-expanded={isDisplayedOpen}
        aria-label={label}
        className={`folder ${isDisplayedOpen ? "is-open" : ""}`.trim()}
        onClick={handleClick}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            handleClick();
          }
        }}
        role="button"
        tabIndex={0}
      >
        <div className="folder__back">
          {papers.map((item, index) => (
            <div
              className={`folder__paper folder__paper--${index + 1}`}
              key={index}
              onMouseLeave={() => handlePaperMouseLeave(index)}
              onMouseMove={(event) => handlePaperMouseMove(event, index)}
              style={
                isDisplayedOpen
                  ? ({
                      "--magnet-x": `${paperOffsets[index]?.x || 0}px`,
                      "--magnet-y": `${paperOffsets[index]?.y || 0}px`,
                    } as CSSProperties)
                  : undefined
              }
            >
              {item}
            </div>
          ))}
          <div className="folder__front" />
          <div className="folder__front folder__front--right" />
        </div>
      </div>
    </div>
  );
}
