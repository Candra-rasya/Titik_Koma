import Backdrop from '../Backdrop/Backdrop';
import Navbar from '../Navbar/Navbar';
import './Hero.css';

// true = background putih, false = background gelap
const LIGHT = true;

export default function Hero() {
  return (
    <section className={`hero${LIGHT ? ' hero--light' : ''}`}>
      {/* Edit background di sini, sama seperti Backdrop Ghost Wave */}
      <Backdrop
        color="#22D3EE"
        colorTwo="#0E7490"
        motion="pulse"
        ringCount={6}
        speed={1}
        lineThickness={2}
        glow={1.2}
        baseRadius={0.38}
        radiusStep={0.1}
        expansion={0.1}
        taper={1.5}
        spin={0.1}
        hoverScale={1.2}
        hoverIntensity={1}
        parallax={0.05}
        followMouse={false}
        clickBurst
        intro
        vignette={LIGHT ? 0 : 0.35}
        background={LIGHT ? '#ffffff' : '#121018'}
        theme={LIGHT ? 'light' : 'dark'}
      />

      <Navbar />

      <div className="hero__content">
        <p className="hero__eyebrow">DIGITAL STUDIO · BALI</p>

        <h1 className="hero__title">TITIK KOMA ;</h1>

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
