const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const figlet = require('figlet');

figlet("BAMBOO", function(error, data) {
  if (error) {
    return;
  }
  console.log(data);
});


/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
