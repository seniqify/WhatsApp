export default function WhatsAppWidget() {
  return (
    <a
      href="https://wa.me/918625060631?text=Hi%20Seniqify!"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-[70] flex items-center gap-3"
    >
      <span className="hidden rounded-full border border-line bg-surface/90 px-4 py-2 text-sm font-medium text-text shadow-[var(--shadow-card)] backdrop-blur transition-all duration-300 group-hover:-translate-x-1 sm:block">
        Chat with us
      </span>
      <span className="relative grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-wa to-wa-deep text-white shadow-[0_8px_30px_-6px_rgba(37,211,102,0.7)] transition-transform duration-300 group-hover:scale-105">
        <span className="absolute inset-0 animate-ping rounded-full bg-wa opacity-25" />
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="relative">
          <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2zm0 2a8 8 0 1 1-4.1 14.9l-.3-.2-2.5.7.7-2.4-.2-.3A8 8 0 0 1 12 4zm-2.7 4c-.2 0-.5.1-.7.4-.3.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.7 2.8 4.3 3.8 2.1.8 2.6.7 3 .6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.6-.3l-1.4-.7c-.2-.1-.4-.1-.5.1l-.6.8c-.1.2-.3.2-.5.1-.7-.3-1.4-.6-2.1-1.5-.2-.3.2-.3.5-.9.1-.1 0-.3 0-.4l-.7-1.6c-.2-.4-.3-.4-.5-.4h-.4z" />
        </svg>
      </span>
    </a>
  );
}
