import { BUILD_MODE } from "config-build/constants";

export interface BuildPaths {
  entry: string;
  html: string;
  output: string;
}

export interface BuildOptions {
  port: number;
  paths: BuildPaths;
  mode: BUILD_MODE;
}

export interface EnvVariables {
  mode: BUILD_MODE;
  port: number;
}
