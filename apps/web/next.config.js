module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  output: {
    // Set the path where the standalone files will be generated
    path: `${__dirname}/dist`,
    // Set the public path of your app
    publicPath: '/',
  },
  env: {
    NEXT_PRIVATE_STANDALONE: process.env.NEXT_PRIVATE_STANDALONE,
  },
};
