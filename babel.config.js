module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '@components': './src/components',
          '@navigations': './src/navigations',
          '@services': './src/services',
          '@store': './src/store',
          '@styles': './src/styles',
          '@scenes': './src/scenes',
        },
      },
    ],
  ],
};
