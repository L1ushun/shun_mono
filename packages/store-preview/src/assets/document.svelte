<script>
  const { colorScale } = $props();
</script>

<svg
  width="36"
  height="36"
  viewBox="0 0 36 36"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  id="document"
>
  <rect x="1" y="1" width="34" height="34" rx="4" fill={colorScale[8]} />
  <g filter="url(#filter0_f_2442_65759)">
    <path
      d="M6 25.3845V10.2389C6 9.42738 6.65785 8.76953 7.46935 8.76953H13.7422C14.1319 8.76953 14.5056 8.92434 14.7812 9.1999L16.3939 10.8126C16.6694 11.0881 17.0432 11.2429 17.4329 11.2429H28.5301C29.3416 11.2429 29.9994 11.9008 29.9994 12.7123V25.3845C29.9994 26.4041 29.1729 27.2306 28.1533 27.2306H7.84611C6.82653 27.2306 6 26.4041 6 25.3845Z"
      fill={colorScale[9]}
      fill-opacity="0.9"
    />
  </g>
  <path
    d="M6.00098 25.3845V10.6156C6.00098 9.59606 6.82751 8.76953 7.84709 8.76953H13.7432C14.1329 8.76953 14.5066 8.92434 14.7822 9.1999L16.3949 10.8126C16.6704 11.0881 17.0441 11.2429 17.4338 11.2429H28.1543C29.1739 11.2429 30.0004 12.0695 30.0004 13.0891V25.3845C30.0004 26.4041 29.1739 27.2306 28.1543 27.2306H7.84709C6.82751 27.2306 6.00098 26.4041 6.00098 25.3845Z"
    fill={colorScale[5]}
  />
  <g filter="url(#filter1_d_2442_65759)">
    <path
      d="M6.00104 25.3847L6.00013 15.2293C6.00006 14.4177 6.65793 13.7598 7.46949 13.7598H13.9319C14.1753 13.7598 14.415 13.6993 14.6292 13.5838L16.3836 12.6379C16.5979 12.5223 16.8375 12.4619 17.081 12.4619H28.5302C29.3417 12.4619 29.9995 13.1196 29.9996 13.9311L30.0005 25.3844C30.0006 26.404 29.174 27.2306 28.1544 27.2306H7.84715C6.82764 27.2306 6.00113 26.4042 6.00104 25.3847Z"
      fill="white"
    />
  </g>
  <defs>
    <filter
      id="filter0_f_2442_65759"
      x="3.23083"
      y="6.00036"
      width="29.5374"
      height="23.9995"
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
        stdDeviation="1.38458"
        result="effect1_foregroundBlur_2442_65759"
      />
    </filter>
    <filter
      id="filter1_d_2442_65759"
      x="5.26156"
      y="11.3542"
      width="25.4779"
      height="16.2457"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dy="-0.369222" />
      <feGaussianBlur stdDeviation="0.369222" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0.992157 0 0 0 0 0.694118 0 0 0 0 0.0235294 0 0 0 0.04 0"
      />
      <feBlend
        mode="normal"
        in2="BackgroundImageFix"
        result="effect1_dropShadow_2442_65759"
      />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="effect1_dropShadow_2442_65759"
        result="shape"
      />
    </filter>
  </defs>
</svg>
