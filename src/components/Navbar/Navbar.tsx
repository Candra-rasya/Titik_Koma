import { useState } from 'react';
import './Navbar.css';

const NAV_ITEMS = ['TES', 'TES', 'TES', 'TES'];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <a href="#" className="navbar__logo" aria-label="Titik Koma">
        ;
      </a>

      <nav
        id="navbar-menu"
        className={`navbar__menu${open ? ' navbar__menu--open' : ''}`}
        aria-label="Navigasi utama"
      >
        {NAV_ITEMS.map((label, i) => (
          <a key={i} href="#" className="navbar__link" onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>

      <button
        type="button"
        className="navbar__toggle"
        aria-label={open ? 'Tutup menu' : 'Buka menu'}
        aria-expanded={open}
        aria-controls="navbar-menu"
        onClick={() => setOpen(v => !v)}
      >
        <span />
        <span />
      </button>
    </header>
  );
}
