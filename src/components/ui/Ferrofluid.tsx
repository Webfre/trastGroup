import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import { Mesh, Program, Renderer, Triangle } from "ogl";

export type FerrofluidProps = {
  className?: string;
  colors?: string[];
  dpr?: number;
  fluidity?: number;
  flowDirection?: "up" | "down" | "left" | "right";
  glow?: number;
  mixBlendMode?: CSSProperties["mixBlendMode"];
  mouseDampening?: number;
  mouseInteraction?: boolean;
  mouseRadius?: number;
  mouseStrength?: number;
  opacity?: number;
  paused?: boolean;
  rimWidth?: number;
  scale?: number;
  sharpness?: number;
  shimmer?: number;
  speed?: number;
  turbulence?: number;
};

type RGB = [number, number, number];

const MAX_COLORS = 8;

const hexToRGB = (hex: string): RGB => {
  const color = hex.replace("#", "").padEnd(6, "0");
  return [
    parseInt(color.slice(0, 2), 16) / 255,
    parseInt(color.slice(2, 4), 16) / 255,
    parseInt(color.slice(4, 6), 16) / 255,
  ];
};

const prepColors = (input?: string[]) => {
  const base = (input && input.length ? input : ["#e62c34", "#5d626d", "#ffffff"]).slice(
    0,
    MAX_COLORS,
  );
  const colors: RGB[] = [];

  for (let index = 0; index < MAX_COLORS; index += 1) {
    colors.push(hexToRGB(base[Math.min(index, base.length - 1)]));
  }

  return { colors, count: base.length };
};

const flowVec = (direction?: string): [number, number] => {
  switch (direction) {
    case "up":
      return [0, 1];
    case "left":
      return [-1, 0];
    case "right":
      return [1, 0];
    case "down":
    default:
      return [0, -1];
  }
};

