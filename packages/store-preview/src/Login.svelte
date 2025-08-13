<script module lang="ts">
  let loginNode: HTMLElement;
  let showCustomLogo = $state(false);
  let imgSrc = $state<string>("");
  export async function setCustomLogo(file?: File | string) {
    if (!file) {
      showCustomLogo = false;
      return;
    }
    if (typeof file == "string") {
      imgSrc = file;
      showCustomLogo = true;
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (event) {
      imgSrc = event.target!.result as string;
      showCustomLogo = true;
    };
  }

  export const getLoginSvgByName = async (svgName: LOGIN_SVG_NAME) => {
    if (!loginNode) return;
    const svgNode = loginNode.querySelector(`#${svgName}`);
    const file = await svgNodeToFile(svgNode as Element, svgName);
    return file;
  };
</script>

<script lang="ts">
  import Logo from "./assets/logo.svelte";
  import Wechat from "./assets/wechat.svelte";
  import Window from "./assets/window.svelte";
  import { defaultColorScales } from "./constants";
  import ToolsBar from "./components/ToolsBar.svelte";
  import { svgNodeToFile } from "./utils";
  const { colorScale = defaultColorScales } = $props();
  const color = colorScale[8];
</script>

<div bind:this={loginNode} class="login">
  <div class="login_card" style:color>
    <img
      id="store-preview_logo-img"
      class="logo-img"
      style:display={!showCustomLogo ? "none" : "block"}
      src={imgSrc}
      alt="login-logo"
    />
    <div
      style:display={showCustomLogo ? "none" : "block"}
      class="login-logo-svg"
    >
      <Logo />
    </div>
    <div class="login_content">
      <div class="login-content-tabs">
        <div
          class="tabs_message"
          style:color
          style:border-bottom={`1px solid ${color}`}
        >
          短信登录
        </div>
        <div style="color: #5E6471">密码登录</div>
      </div>
      <div class="login-content-form">
        <input class="form-input" placeholder="请输入手机号" disabled />
        <div class="password">
          <input class="form-input" placeholder="请输入验证码" disabled />
          <span class="password-code">获取验证码</span>
        </div>
        <div class="login-content-btn" style:background-color={color}>登录</div>
        <div class="login-content-protocol">
          <input
            type="checkbox"
            class="protocol-checkbox"
            id="protocol"
            name="protocol"
          />
          <label for="protocol" class="protocol-label">
            未注册手机号将为您自动注册并登录，我已阅读并同意
            <span style:color>用户协议</span> 和
            <span style:color>隐私政策</span>
          </label>
        </div>
      </div>
      <div class="login-content-footer">
        <div class="login-footer_line">
          <span>或</span>
        </div>
        <div class="login-footer_link">
          <Wechat />
        </div>
      </div>
    </div>
  </div>
  <div class="login-footer">
    <span style="margin-left: 922px;">
      <Window {colorScale} />
    </span>
    <ToolsBar />
  </div>
</div>

<style scoped>
  .login {
    width: 1920px;
    height: 1080px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 12px;
    background-color: #dfedff;
  }
  .login_card {
    box-sizing: border-box;
    width: 460px;
    height: 580px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    padding: 48px 0 32px;
    box-shadow: 6px 0 50px #c3e2f8;
    border-radius: 12px;
    position: relative;
    margin-bottom: 207px;
    margin-top: 208px;
  }
  .login_content {
    width: 320px;
    margin-top: 32px;
  }
  .login-content-tabs {
    height: 30px;
    display: flex;
  }
  .login-logo-svg {
    box-sizing: border-box;
    height: 45px;
    padding: 1px 0 2px;
  }
  .tabs_message {
    color: #19c176;
    margin-right: 40px;
    border-bottom: 2px #19c176 solid;
  }
  .form-input {
    box-sizing: border-box;
    width: 320px;
    height: 40px;
    padding: 0 16px;
    border: #c8cfdc 1px solid;
    border-radius: 4px;
  }
  input::placeholder {
    color: #b4bccc;
  }
  .login-content-form {
    margin-top: 24px;
  }
  .password {
    margin-top: 24px;
    position: relative;
  }
  .password-code {
    position: absolute;
    right: 16px;
    bottom: 10px;
    color: #5e6471;
    font-size: 14px;
  }
  .login-content-btn {
    width: 320px;
    height: 40px;
    margin-top: 36px;
    color: #ffffff;
    text-align: center;
    line-height: 40px;
    border-radius: 4px;
  }
  .login-content-protocol {
    width: 320px;
    height: 48px;
    display: flex;
    align-items: start;
    margin-top: 8px;
  }
  .protocol-checkbox {
    width: 12px;
    height: 12px;
    line-height: 16px;
    margin-top: 2px;
    margin-right: 4px;
    border: #c8cfdc 1.6px solid;
  }
  .protocol-label {
    color: #1c2028;
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
  }
  .login-content-footer {
    margin-top: 65px;
  }
  .login-footer_line {
    text-align: center;
    display: flex;
  }
  .login-footer_line span {
    margin: 0 16px;
    font-size: 13px;
    color: #b4bccc;
  }
  .login-footer_line::before,
  .login-footer_line::after {
    content: "";
    height: 1px;
    width: 50%;
    align-self: center;
    background: linear-gradient(to right, #b4bccc1a, #b4bccc);
  }
  .login-footer_line::after {
    background: linear-gradient(to right, #b4bccc, #b4bccc1a);
  }
  .login-footer_link {
    display: flex;
    justify-content: center;
    margin-top: 8px;
  }

  .login-footer {
    box-sizing: border-box;
    width: 1896px;
    height: 72px;
    background-color: #f2f8ff;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;
  }
  .logo-img {
    height: 45px;
    object-fit: cover;
  }
</style>
