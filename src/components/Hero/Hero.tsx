import GradientWaves from '../GradientWaves/GradientWaves';
import Navbar from '../Navbar/Navbar';
import './Hero.css';

// true = background putih, false = background gelap
const LIGHT = true;

function TitleText({ className}: { className: string }) {
  return (
    <span className={`hero__title-layer ${className}`} aria-hidden="true">
      TITIK KOMA <span className="hero__semi">;</span>
    </span>
  );
}
export default function Hero() {
  return (
    <section className={`hero${LIGHT ? ' hero--light' : ''}`}>
      {/* Edit background di sini, sama seperti Backdrop Ghost Wave */}
      <div className="hero__background">
  <GradientWaves
    horizonColor="#1e3a8a"
    waveColor="#38bdf8"
    crestColor="#e0f2fe"
    backgroundColor="#050B1F"
    speed={0.27}
    amplitude={1.4}
    relief={1}
    lightAngle={87}
    mouseInteraction
    swellOnClick
    waveScale={0.98}
    waveRatio={0.79}
    swell={27}
    turbulence={27}
    zoom={0.92}
    height={4}
    fogDepth={14}
    brightness={1.05}
    grain={0.11}
    quality="high"
    mouseStrength={0.8}
  />
</div>

      <Navbar />

      <svg width="0" height="0" style={{position: 'absolute'}} aria-hidden="true" focusable="false">
        <defs>
          <filter
            id="glass-title-inner"
            x="-5%"
            y="-5%"
            width="110%"
            height="110%"
            colorInterpolationFilters="sRGB"
          >
            <feComponentTransfer in="SourceAlpha" result="inverted">
              <feFuncA type="table" tableValues="1 0" />
            </feComponentTransfer>

            <feOffset in="inverted" dx="3" dy="4" result="shifted" />
            <feGaussianBlur in="shifted" stdDeviation="18" result="blurred" />
            <feFlood floodColor="#00161A" floodOpacity="0.9" result="shadowColor" />
            <feComposite in="shadowColor" in2="blurred" operator="in" result="shadow" />
            <feComposite in="shadow" in2="SourceAlpha" operator="in" result="innerShadow" />

            <feMerge>
              <feMergeNode in="SourceGraphic" />
              <feMergeNode in="innerShadow" />
            </feMerge>

          </filter>
          </defs>
      </svg>

      <div className="hero__content">
        <p className="hero__eyebrow">DIGITAL STUDIO · BALI</p>

        <h1 className="hero__title" aria-label="TITIK KOMA ;">
          <TitleText className="hero__title-layer--fill" />
          <TitleText className="hero__title-layer--rim" />
        </h1>

        <h2 className="hero__subtitle">
          Solusi Digital Terintegrasi untuk Skala Bisnis &amp; Kebutuhan Akademik.
        </h2>

        <p className="hero__description">
          Mulai dari Landing Page berkonversi tinggi untuk meroketkan omzet UMKM, hingga
          Asistensi Proyek IT profesional untuk menunjang studi Anda. Efisien, Cepat, dan
          Tepat Sasaran.
        </p>

        <div className="hero__actions">
          <a href="#" className="btn btn--green">
            CTA
          </a>
          <a href="#" className="btn btn--cyan">
            CTA
          </a>
        </div>
      </div>
    </section>
  );
}
