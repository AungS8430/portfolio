/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        FORMSPREE: process.env.FORMSPREE,
    }
}

module.exports = nextConfig
