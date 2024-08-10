export function convertToSerializableObject(leanDocument) {
  if (!leanDocument) {
    return;
  }

  for (const key of Object.keys(leanDocument)) {
    if (
      leanDocument[key] &&
      leanDocument[key].toJSON &&
      leanDocument[key].toString
    ) {
      leanDocument[key] = leanDocument[key].toString();
    }
  }
  return leanDocument;
}
