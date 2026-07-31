import { ExternalLink, MessageCircle, Send } from "lucide-react";

type SocialIconProps = {
  label: string;
  size?: number;
};

export function SocialIcon({ label, size = 20 }: SocialIconProps) {
  switch (label) {
    case "Telegram":
      return <Send aria-hidden="true" size={size} />;
    case "WhatsApp":
      return <MessageCircle aria-hidden="true" size={size} />;
    case "Instagram":
      return (
        <svg
          aria-hidden="true"
          fill="none"
          height={size}
          viewBox="0 0 24 24"
          width={size}
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            height="16"
            rx="4"
            stroke="currentColor"
            strokeWidth="2"
            width="16"
            x="4"
            y="4"
          />
          <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="2" />
          <circle cx="16.8" cy="7.2" fill="currentColor" r="1" />
        </svg>
      );
    case "VK":
      return <span aria-hidden="true">vk</span>;
    default:
      return <ExternalLink aria-hidden="true" size={size} />;
  }
}
