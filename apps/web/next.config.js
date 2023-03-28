module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  output: "standalone",
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ]
  },
  env: {
    NEXT_PRIVATE_STANDALONE: process.env.NEXT_PRIVATE_STANDALONE,
  },
};