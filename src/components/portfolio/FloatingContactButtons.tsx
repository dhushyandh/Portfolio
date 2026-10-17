import { memo } from 'react';

export const FloatingContactButtons = memo(function FloatingContactButtons() {
  return (
    <>
      {/* Floating LinkedIn Button (Bottom Left) */}
      <a
        href="https://linkedin.com/in/dhushyandh"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Connect with Dhushyandh on LinkedIn"
        title="Connect on LinkedIn"
        className="floating-contact-btn floating-linkedin floating-btn-blink-linkedin group"
      >
        {/* Pulsing Radar Waves */}
        <span className="floating-ripple floating-ripple-linkedin" aria-hidden="true" />
        <span className="floating-ripple floating-ripple-linkedin floating-ripple-delayed" aria-hidden="true" />

        {/* LinkedIn "in" SVG Icon */}
        <svg
          className="relative z-10 h-6 w-6 fill-white transition-transform duration-300 group-hover:scale-110"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.773 1.778-1.729V1.73C24 .774 23.205 0 22.225 0z" />
        </svg>

        {/* Hover Tooltip */}
        <span className="pointer-events-none absolute left-full ml-3 hidden whitespace-nowrap rounded-md bg-neutral-900/90 px-2.5 py-1 text-xs font-medium text-white shadow-md backdrop-blur-sm transition-opacity sm:group-hover:inline-block">
          Connect on LinkedIn
        </span>
      </a>

      {/* Floating WhatsApp Button (Bottom Right) */}
      <a
        href="https://wa.me/919342763553"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Dhushyandh on WhatsApp"
        title="Chat on WhatsApp"
        className="floating-contact-btn floating-whatsapp floating-btn-blink-whatsapp group"
      >
        {/* Pulsing Radar Waves */}
        <span className="floating-ripple floating-ripple-whatsapp" aria-hidden="true" />
        <span className="floating-ripple floating-ripple-whatsapp floating-ripple-delayed" aria-hidden="true" />

        {/* WhatsApp Phone-Bubble SVG Icon */}
        <svg
          className="relative z-10 h-7 w-7 fill-white transition-transform duration-300 group-hover:scale-110"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24M8.53 7.33c-.16 0-.35.06-.53.27-.18.21-.7 1.04-.7 1.94s.72 1.77.82 1.9c.1.13 1.41 2.15 3.42 3.01.48.21.85.33 1.14.42.48.15.92.13 1.26.08.39-.06 1.19-.49 1.36-.96.17-.47.17-.87.12-.96-.05-.09-.18-.14-.37-.24-.19-.1-1.12-.55-1.29-.62-.17-.07-.3-.1-.43.1-.13.2-.5 1.04-.62 1.23-.11.19-.23.21-.42.12-.19-.1-.8-.3-1.52-.94-.56-.5-.94-1.12-1.05-1.31-.11-.19-.01-.3.08-.39.09-.08.19-.23.29-.35.1-.11.13-.19.2-.32.07-.13.03-.24-.02-.34-.05-.1-.43-1.04-.59-1.42-.16-.38-.32-.33-.44-.33" />
        </svg>

        {/* Hover Tooltip */}
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-md bg-neutral-900/90 px-2.5 py-1 text-xs font-medium text-white shadow-md backdrop-blur-sm transition-opacity sm:group-hover:inline-block">
          Chat on WhatsApp
        </span>
      </a>
    </>
  );
});
