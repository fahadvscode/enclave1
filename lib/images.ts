/**
 * Image URLs — verified HTTP 200. Community & project only (no home interiors).
 * Query: ?auto=format&fit=crop&w=WIDTH&q=80
 */

const u = (id: string, w: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMAGES = {
  /** Sundial community rendering — homepage & floor plans banner */
  hero:
    "https://images.preconfactory.com/storage/v1/object/public/rental-documents/1780268468620_Screenshot-2026-05-13-at-16.59.20.png",

  /** Community & area (not residential interiors) */
  trails: u("photo-1441974231531-c6227db76b6e", 1920),
  recreation: u("photo-1574629810360-7efbbe195018", 1200),
  cycling: u("photo-1558618666-fcd25c85cd64", 1200),
  nature: u("photo-1506905925346-21bda4d32df4", 1200),
  transit: u("photo-1469854523086-cc02fe5d8800", 1200),
  shopping: u("photo-1541339907198-e08756dedf3f", 1200),
} as const;

export type CommunityImageKey = keyof Omit<typeof IMAGES, "hero">;
