const { withStoreConfig } = require("./store-config")
const store = require("./store.config.json")

module.exports = withStoreConfig({
  features: store.features,
  reactStrictMode: true,
  images: {
    domains: [
    "medusa-public-images.s3.eu-west-1.amazonaws.com", 
    "localhost",
    "medusa-server-ninjas.s3.amazonaws.com",
    "https://cms.01ninjas.com",
    "https://demo.01ninjas.com",
    "https://medusa-server-ninjas.s3.us-east-1.amazonaws.com",
    "medusa-server-ninjas.s3.us-east-1.amazonaws.com",

  ],
  },
})

// module.exports = {
//   projectConfig: {
//     // ...other configurations
//     store_cors: process.env.STORE_CORS.split(","),
//   },
// };




// module.exports = {
//   typescript: {
//     // !! WARN !!
//     // Dangerously allow production builds to successfully complete even if
//     // your project has type errors.
//     // !! WARN !!
//     ignoreBuildErrors: true,
//   },
// };

console.log("next.config.js", JSON.stringify(module.exports, null, 2))
