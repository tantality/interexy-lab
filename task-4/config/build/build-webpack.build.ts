import webpack from "webpack";
import { BUILD_MODE } from "config-build/constants";
import { BuildOptions } from "config-build/types";
import { buildDevServer, buildLoaders, buildPlugins, buildResolvers } from "config-build/index";

export function buildWebpack(options: BuildOptions): webpack.Configuration {
  const { mode, paths } = options;
  const isDevMode = mode === BUILD_MODE.DEVELOPMENT;

  const config: webpack.Configuration = {
    mode: options.mode ?? BUILD_MODE.DEVELOPMENT,
    entry: paths.entry,
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    output: {
      path: paths.output,
      filename: "[name].[contenthash].js",
      clean: true,
    },
    plugins: buildPlugins(options),
    devtool: isDevMode && "inline-source-map",
    devServer: isDevMode ? buildDevServer(options) : undefined,
  };

  return config;
}
