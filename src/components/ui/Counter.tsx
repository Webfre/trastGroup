import { motion, useSpring, useTransform } from "motion/react";
import type { MotionValue } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";

type PlaceValue = number | ".";

type NumberProps = {
  height: number;
  mv: MotionValue<number>;
  number: number;
};

function Number({ height, mv, number }: NumberProps) {
  const y = useTransform(mv, (latest) => {
    const placeValue = latest % 10;
    const offset = (10 + number - placeValue) % 10;
    const memo = offset > 5 ? offset * height - 10 * height : offset * height;
    return memo;
  });

  return (
    <motion.span className="counter-number" style={{ y }}>
      {number}
    </motion.span>
  );
}

const normalizeNearInteger = (value: number): number => {
  const nearest = Math.round(value);
  const tolerance = 1e-9 * Math.max(1, Math.abs(value));
  return Math.abs(value - nearest) < tolerance ? nearest : value;
};

const getValueRoundedToPlace = (value: number, place: number): number => {
  return Math.floor(normalizeNearInteger(value / place));
};

type DigitProps = {
  digitStyle?: CSSProperties;
  height: number;
  place: number;
  value: number;
};

function Digit({ digitStyle, height, place, value }: DigitProps) {
  const valueRoundedToPlace = getValueRoundedToPlace(value, place);
  const animatedValue = useSpring(valueRoundedToPlace);

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  return (
    <span className="counter-digit" style={{ height, ...digitStyle }}>
      {Array.from({ length: 10 }, (_, index) => (
        <Number height={height} key={index} mv={animatedValue} number={index} />
      ))}
    </span>
  );
}

type DecimalPointProps = {
  digitStyle?: CSSProperties;
  height: number;
};

function DecimalPoint({ digitStyle, height }: DecimalPointProps) {
  return (
    <span className="counter-digit" style={{ height, width: "fit-content", ...digitStyle }}>
      .
    </span>
  );
}

export type CounterProps = {
  borderRadius?: number;
  bottomGradientStyle?: CSSProperties;
  containerStyle?: CSSProperties;
  counterStyle?: CSSProperties;
  digitStyle?: CSSProperties;
  fontSize?: number;
  fontWeight?: CSSProperties["fontWeight"];
  gap?: number;
  gradientFrom?: string;
  gradientHeight?: number;
  gradientTo?: string;
  horizontalPadding?: number;
  padding?: number;
  places?: PlaceValue[];
  textColor?: string;
  topGradientStyle?: CSSProperties;
  value: number;
};

const getPlaces = (value: number): PlaceValue[] => {
  return [...value.toString()].map((character, index, characters) => {
    if (character === ".") {
      return ".";
    }

    const dotIndex = characters.indexOf(".");
    const isInteger = dotIndex === -1;
    const exponent = isInteger
      ? characters.length - index - 1
      : index < dotIndex
        ? dotIndex - index - 1
        : -(index - dotIndex);

    return 10 ** exponent;
  });
};

export function Counter({
  borderRadius = 4,
  bottomGradientStyle,
  containerStyle,
  counterStyle,
  digitStyle,
  fontSize = 100,
  fontWeight = "inherit",
  gap = 8,
  gradientFrom = "transparent",
  gradientHeight = 16,
  gradientTo = "transparent",
  horizontalPadding = 0,
  padding = 0,
  places,
  textColor = "inherit",
  topGradientStyle,
  value,
}: CounterProps) {
  const [animatedValue, setAnimatedValue] = useState(0);
  const height = fontSize + padding;
  const resolvedPlaces = useMemo(() => places ?? getPlaces(value), [places, value]);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => setAnimatedValue(value));
    return () => cancelAnimationFrame(frameId);
  }, [value]);

  const defaultCounterStyle: CSSProperties = {
    borderRadius,
    color: textColor,
    direction: "ltr",
    fontSize,
    fontWeight,
    gap,
    paddingLeft: horizontalPadding,
    paddingRight: horizontalPadding,
  };

  const defaultTopGradientStyle: CSSProperties = {
    background: `linear-gradient(to bottom, ${gradientFrom}, ${gradientTo})`,
    height: gradientHeight,
  };

  const defaultBottomGradientStyle: CSSProperties = {
    background: `linear-gradient(to top, ${gradientFrom}, ${gradientTo})`,
    height: gradientHeight,
  };

  return (
    <span className="counter-container" style={containerStyle}>
      <span className="counter-counter" style={{ ...defaultCounterStyle, ...counterStyle }}>
        {resolvedPlaces.map((place, index) => (
          place === "." ? (
            <DecimalPoint digitStyle={digitStyle} height={height} key={`${place}-${index}`} />
          ) : (
            <Digit
              digitStyle={digitStyle}
              height={height}
              key={`${place}-${index}`}
              place={place}
              value={animatedValue}
            />
          )
        ))}
      </span>
      <span className="gradient-container">
        <span className="top-gradient" style={topGradientStyle ?? defaultTopGradientStyle} />
        <span className="bottom-gradient" style={bottomGradientStyle ?? defaultBottomGradientStyle} />
      </span>
    </span>
  );
}
