const figlet = require('figlet');
const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");
const { withNativeWind } = require("nativewind/metro");
const { babelTransformerPath } = require('@soften/metro');


figlet("BAMBOO", (error, data) => {
  if (error) {
    console.dir(error);
    return;
  }
  console.log(data);
});

const config = mergeConfig(getDefaultConfig(__dirname), {
  transformer: {
    babelTransformerPath,
  }
});

module.exports = withNativeWind(config, {
  input: './src/styles/tailwind.css'
});
