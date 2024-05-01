/** @type {import("next").NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cover.imgslib.link",
                port: "",
                pathname: "/**"
            }
        ]
    },
    typescript: {
        ignoreBuildErrors: true
    }
}

export default nextConfig
