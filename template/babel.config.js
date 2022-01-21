module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          assets: './src/assets',
          features: './src/features',
          shared: './src/shared',
          utils: './utils',
        },
      },
    ],
  ],
};