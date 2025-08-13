import configList from "./rollup.config.js";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";

const devConfigList = configList.map((item, index) => {
  if (index === 0) {
    (item.input = "src/main.ts"),
      (item.plugins = [
        ...item.plugins,
        livereload(),
        serve({
          open: true,
          port: 8888,
          contentBase: "",
        }),
      ]);
  }
  return item;
});

export default devConfigList;
