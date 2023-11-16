import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { Configuration as DevServerConfiguration } from "webpack-dev-server";

interface EnvVariables {
  mode: MODE;
  port: number;
}

enum MODE {
  DEVELOPMENT = "development",
  PRODUCTION = "production",
}

const DEFAULT_VALUE = {
  PORT: 3000,
  MODE: MODE.DEVELOPMENT,
};

export default (env: EnvVariables) => {
  const isDevMode = env.mode === MODE.DEVELOPMENT;
  const devServer: DevServerConfiguration = { port: env.port ?? DEFAULT_VALUE.PORT, open: true };

  const config: webpack.Configuration = {
    mode: env.mode ?? MODE.DEVELOPMENT,
    entry: path.resolve(__dirname, "src", "index.ts"),
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "[name].[contenthash].js",
      clean: true,
    },
    plugins: [new HtmlWebpackPlugin({ template: path.resolve(__dirname, "src", "index.html") })],
    devtool: isDevMode && "inline-source-map",
    devServer: isDevMode ? devServer : undefined,
  };

  return config;
};
