import Backdrop from '../Backdrop/Backdrop';
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
      <Backdrop
        color="#22D3EE"
        colorTwo="#13F087"
        motion="pulse"
        ringCount={6}
        speed={1}
        lineThickness={10}
        glow={2.2}
        baseRadius={0.38}
        radiusStep={0.1}
        expansion={0.1}
        taper={1.5}
        spin={0.50}
        hoverScale={1.2}
        hoverIntensity={1}
        parallax={0.05}
        followMouse={false}
        clickBurst
        intro
        vignette={LIGHT ? 0 : 0.35}
        background={LIGHT ? '#070707' : '#121018'}
        theme={LIGHT ? 'light' : 'dark'}
      />

      <Navbar />

      

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
