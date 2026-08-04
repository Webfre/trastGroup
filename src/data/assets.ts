export const publicAsset = (path: string) => {
  const normalizedPath = path.replace(/^\/+/g, "");
  return `${import.meta.env.BASE_URL}${normalizedPath}`;
};
