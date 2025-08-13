import { mount, unmount } from "svelte";
import LoginPreview, { setCustomLogo } from "./Login.svelte";
import { adjustImageSize, svgNodeToFile } from "./utils";

function Login(target: HTMLElement, colorScale: HEX[]) {
  const app = mount(LoginPreview, {
    target,
    props: {
      colorScale,
    },
  });
  return () => {
    unmount(app);
  };
}

export { Login, setCustomLogo, adjustImageSize, svgNodeToFile };
