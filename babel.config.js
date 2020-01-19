module.exports = (api) => {
  api.cache.forever();

  return {
    presets: ['next/babel'],
    plugins: [
      [
        'emotion',
        {
          autoLabel: process.env.NODE_ENV !== 'production',
          cssPropOptimization: true,
          sourceMap: false,
        },
      ],
    ],
  };
};
