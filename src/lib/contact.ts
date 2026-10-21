/* Shared contact details — one source of truth for the whole site. */

export const CONTACT_EMAIL = "minanicalm@gmail.com";

/* Company WhatsApp: local display format + international format for wa.me
   links (Kenya +254, leading 0 dropped). */
export const WHATSAPP_DISPLAY = "0791 192 830";
export const WHATSAPP_INTERNATIONAL = "254791192830";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hi Openroad, I'm interested in discussing a software project. I'd like to tell you about what I'm building and explore how we can work together.";

export function whatsappUrl(message: string = WHATSAPP_DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_INTERNATIONAL}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_URL = whatsappUrl();
