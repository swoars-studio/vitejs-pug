import vituum from "vituum";
import pug from "@vituum/vite-plugin-pug";
import path from "node:path";

export default {
  plugins: [
    vituum(),
    pug({
      root: "./src",
    }),
  ],
};
