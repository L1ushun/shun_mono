/// <reference types="svelte" />

type DESKTOP_SVG_NAME =
  | "window"
  | "desktop"
  | "computer"
  | "game"
  | "monitor"
  | "document"
  | "switch";

type LOGIN_SVG_NAME = "code";

type HEX = `#${string}`;

type SIZE = { width: number; height: number };

declare module "store-preview" {
  export function Desktop(target: HTMLElement, color: string[]): () => void;
  export function Login(target: HTMLElement, color: string[]): () => void;
  export function getSvgByName(
    svgName: DESKTOP_SVG_NAME | LOGIN_SVG_NAME,
  ): Promise<File | undefined>;
  export function setCustomLogo(file?: File | string): void;
  export function getAllSvg(): Promise<File[] | undefined>;
  export function adjustImageSize(file: File, maxSize: SIZE): Promise<File>;
}
