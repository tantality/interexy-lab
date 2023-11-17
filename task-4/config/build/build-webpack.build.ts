import webpack from "webpack";
import { buildDevServer } from "./build-dev-server.build";
import { buildLoaders } from "./build-loaders.build";
import { buildPlugins } from "./build-plugins.build";
import { buildResolvers } from "./build-resolvers.build";
import { BUILD_MODE } from "./constants";
import { BuildOptions } from "./types";

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
