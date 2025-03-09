const name = "Grant Heaslip";

const getFormattedTitle = (title?: string) =>
  typeof title === "string" ? `${title} – ${name}` : name;

export default getFormattedTitle;
