module.exports = (api) => {
  api.cache.forever();

  return {
    presets: ['next/babel', 'linaria/babel'],
  };
};
