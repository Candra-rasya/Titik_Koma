import type { CSSProperties, FC } from 'react';

export interface GradientWavesProps {
  horizonColor?: string;
  waveColor?: string;
  crestColor?: string;
  backgroundColor?: string;
  lightMode?: boolean;
  speed?: number;
  amplitude?: number;
  waveScale?: number;
  waveRatio?: number;
  swell?: number;
  turbulence?: number;
  tilt?: number;
  zoom?: number;
  height?: number;
  fogDepth?: number;
  relief?: number;
  lightAngle?: number;
  sheen?: number;
  brightness?: number;
  opacity?: number;
  grain?: number | boolean;
  quality?: 'low' | 'medium' | 'high';
  intro?: boolean;
  mouseInteraction?: boolean;
  parallaxStrength?: number;
  mouseStrength?: number;
  swellOnClick?: boolean;
  paused?: boolean;
  dpr?: number;
  className?: string;
  style?: CSSProperties;
}

declare const GradientWaves: FC<GradientWavesProps>;
export default GradientWaves;