export enum BUILD_MODE {
  DEVELOPMENT = "development",
  PRODUCTION = "production",
}

export const DEFAULT_BUILD_OPTIONS = {
  PORT: 3000,
  MODE: BUILD_MODE.DEVELOPMENT,
};
