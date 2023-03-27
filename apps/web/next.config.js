module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  output: {
    // Set the path where the standalone files will be generated
    path: `${__dirname}/.next/standalone`,
    // Set the public path of your app
    publicPath: '/',
  },
  async headers() {
    return [
      {
        // Set the X-Frame-Options header to prevent clickjacking
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
