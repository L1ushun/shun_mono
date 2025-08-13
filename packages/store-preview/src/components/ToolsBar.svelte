<script>
  import Reload from "../assets/tools/reload.svelte";
  import Language from "../assets/tools/language.svelte";
  import Setting from "../assets/tools/setting.svelte";
  import Voice from "../assets/tools/voice.svelte";
  import Bluetooth from "../assets/tools/bluetooth.svelte";
  import Date from "../assets/tools/date.svelte";
  import Wifi from "../assets/tools/wifi.svelte";
</script>

<div class="screen-footer_tools">
  <div class="screen-footer_tools_icons">
    <Reload />
    <Language />
    <Setting />
    <Voice />
    <Bluetooth />
    <Wifi />
  </div>
  <Date />
</div>

<style>
  .screen-footer_tools {
    width: 416px;
    height: 52px;
    display: flex;
  }
  .screen-footer_tools_icons {
    width: 312px;
    height: 52px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
</style>
