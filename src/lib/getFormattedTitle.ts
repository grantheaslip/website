const getFormattedTitle = (title?: string) => {
  if (typeof title === "string") {
    return `${title} – Grant Heaslip`;
  }

  return "Grant Heaslip";
};

export default getFormattedTitle;
