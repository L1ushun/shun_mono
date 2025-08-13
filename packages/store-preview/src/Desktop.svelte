<script module lang="ts">
  let desktopNode: HTMLElement;

  export const getDesktopSvgByName = async (svgName: DESKTOP_SVG_NAME) => {
    if (!desktopNode) return;
    const svgNode = desktopNode.querySelector(`#${svgName}`);
    const file = await svgNodeToFile(svgNode as Element, svgName);
    return file;
  };
</script>

<script lang="ts">
  import SwitchSvg from "./assets/switch.svelte";
  import Id from "./assets/id.svelte";
  import Off from "./assets/off.svelte";
  import Desktop from "./assets/desktop.svelte";
  import Poweron from "./assets/poweron.svelte";
  import ArrowRight from "./assets/arrowRight.svelte";
  import Add from "./assets/add.svelte";
  import HangUp from "./assets/hangUp.svelte";
  import Loading from "./assets/loading.svelte";
  import DesktopMounted from "./assets/desktopMounted.svelte";
  import Window from "./assets/window.svelte";
  import CloudDesktop from "./assets/cloudDesktop.svelte";
  import Link from "./assets/link.svelte";
  // import CloudMonitor from "./assets/cloudMonitor.svelte";
  import Document from "./assets/document.svelte";
  import { defaultColorScales, desktopCardList } from "./constants";
  import CloudGames from "./assets/cloudGames.svelte";
  import ToolsBar from "./components/ToolsBar.svelte";
  import Pagination from "./assets/pagination.svelte";
  import { svgNodeToFile } from "./utils";

  const { colorScale = defaultColorScales } = $props();
  const color = colorScale[8];
  const footerOperates = [
    Link,
    CloudGames,
    Document,
    // CloudMonitor, // 2.0再展示
  ];
</script>

<div bind:this={desktopNode} class="screen">
  <div class="screen-content">
    <div class="card_add">
      <Add />
    </div>
    {#each desktopCardList as item}
      <div class="card_item">
        <Id />
        <div class="card_item-content">
          {#if item.status === "off"}
            <Off />
            <div style="margin-left: 12px;"><Desktop /></div>
          {:else if item.status === "hangup"}
            <HangUp />
            <div style="margin-left: 12px;"><DesktopMounted /></div>
          {:else}
            <Loading />
            <div style="margin-left: 12px;"><Desktop /></div>
          {/if}
          <div class="card_item-more">...</div>
        </div>
        <div class="card_item-time">
          <div class="time-label">释放时间</div>
          <span class="time-value">2023/08/23 00:00:00</span>
        </div>
        {#if item.status === "off"}
          <div class="card_item-btn" style:background-color={color}>
            <span style="margin-right: 2px;">开机</span>
            <Poweron />
          </div>
        {:else if item.status === "hangup"}
          <div class="card_item-btn" style:background-color={color}>
            <span>正在开机中...</span>
          </div>
        {:else}
          <div
            style="display: flex; justify-content: space-between; margin: 16px 24px 0;"
          >
            <div class="card_item-btn-hangup" style:background-color={color}>
              <span>进入桌面</span>
              <ArrowRight />
            </div>
            <div style:color>
              <SwitchSvg />
            </div>
          </div>
        {/if}
      </div>
    {/each}
  </div>
  <div class="screen-pagination">
    <Pagination />
  </div>
  <div class="screen-footer">
    <div class="screen-footer_operate">
      <Window {colorScale} />
      <div class="footer_operate_line"></div>
      <div class="footer_operate_item checked-back">
        <CloudDesktop {colorScale} />
        <div class="checked" style:border-color={colorScale[8]}></div>
      </div>
      {#each footerOperates as Item}
        <div class="footer_operate_item">
          <Item {colorScale} />
        </div>
      {/each}
    </div>
    <ToolsBar />
  </div>
</div>

<style scoped>
  .screen {
    box-sizing: border-box;
    width: 1920px;
    height: 1080px;
    padding: 96px 0 12px;
    background-color: #dfedff;
  }
  .screen-content {
    box-sizing: border-box;
    width: 1920px;
    height: 820px;
    display: flex;
    justify-content: space-between;
    padding: 0 100px;
    flex-wrap: wrap;
  }
  .card_add {
    box-sizing: border-box;
    width: 412px;
    height: 260px;
    background-color: rgba(255, 255, 255, 0.5);
    text-align: center;
    line-height: 260px;
    border-radius: 12px;
    border: #ccd7e5 2px dashed;
  }
  .card_item {
    width: 412px;
    height: 260px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 12px;
  }
  .card_item-content {
    padding: 0 24px 0;
    display: flex;
    margin-top: 12px;
  }
  .card_item-more {
    margin-left: 58px;
  }
  .card_item-time {
    box-sizing: border-box;
    width: 364px;
    height: 68px;
    background-color: #ebf2fa;
    margin: 0 24px 0;
    padding: 12px 16px;
  }
  .time-label {
    font-size: 10px;
    line-height: 18px;
    margin-bottom: 4px;
  }
  .time-value {
    font-size: 14px;
    line-height: 22px;
  }
  .card_item-btn {
    width: 364px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 16px 24px 0;
    border-radius: 6px;
    color: #fff;
  }
  .card_item-btn-hangup {
    width: 296px;
    height: 48px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }
  .screen-pagination {
    box-sizing: border-box;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 100px;
  }
  .screen-footer {
    box-sizing: border-box;
    width: 1896px;
    height: 72px;
    background-color: #f2f8ff;
    margin: 0 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
    border-radius: 12px;
  }
  .footer_operate_line {
    height: 24px;
    border-left: #868e9d 1px solid;
  }
  .screen-footer_operate {
    margin-left: 798px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 300px;
  }

  .footer_operate_item {
    box-sizing: border-box;
    width: 52px;
    height: 52px;
    border-radius: 4px;
    text-align: center;
    padding-top: 8px;
    position: relative;
  }
  .checked-back {
    background-color: #fff;
  }
  .checked {
    border-bottom: 3px solid #32c27f;
    border-radius: 3px;
    width: 16px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
</style>
