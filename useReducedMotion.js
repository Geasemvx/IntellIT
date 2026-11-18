@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html { scroll-behavior: smooth; }
  body {
    @apply bg-ink text-fog font-sans antialiased;
    line-height: 1.6;
  }
  :focus-visible {
    outline: 2px solid #3fbf7f;
    outline-offset: 3px;
    border-radius: 6px;
  }
  ::selection { background: #093622; color: #e7e7e7; }
  select option { background: #0a0f0c; color: #e7e7e7; }
}

@layer components {
  /* Animated gradient border from the original template */
  .tag-box {
    position: relative;
    display: inline-flex;
    border-radius: 9999px;
    padding: 2px;
    background: linear-gradient(to right, #656565, #093622, #3fbf7f, #093622, #757575, #656565);
    background-size: 200%;
    animation: tag-gradient 3s linear infinite;
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.18);
  }
  .tag-box > span {
    display: block;
    border-radius: 9999px;
    background: #000;
    padding: 0.45rem 1.25rem;
    font-size: 0.875rem;
    letter-spacing: 0.04em;
  }

  .btn-primary {
    @apply inline-flex items-center justify-center rounded-full bg-steel px-7 py-3 font-semibold text-ink transition-colors duration-200 hover:bg-fog;
  }
  .btn-outline {
    @apply inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3 font-semibold text-fog transition-colors duration-200 hover:bg-white/10;
  }

  .field {
    @apply w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-fog placeholder:text-ash/70 transition-colors focus:border-leaf focus:outline-none;
  }
}

@keyframes tag-gradient { to { background-position: 200%; } }

/* One orchestrated load sequence for the hero */
.rise { opacity: 0; transform: translateY(18px); animation: rise 0.9s cubic-bezier(.2,.7,.2,1) forwards; }
.rise-1 { animation-delay: .1s; }
.rise-2 { animation-delay: .25s; }
.rise-3 { animation-delay: .4s; }
.rise-4 { animation-delay: .55s; }
@keyframes rise { to { opacity: 1; transform: none; } }

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  .rise { opacity: 1; transform: none; animation: none; }
  .tag-box { animation: none; }
}
