import path from "path";
import webpack from "webpack";
import { buildWebpack } from "config-build/index";
import { DEFAULT_BUILD_OPTIONS } from "config-build/constants";
import { BuildOptions, BuildPaths, EnvVariables } from "config-build/types";

export default (env: EnvVariables) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.ts"),
    output: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "src", "index.html"),
  };

  const options: BuildOptions = {
    mode: env.mode ?? DEFAULT_BUILD_OPTIONS.MODE,
    port: env.port ?? DEFAULT_BUILD_OPTIONS.PORT,
    paths,
  };

  const config: webpack.Configuration = buildWebpack(options);

  return config;
};
