import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import css from "rollup-plugin-css-only";
import copy from "rollup-plugin-copy";
import commonjs from "@rollup/plugin-commonjs";
import { dts } from "rollup-plugin-dts";
import typescript from "@rollup/plugin-typescript";
import clear from "rollup-plugin-clear";
import { terser } from "rollup-plugin-terser";
import cleanup from "rollup-plugin-cleanup";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.umd.js",
        format: "umd",
        name: "store",
        sourcemap: false,
      },
      {
        file: "dist/index.esm.js",
        format: "es",
        sourcemap: false,
      },
    ],
    plugins: [
      svelte(),
      resolve({
        browser: true,
        exportConditions: ["svelte"],
        extensions: [".js", ".svelte", "ts"],
      }),
      css({
        output: "bundle.css",
      }),
      copy({
        targets: [{ src: "README.md", dest: "dist" }],
      }),
      commonjs(),
      typescript({
        filterRoot: "src",
      }),
      clear({
        targets: ["dist"],
      }),
      terser(),
      cleanup(),
    ],
  },
  {
    input: "src/types/global.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
  },
];
