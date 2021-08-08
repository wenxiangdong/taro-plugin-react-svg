type PluginOptions = {
  exclude?: string[];
};
export default (ctx, pluginOpts: PluginOptions = {}) => {
  ctx.modifyWebpackChain(({ chain }) => {
    chain.module
      .rule("taro-svg")
      .test(/\.(svg)?$/)
      .exclude.merge(pluginOpts.exclude ?? [])
      .end()
      .use("babel")
      .loader("babel-loader")
      .options({
        presets: [["babel-preset-taro", { framework: "react" }]],
      })
      .end()
      .use("taro-svg")
      .loader(require.resolve("./svg-loader.js"))
      .end();
    chain.module
      .rule("image")
      .test(/\.(png|jpe?g|gif|bpm|webp)(\?.*)?$/)
      .end();
  });
};
