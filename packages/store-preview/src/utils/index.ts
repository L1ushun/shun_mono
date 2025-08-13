const calculateStrategy = {
  // 以最大宽度为基准算高度
  baseMaxWidth: function (maxSize: SIZE, resolution: number) {
    const width = maxSize.width;
    const height = resolution / width;
    return {
      width,
      height: height > maxSize.height ? maxSize.height : height,
    };
  },
  // 以最大高度为基准算宽度
  baseMaxHeight: function (maxSize: SIZE, resolution: number) {
    const height = maxSize.height;
    const width = resolution * height;
    return {
      width: width > maxSize.width ? maxSize.width : width,
      height,
    };
  },
};

export function calculateSize(imageSize: SIZE, maxSize: SIZE): SIZE {
  const { width, height } = imageSize;
  const { width: maxWidth, height: maxHeight } = maxSize;
  const { baseMaxWidth, baseMaxHeight } = calculateStrategy;

  // 图片的宽高比
  const resolution = width / height;
  if (width > maxWidth && height <= maxHeight) {
    return baseMaxWidth(maxSize, resolution);
  }
  if (width <= maxWidth && height > maxHeight) {
    return baseMaxHeight(maxSize, resolution);
  }
  if (width > maxWidth && height > maxHeight) {
    return maxHeight <= maxWidth
      ? baseMaxHeight(maxSize, resolution)
      : baseMaxWidth(maxSize, resolution);
  }
  // 如果宽高都小于最大值，需要按照最大高度放大
  return baseMaxHeight(maxSize, resolution);
}

export function adjustImageSize(file: File, maxSize: SIZE) {
  const img = new Image();

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      img.src = e.target!.result as string;
    };
    reader.onerror = function (e) {
      reject(e);
    };
    img.onload = function () {
      const { width, height } = calculateSize(
        { width: img.width, height: img.height },
        maxSize,
      );
      // 图片不可用
      if (width < 1 || height < 1) {
        reject("图片不可用");
      }
      img.width = width;
      img.height = height;
      var canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx!.drawImage(img, 0, 0, width, height);
      canvas.toBlob((blob) => {
        const file = new File([blob!], "logo.png", { type: "image/png" });
        resolve(file);
      });
    };
    img.onerror = function (e) {
      reject(e);
    };
    reader.readAsDataURL(file);
  });
}

export async function svgNodeToFile(svgNode: Element, name?: string) {
  let s = new XMLSerializer().serializeToString(svgNode);
  let encodedData = `data:image/svg+xml;base64,${window.btoa(s)}`;
  const image = new Image();
  return new Promise((resolve) => {
    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = image.width;
      canvas.height = image.height;
      const ctx = canvas.getContext("2d")!;
      ctx.drawImage(image, 0, 0);
      canvas.toBlob(
        (blob) => {
          const file = new File([blob as Blob], `${name || "logo"}.png`, {
            type: "image/png",
          });
          resolve(file);
        },
        "image/png",
        1,
      );
    };
    image.src = encodedData;
  });
}
