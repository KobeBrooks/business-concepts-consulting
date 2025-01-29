export const getImagePath = (src) => {
//   const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/business-concepts-consulting';
  const basePath = '';
  console.log('basePath', basePath);
  console.log('src', src);
  return `${basePath}${src}`;
}; 