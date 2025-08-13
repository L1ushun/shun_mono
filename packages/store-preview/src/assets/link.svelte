<script>
  const { colorScale } = $props();
</script>

<svg
  width="36"
  height="36"
  viewBox="0 0 36 36"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect x="1" y="1" width="34" height="34" rx="4" fill={colorScale[8]} />
  <g filter="url(#filter0_f_2442_65755)">
    <circle cx="18" cy="18" r="12" fill="#00B490" />
  </g>
  <circle cx="18" cy="18" r="12" fill="white" />
  <path
    d="M15.5146 16.3466L12.5449 13.746H24.9999L18.73 24.1859L17.9281 20.64L20.5144 16.3466H15.5146Z"
    fill={colorScale[5]}
  />
  <path
    d="M15.0272 23.9961L16.2978 18.6843L11 17.0045L18.6868 17.385L15.0272 23.9961Z"
    fill={colorScale[5]}
  />
  <defs>
    <filter
      id="filter0_f_2442_65755"
      x="2"
      y="2"
      width="32"
      height="32"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="BackgroundImageFix"
        result="shape"
      />
      <feGaussianBlur
        stdDeviation="2"
        result="effect1_foregroundBlur_2442_65755"
      />
    </filter>
  </defs>
</svg>
