/**
 * Derives a human-readable label from an image filename, e.g.
 * "/assets/images/clients/indian-oil.jpg" -> "Indian Oil".
 * Falls back to a generic label when the filename carries no
 * identifiable name (e.g. "cl-3.png", "223484230716.jpg").
 */
export function labelFromImagePath(path, fallback = "Logo") {
  const fileName = (path ?? "").split("/").pop().replace(/\.[^.]+$/, "");

  if (!fileName || /^\d+$/.test(fileName) || /^cl-\d+$/i.test(fileName) || /^pecpl-logo/i.test(fileName)) {
    return fallback;
  }

  const cleaned = fileName.replace(/-logo(-\d+)?$/i, "").replace(/^logo-/i, "");
  const words = cleaned.split(/[-_]+/).filter(Boolean);

  if (words.length === 0) return fallback;

  return words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
