<script>
  const { colorScale } = $props();
</script>

<svg
  width="36"
  height="36"
  viewBox="0 0 36 36"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  id="monitor"
>
  <rect x="1" y="1" width="34" height="34" rx="4" fill={colorScale[8]} />
  <g filter="url(#filter0_f_2442_65761)">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9 9C7.89543 9 7 9.89543 7 11V22C7 23.1046 7.89543 24 9 24H24V27C24 27.5523 24.4477 28 25 28H30C30.5523 28 31 27.5523 31 27V15C31 14.4477 30.5523 14 30 14H28V11C28 9.89543 27.1046 9 26 9H9ZM14 26C13.4477 26 13 26.4477 13 27C13 27.5523 13.4477 28 14 28H21C21.5523 28 22 27.5523 22 27C22 26.4477 21.5523 26 21 26H14Z"
      fill={colorScale[9]}
      fill-opacity="0.9"
    />
  </g>
  <path
    d="M7 11C7 9.89543 7.89543 9 9 9H26C27.1046 9 28 9.89543 28 11V22C28 23.1046 27.1046 24 26 24H9C7.89543 24 7 23.1046 7 22V11Z"
    fill="#FDFDFE"
  />
  <path
    d="M13 27C13 26.4477 13.4477 26 14 26H21C21.5523 26 22 26.4477 22 27C22 27.5523 21.5523 28 21 28H14C13.4477 28 13 27.5523 13 27Z"
    fill="#FDFDFE"
  />
  <path
    d="M14 9H26C27.1046 9 28 9.89543 28 11V22C28 23.1046 27.1046 24 26 24H20.8202L14 9Z"
    fill={colorScale[5]}
  />
  <rect x="24" y="14" width="7" height="14" rx="1" fill="#FDFDFE" />
  <circle
    cx="0.5"
    cy="0.5"
    r="0.5"
    transform="matrix(1 0 0 -1 27 27)"
    fill={colorScale[5]}
  />
  <defs>
    <filter
      id="filter0_f_2442_65761"
      x="4"
      y="6"
      width="30"
      height="25"
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
        stdDeviation="1.5"
        result="effect1_foregroundBlur_2442_65761"
      />
    </filter>
  </defs>
</svg>
