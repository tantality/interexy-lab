import path from "path";
import webpack from "webpack";

interface EnvVariables {
  mode: BUILD_MODE;
}

enum BUILD_MODE {
  DEVELOPMENT = "development",
  PRODUCTION = "production",
}

export default (env: EnvVariables) => {
  const cwd = process.cwd();

  const config: webpack.Configuration = {
    mode: env.mode ?? BUILD_MODE.DEVELOPMENT,
    entry: path.resolve(__dirname, "src", "index.ts"),
    module: {
      rules: [{ test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ }],
    },
    resolve: {
      alias: {
        src: path.resolve(cwd, "src/"),
        api: path.resolve(cwd, "src/api/"),
      },
      extensions: [".ts", ".js"],
    },
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "[name].[contenthash].js",
      clean: true,
    },
  };

  return config;
};
