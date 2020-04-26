export function getFormattedTitle(title?: string) {
  if (typeof title === "string") {
    // This is the same as `${title}&thinsp;&mdash;&thinsp;Grant Heaslip`
    // eslint-disable-next-line no-irregular-whitespace
    return `${title} — Grant Heaslip`;
  }

  return "Grant Heaslip";
}