const vertex = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragment = `
precision highp float;

uniform vec3 iResolution;
uniform vec2 iMouse;
uniform float iTime;

uniform vec3 uColor0;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform vec3 uColor4;
uniform vec3 uColor5;
uniform vec3 uColor6;
uniform vec3 uColor7;
uniform int uColorCount;

uniform vec2 uFlow;
uniform float uSpeed;
uniform float uScale;
uniform float uTurbulence;
uniform float uFluidity;
uniform float uRimWidth;
uniform float uSharpness;
uniform float uShimmer;
uniform float uGlow;
uniform float uOpacity;
uniform float uMouseEnabled;
uniform float uMouseStrength;
uniform float uMouseRadius;

varying vec2 vUv;

#define PI 3.14159265

vec3 palette(float h) {
  int count = uColorCount;
  if (count < 1) count = 1;
  int idx = int(floor(clamp(h, 0.0, 0.999999) * float(count)));

  if (idx <= 0) return uColor0;
  if (idx == 1) return uColor1;
  if (idx == 2) return uColor2;
  if (idx == 3) return uColor3;
  if (idx == 4) return uColor4;
  if (idx == 5) return uColor5;
  if (idx == 6) return uColor6;
  return uColor7;
}

float hash(vec3 p3) {
  p3 = fract(p3 * 0.1031);
  p3 += dot(p3, p3.zyx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

float smin(float a, float b, float k) {
  float r = exp2(-a / k) + exp2(-b / k);
  return -k * log2(r);
}

float sinlerp(float a, float b, float w) {
  return mix(a, b, (sin(w * PI - PI / 2.0) + 1.0) / 2.0);
}

float vn(vec2 p, float s, float seed) {
  vec2 cellp = floor(p / s);
  vec2 relp = mod(p, s);
  float g1 = hash(vec3(cellp, seed));
  float g2 = hash(vec3(cellp.x + 1.0, cellp.y, seed));
  float g3 = hash(vec3(cellp.x + 1.0, cellp.y + 1.0, seed));
  float g4 = hash(vec3(cellp.x, cellp.y + 1.0, seed));
  float bx = sinlerp(g1, g2, relp.x / s);
  float tx = sinlerp(g4, g3, relp.x / s);
  return sinlerp(bx, tx, relp.y / s);
}

float dbn(vec2 p, float s, float seed) {
  float offset = s / 2.0;
  float n0 = vn(p, s, seed);
  float n1 = vn(p + vec2(offset, offset), s, seed + 0.1);
  float n2 = vn(p + vec2(-offset, offset), s, seed + 0.2);
  float n3 = vn(p + vec2(offset, -offset), s, seed + 0.3);
  float n4 = vn(p + vec2(-offset, -offset), s, seed + 0.4);
  return (2.0 * n0 + 1.5 * n1 + 1.25 * n2 + 1.125 * n3 + n4) / 7.0;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  float ref = 700.0 / max(uScale, 0.05);
  vec2 p = fragCoord / iResolution.y * ref;

  float spd = 200.0 * uSpeed;
  float t = iTime;

  vec2 dir = uFlow;
  vec2 perp = vec2(-dir.y, dir.x);

  float distort1 = vn(p + perp * (t * spd), 60.0, 10.0) * 50.0 * uTurbulence;
  float distort2 = vn(p - perp * (t * spd), 120.0, 15.0) * 100.0 * uTurbulence;

  float peaks = dbn(p + distort1 + dir * (t * spd * 0.5), 40.0, 1.0);
  float peaks2 = dbn(p + distort2 - dir * (t * spd * 0.5), 40.0, 0.0);
  float mapeaks = smin(peaks, peaks2, max(uFluidity, 0.001));

  float mouseGlow = 0.0;
  if (uMouseEnabled > 0.5) {
    vec2 mp = iMouse / iResolution.y * ref;
    float md = length(p - mp) / ref;
    float radius = max(uMouseRadius, 0.02);
    mouseGlow = exp(-md * md / (radius * radius)) * uMouseStrength;
  }

  float band = (uRimWidth - abs((mapeaks - 0.4) * 2.0)) * 5.0;
  float light = clamp(band - vn(p + dir * (t * spd * 0.5), 60.0, 12.0) * uShimmer, 0.0, 1.0);
  light = pow(light, uSharpness) * uGlow;
  light *= clamp(1.0 - mouseGlow, 0.0, 1.0);

  float h = clamp(0.5 + (peaks - peaks2) * 0.8, 0.0, 1.0);
  vec3 col = palette(h);
  vec3 outc = col * light;
  float alpha = clamp(max(outc.r, max(outc.g, outc.b)), 0.0, 1.0);

  fragColor = vec4(outc, alpha * uOpacity);
}

void main() {
  vec4 color;
  mainImage(color, vUv * iResolution.xy);
  gl_FragColor = color;
}
`;

