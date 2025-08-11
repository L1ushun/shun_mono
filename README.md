pnpm --filter [选择的package] add xxx --workspace # 选中某个package 安装 workspace 里的某个包

pnpm add typescript @types/node -w --save-dev  #在根目录安装需要 -w


pnpm exec  可以执行命令 例如 pnpm --filter cli exec npx tsc --init