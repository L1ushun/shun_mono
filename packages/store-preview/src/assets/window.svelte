<script lang="ts">
  const { colorScale } = $props();
</script>

<svg
  width="36"
  height="36"
  viewBox="0 0 36 36"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  id="window"
>
  <rect x="2.00001" y="2" width="15" height="15" rx="2" fill={colorScale[5]} />
  <rect x="2" y="19" width="15" height="15" rx="2" fill={colorScale[7]} />
  <rect x="19" y="19" width="15" height="15" rx="2" fill={colorScale[8]} />
  <rect x="19" y="2" width="15" height="15" rx="2" fill={colorScale[6]} />
</svg>
