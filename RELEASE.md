# 发版指南

本项目使用 Changesets 来管理版本和发布流程。

## 🚀 发版流程

### 方法一：自动化发版（推荐）

1. **添加 changeset 记录**
   ```bash
   npm run changeset:add
   ```
   按提示选择要更新的包和版本类型（patch/minor/major）

2. **更新版本并推送标签**
   ```bash
   npm run release:tag
   ```
   这会：
   - 更新版本号
   - 推送代码到远程仓库
   - 创建新的 git 标签
   - 自动触发 GitHub Actions 发布到 npm

### 方法二：手动发版

1. **添加 changeset**
   ```bash
   npm run changeset:add
   ```

2. **更新版本**
   ```bash
   npm run changeset:version
   ```

3. **发布到 npm**
   ```bash
   npm run changeset:publish
   ```

4. **推送代码和标签**
   ```bash
   git push origin main
   git tag v$(date +'%Y%m%d-%H%M%S')
   git push --tags
   ```

## 📋 配置要求

### GitHub Secrets 配置

在 GitHub 仓库设置中添加以下 secrets：

1. **NPM_TOKEN**
   - 访问 [npmjs.com](https://www.npmjs.com)
   - 生成一个 Automation 类型的 Access Token
   - 在 GitHub 仓库 Settings → Secrets and variables → Actions 中添加

### npm 账户要求

确保你的 npm 账户有权限发布 `@shun-mono` 命名空间的包。

## 🔄 工作流说明

### 1. `publish-on-tag.yml`
- **触发条件**: 推送以 `v` 开头的标签时
- **功能**: 自动构建并发布包到 npm

### 2. `version-and-release.yml`
- **触发条件**: 
  - 手动触发
  - 推送 changeset 文件到 main 分支时
- **功能**: 完整的版本管理和发布流程

### 3. `release.yml`
- **触发条件**: 推送任何标签时
- **功能**: 使用 changeset publish 命令发布

## 📦 包信息

当前包：
- `@shun-mono/template-react-ts` - React TypeScript 模板
- `@shun-mono/template-vue-ts` - Vue TypeScript 模板

两个包都配置为公开发布（`publishConfig.access: "public"`）。

## 🎯 版本类型说明

- **patch**: 修复 bug（1.0.0 → 1.0.1）
- **minor**: 新功能（1.0.0 → 1.1.0）
- **major**: 重大变更（1.0.0 → 2.0.0） 