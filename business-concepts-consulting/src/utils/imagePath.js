export const getImagePath = (src) => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/business-concepts-consulting';
  return `${basePath}${src}`;
}; 