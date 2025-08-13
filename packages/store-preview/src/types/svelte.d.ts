declare module "*.svelte" {
  export { SvelteComponentTyped as default } from "svelte";
  export function Desktop(target: HTMLElement, color: string[]): () => void;
  export function Login(target: HTMLElement, color: string[]): () => void;
  export function getLoginSvgByName(
    svgName: LOGIN_SVG_NAME,
  ): Promise<File | undefined>;
  export function getDesktopSvgByName(
    svgName: DESKTOP_SVG_NAME,
  ): Promise<File | undefined>;
  export function setCustomLogo(file?: File | string): void;
  export function getAllSvg(): Promise<File[] | undefined>;
}
