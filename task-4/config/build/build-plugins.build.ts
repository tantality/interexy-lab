import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { Configuration } from "webpack";
import { BuildOptions } from "config-build/types";

export function buildPlugins({ paths }: BuildOptions): Configuration["plugins"] {
  const plugins = [new HtmlWebpackPlugin({ template: paths.html }), new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" })];

  return plugins;
}
