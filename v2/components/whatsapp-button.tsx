import type { Locale } from "@/i18n/config";

export function WhatsAppButton({ locale }: { locale: Locale }) {
  return (
    <a
      href="https://wa.me/201023545556"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={locale === "ar" ? "تواصل معنا عبر واتساب" : "Chat with us on WhatsApp"}
      className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-colors hover:bg-[#1eae54] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1eae54] sm:bottom-6 sm:right-6"
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="size-8">
        <path d="M12.04 2C6.56 2 2.1 6.45 2.1 11.93c0 1.75.46 3.45 1.32 4.95L2 22l5.26-1.38a9.9 9.9 0 0 0 4.77 1.21h.01c5.48 0 9.94-4.46 9.94-9.94A9.9 9.9 0 0 0 12.04 2Zm0 18.15a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 1 1 6.98 3.86Zm4.51-6.16c-.25-.12-1.47-.72-1.7-.8-.23-.09-.4-.13-.56.12-.16.25-.64.8-.78.97-.15.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.24-.74-.65-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.57.13.16 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.12.16 1.54.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28Z" />
      </svg>
    </a>
  );
}
