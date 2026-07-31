import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "../../router/routerContext";

const radius = 19;
const circumference = 2 * Math.PI * radius;

export function ScrollToTop() {
  const { path } = useRouter();
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const frameId = window.requestAnimationFrame(() => {
      setProgress(0);
      setIsVisible(false);
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [path]);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress =
        scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
      const normalizedProgress = Math.min(Math.max(nextProgress, 0), 1);

      setProgress(normalizedProgress);
      setIsVisible(window.scrollY > 120 && normalizedProgress > 0.02);
    };

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

  const strokeOffset = circumference * (1 - progress);

  return (
    <button
      aria-label="Наверх"
      className={`scroll-progress-button ${isVisible ? "is-visible" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      type="button"
    >
      <svg
        aria-hidden="true"
        className="scroll-progress-button__ring"
        viewBox="0 0 48 48"
      >
        <circle
          className="scroll-progress-button__track"
          cx="24"
          cy="24"
          r={radius}
        />
        <circle
          className="scroll-progress-button__progress"
          cx="24"
          cy="24"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={strokeOffset}
        />
      </svg>
      <ArrowUp aria-hidden="true" size={20} strokeWidth={2.4} />
    </button>
  );
}
