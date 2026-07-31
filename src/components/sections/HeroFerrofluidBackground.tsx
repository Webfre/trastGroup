import { Ferrofluid } from "../ui/Ferrofluid";

const heroFerrofluidColors = ["#e62c34", "#bf2028", "#8f96a3", "#ffffff"];

export function HeroFerrofluidBackground() {
  return (
    <div className="page-hero__background" aria-hidden="true">
      <Ferrofluid
        colors={heroFerrofluidColors}
        flowDirection="right"
        fluidity={0.08}
        glow={1.35}
        mouseDampening={0.35}
        mouseRadius={0.28}
        mouseStrength={0.35}
        opacity={0.64}
        rimWidth={0.18}
        scale={1.08}
        sharpness={3.2}
        shimmer={0.42}
        speed={0.2}
        turbulence={0.72}
      />
    </div>
  );
}
