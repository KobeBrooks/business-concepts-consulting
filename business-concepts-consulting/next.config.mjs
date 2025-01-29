/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/business-concepts-consulting",
    output: "export",  // <=== enables static exports
    images: {
        unoptimized: true,
    },
    assetPrefix: "/business-concepts-consulting/",
    reactStrictMode: true,
};

export default nextConfig;