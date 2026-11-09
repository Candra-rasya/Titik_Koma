import type { CSSProperties, FC } from 'react';

export interface MagicRingsProps {
  color?: string;
  colorTwo?: string;
  ringCount?: number;
  motion?: 'pulse' | 'ripple' | 'breathe';
  speed?: number;
  lineThickness?: number;
  glow?: number;
  baseRadius?: number;
  radiusStep?: number;
  expansion?: number;
  taper?: number;
  rotation?: number;
  spin?: number;
  tilt?: number;
  dispersion?: number;
  grain?: number;
  opacity?: number;
  followMouse?: boolean;
  mouseInfluence?: number;
  hoverScale?: number;
  hoverIntensity?: number;
  parallax?: number;
  clickBurst?: boolean;
  intro?: boolean;
  theme?: 'dark' | 'light';
  maxDevicePixelRatio?: number;
  className?: string;
  style?: CSSProperties;
}

declare const MagicRings: FC<MagicRingsProps>;
export default MagicRings;
