module.exports = ctx => {
  // if (ctx.env === 'development') {
  //   return {};
  // }
  return {
    plugins: [
      require('autoprefixer')({
        browsers: ['Chrome >= 50', 'Firefox >= 45', 'IE >= 9', 'Android >= 4'],
      }),
    ],
  };
};
