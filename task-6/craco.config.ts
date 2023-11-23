import path from "path";

const cwd = process.cwd();

const config = {
  webpack: {
    alias: {
      app: path.resolve(cwd, "src/app/"),
      providers: path.resolve(cwd, "src/providers/"),
      types: path.resolve(cwd, "src/types/"),
      components: path.resolve(cwd, "src/components/"),
    },
  },
};

export default config;
