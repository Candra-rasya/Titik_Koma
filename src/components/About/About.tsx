import { lazy, Suspense, useState } from 'react';
import './About.css';

// Three.js cukup berat, jadi baru dimuat saat section About dirender
const LaptopScene = lazy(() => import('./LaptopScene'));

export default function About() {
  const [touched, setTouched] = useState(false);

  return (
    <section id="about" className="about">
      {/* Laptop 3D: bisa diputar dengan drag / swipe */}
      <div className="about__stage">
        <Suspense fallback={null}>
          <LaptopScene screenSrc="/models/screen.jpg" onInteract={() => setTouched(true)} />
        </Suspense>
        <p className={`about__hint${touched ? ' about__hint--hidden' : ''}`} aria-hidden="true">
          Seret untuk memutar
        </p>
      </div>

      <div className="about__block about__block--left">
        <h2 className="about__title">lorem ipsum</h2>
        <p className="about__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare, turpis eget euismod
          ornare, purus nisi viverra nisl, at eleifend justo lacus et urna. Donec vitae sagittis
          metus. Ut hendrerit erat eros, tincidunt suscipit justo lobortis sed. Fusce at velit
          hendrerit, tempus massa eu, auctor justo. Sed nec tortor suscipit, rutrum velit non,
          tristique lacus. Morbi quis dui sem. Aliquam scelerisque est enim. Suspendisse feugiat
          suscipit massa blandit finibus. Maecenas posuere varius justo. Nullam eu sollicitudin
          lacus. Proin nibh mi, suscipit ut pharetra sed, euismod at eros.
        </p>
        <a href="#" className="about__btn" aria-label="Tombol aksi" />
      </div>

      <div className="about__block about__block--right">
        <h2 className="about__title">lorem ipsum</h2>
        <p className="about__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare, turpis eget euismod
          ornare, purus nisi viverra nisl, at eleifend justo lacus et urna. Donec vitae sagittis
          metus. Ut hendrerit erat eros, tincidunt suscipit justo lobortis sed. Fusce at velit
          hendrerit, tempus massa eu, auctor justo. Sed nec tortor suscipit, rutrum velit non,
          tristique lacus. Morbi quis dui sem. Aliquam scelerisque est enim. Suspendisse feugiat
          suscipit massa blandit finibus. Maecenas posuere varius justo. Nullam eu sollicitudin
          lacus. Proin nibh mi, suscipit ut pharetra sed, euismod at eros.
        </p>
        <a href="#" className="about__btn" aria-label="Tombol aksi" />
      </div>
    </section>
  );
}
