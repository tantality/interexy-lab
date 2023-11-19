import path from "path";
import { Configuration } from "webpack";
import { BuildOptions } from "config-build/types";

export function buildResolvers(options: BuildOptions): Configuration["resolve"] {
  const cwd = process.cwd();

  return {
    alias: {
      "src": path.resolve(cwd, "src/"),
      "config-build": path.resolve(cwd, "config/build/"),
    },
    extensions: [".tsx", ".ts", ".js"],
  };
}
