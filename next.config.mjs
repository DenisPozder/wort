/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        loader: "custom",
        loaderFile: "./loader.js"
    },

    async rewrites() {
        return [
            {
                source: "/",
                destination: "https://www.wort.rs"
            },
            {
                source: "/our-projects",
                destination: "https://www.wort.rs/our-projects"
            },
        ]
    }
};

export default nextConfig;
