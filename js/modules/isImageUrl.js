// Checks if a URL points to a supported image type
export function isImageUrl(url) {
  return url.endsWith('.jpg') || url.endsWith('.jpeg') || url.endsWith('.png') || url.endsWith('.gif');
}
