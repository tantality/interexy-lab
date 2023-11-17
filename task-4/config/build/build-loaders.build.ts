import { ModuleOptions } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types";

export function buildLoaders(options: BuildOptions): ModuleOptions["rules"] {
  const cssLoader = {
    test: /\.css$/i,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          esModule: false,
        },
      },
      "css-loader",
    ],
  };

  const tsLoader = { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ };

  return [cssLoader, tsLoader];
}
