import MagicRings from '../MagicRings/MagicRings';
import type { MagicRingsProps } from '../MagicRings/MagicRings';
import './Backdrop.css';

/**
 * Wrapper background. Semua props MagicRings bisa diedit dari tempat
 * <Backdrop /> dipakai (mis. di Hero.tsx atau page), tanpa menyentuh MagicRings.jsx.
 * Nilai di bawah = default; yang kamu isi di pemakaian akan menimpa default.
 */
export interface BackdropProps extends MagicRingsProps {
  /** warna latar di belakang rings */
  background?: string;
  /** gelapkan tepi layar (0 = mati, 1 = pekat) */
  vignette?: number;
}

export default function Backdrop({
  background = '#121018',
  vignette = 0,
  className = '',
  style,
  // --- default MagicRings (ubah sesukamu) ---
  color = '#22D3EE',
  colorTwo = '#0E7490',
  motion = 'pulse',
  ringCount = 6,
  speed = 1,
  lineThickness = 2,
  glow = 1.2,
  baseRadius = 0.38,
  radiusStep = 0.1,
  expansion = 0.1,
  taper = 1.5,
  rotation = 0,
  spin = 0.1,
  tilt = 0,
  dispersion = 0,
  grain = 0,
  opacity = 1,
  followMouse = false,
  mouseInfluence = 0.2,
  hoverScale = 1.2,
  hoverIntensity = 1,
  parallax = 0.05,
  clickBurst = true,
  intro = true,
  theme = 'dark',
  maxDevicePixelRatio = 2
}: BackdropProps) {
  return (
    <div
      className={`backdrop${className ? ` ${className}` : ''}`}
      style={{ background, ...style }}
      aria-hidden="true"
    >
      <MagicRings
        color={color}
        colorTwo={colorTwo}
        motion={motion}
        ringCount={ringCount}
        speed={speed}
        lineThickness={lineThickness}
        glow={glow}
        baseRadius={baseRadius}
        radiusStep={radiusStep}
        expansion={expansion}
        taper={taper}
        rotation={rotation}
        spin={spin}
        tilt={tilt}
        dispersion={dispersion}
        grain={grain}
        opacity={opacity}
        followMouse={followMouse}
        mouseInfluence={mouseInfluence}
        hoverScale={hoverScale}
        hoverIntensity={hoverIntensity}
        parallax={parallax}
        clickBurst={clickBurst}
        intro={intro}
        theme={theme}
        maxDevicePixelRatio={maxDevicePixelRatio}
      />
      {vignette > 0 && (
        <div
          className="backdrop__vignette"
          style={{
            background: `radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,${Math.min(
              1,
              vignette
            )}) 100%)`
          }}
        />
      )}
    </div>
  );
}
