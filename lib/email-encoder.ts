/**
 * Email encoding utility to protect email addresses from spam bots
 * Encodes email addresses as HTML entities making them invisible to scrapers
 */

export function encodeEmail(email: string): string {
  return Array.from(email).reduce(
    (acc, char) => acc + '&#' + char.charCodeAt(0) + ';',
    ''
  );
}

export function createMailtoLink(email: string): string {
  return `mailto:${email}`;
}

/**
 * Returns an object with encoded email and mailto link
 * Usage: const { href, encoded } = getEncodedEmail('test@example.com')
 */
export function getEncodedEmail(email: string) {
  return {
    href: createMailtoLink(email),
    encoded: encodeEmail(email),
  };
}
