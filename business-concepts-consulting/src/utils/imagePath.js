export const getImagePath = (src) => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/business-concepts-consulting';
  console.log('basePath', basePath);
  console.log('src', src);
  console.log(`${basePath}${src}`);
  return `${basePath}${src}`;
}; 