export function Ferrofluid({
  className = "",
  colors = ["#e62c34", "#5d626d", "#ffffff"],
  dpr,
  fluidity = 0.09,
  flowDirection = "right",
  glow = 0.9,
  mixBlendMode,
  mouseDampening = 0.35,
  mouseInteraction = true,
  mouseRadius = 0.24,
  mouseStrength = 0.25,
  opacity = 0.34,
  paused = false,
  rimWidth = 0.16,
  scale = 1.25,
  sharpness = 3.4,
  shimmer = 0.55,
  speed = 0.18,
  turbulence = 0.65,
}: FerrofluidProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const programRef = useRef<Program | null>(null);
  const meshRef = useRef<Mesh | null>(null);
  const geometryRef = useRef<Triangle | null>(null);
  const rendererRef = useRef<Renderer | null>(null);
  const mouseTargetRef = useRef<[number, number]>([0, 0]);
  const lastTimeRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;

    if (!container || !window.WebGLRenderingContext) {
      return;
    }

    const renderer = new Renderer({
      alpha: true,
      antialias: true,
      dpr: dpr ?? Math.min(window.devicePixelRatio || 1, 1.5),
    });
    rendererRef.current = renderer;

    const gl = renderer.gl;
    const canvas = gl.canvas as HTMLCanvasElement;
    gl.clearColor(0, 0, 0, 0);
    canvas.style.display = "block";
    canvas.style.height = "100%";
    canvas.style.width = "100%";
    container.appendChild(canvas);

    const { colors: preparedColors, count } = prepColors(colors);
    const resolutionUniform = {
      value: [gl.drawingBufferWidth, gl.drawingBufferHeight, 1] as [number, number, number],
    };
    const mouseUniform = { value: [0, 0] as [number, number] };

    const uniforms = {
      iMouse: mouseUniform,
      iResolution: resolutionUniform,
      iTime: { value: 0 },
      uColor0: { value: preparedColors[0] },
      uColor1: { value: preparedColors[1] },
      uColor2: { value: preparedColors[2] },
      uColor3: { value: preparedColors[3] },
      uColor4: { value: preparedColors[4] },
      uColor5: { value: preparedColors[5] },
      uColor6: { value: preparedColors[6] },
      uColor7: { value: preparedColors[7] },
      uColorCount: { value: count },
      uFlow: { value: flowVec(flowDirection) },
      uFluidity: { value: fluidity },
      uGlow: { value: glow },
      uMouseEnabled: { value: mouseInteraction ? 1 : 0 },
      uMouseRadius: { value: mouseRadius },
      uMouseStrength: { value: mouseStrength },
      uOpacity: { value: opacity },
      uRimWidth: { value: rimWidth },
      uScale: { value: scale },
      uSharpness: { value: sharpness },
      uShimmer: { value: shimmer },
      uSpeed: { value: speed },
      uTurbulence: { value: turbulence },
    };

    const program = new Program(gl, { vertex, fragment, uniforms });
    const geometry = new Triangle(gl);
    const mesh = new Mesh(gl, { geometry, program });

    programRef.current = program;
    geometryRef.current = geometry;
    meshRef.current = mesh;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      renderer.setSize(rect.width, rect.height);
      resolutionUniform.value = [gl.drawingBufferWidth, gl.drawingBufferHeight, 1];
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const scaleFactor = renderer.dpr || 1;
      const x = (event.clientX - rect.left) * scaleFactor;
      const y = (rect.height - (event.clientY - rect.top)) * scaleFactor;
      mouseTargetRef.current = [x, y];

      if (mouseDampening <= 0) {
        mouseUniform.value = [x, y];
      }
    };

    if (mouseInteraction) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
    }

    const render = (time: number) => {
      rafRef.current = requestAnimationFrame(render);
      uniforms.iTime.value = time * 0.001;

      if (mouseDampening > 0) {
        if (!lastTimeRef.current) {
          lastTimeRef.current = time;
        }

        const delta = (time - lastTimeRef.current) / 1000;
        lastTimeRef.current = time;
        const dampening = Math.max(0.0001, mouseDampening);
        const factor = Math.min(1, 1 - Math.exp(-delta / dampening));
        const target = mouseTargetRef.current;
        const current = mouseUniform.value;
        current[0] += (target[0] - current[0]) * factor;
        current[1] += (target[1] - current[1]) * factor;
      } else {
        lastTimeRef.current = time;
      }

      if (!paused && programRef.current && meshRef.current) {
        try {
          renderer.render({ scene: meshRef.current });
        } catch (error) {
          console.error(error);
        }
      }
    };

    rafRef.current = requestAnimationFrame(render);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      if (mouseInteraction) {
        window.removeEventListener("pointermove", onPointerMove);
      }

      resizeObserver.disconnect();

      if (canvas.parentElement === container) {
        container.removeChild(canvas);
      }

      const callIfFn = (object: unknown, key: string) => {
        const fn = object && (object as Record<string, unknown>)[key];

        if (typeof fn === "function") {
          (fn as () => void).call(object);
        }
      };

      callIfFn(programRef.current, "remove");
      callIfFn(geometryRef.current, "remove");
      callIfFn(meshRef.current, "remove");
      callIfFn(rendererRef.current, "destroy");

      programRef.current = null;
      geometryRef.current = null;
      meshRef.current = null;
      rendererRef.current = null;
    };
  }, [
    colors,
    dpr,
    fluidity,
    flowDirection,
    glow,
    mouseDampening,
    mouseInteraction,
    mouseRadius,
    mouseStrength,
    opacity,
    paused,
    rimWidth,
    scale,
    sharpness,
    shimmer,
    speed,
    turbulence,
  ]);

  return (
    <div
      className={`ferrofluid-container ${className}`.trim()}
      ref={containerRef}
      style={mixBlendMode ? { mixBlendMode } : undefined}
    />
  );
}
