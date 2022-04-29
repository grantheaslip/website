// TODO: Make page URL dynamic with environment variable (does Vercel expose the
// domain?)
const getFullyQualifiedUrl = ({
  rootRelativeUrl,
}: {
  rootRelativeUrl: string;
}) => `https://grantheaslip.ca${rootRelativeUrl}`;

export default getFullyQualifiedUrl;
