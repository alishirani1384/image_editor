const preview = document.querySelector("#preview");
const previewScale = document.querySelector("#preview-scale");
const previewFlip = document.querySelector("#preview-flip");
const brightnessSlider = document.querySelector("#brightness");
const brightnessSliderValue = document.querySelector("#brightness-value");
const rotateSlider = document.querySelector("#rotate");
const rotateSliderValue = document.querySelector("#rotate-value");

const handleRotate = () => {
  const rotate = rotateSlider.value;
  rotateSliderValue.innerText = rotate;

  // TODO: write your code here
  preview.style.transform = `rotate(${rotate}deg)`;
  const second_rotate = rotate / 180;
  const rotateScale =
    Math.abs(Math.sin(Math.PI * second_rotate)) +
    Math.abs(Math.cos(Math.PI * second_rotate));
  preview.style.transform += `scale(${rotateScale})`;
};

const handleBrightness = () => {
  const brightness = brightnessSlider.value;
  brightnessSliderValue.innerText = brightness;

  // TODO: write your code here
  preview.setAttribute("style", `filter:brightness(${brightness})`);
};

const handleFilter = (e) => {
  const { target } = e;
  const { id: filter } = target;
  // filter: "grayscale" | "sepia" | "invert" | "hue-rotate" | "contrast" | "saturate" | "blur"
  // TODO: write your code here
  preview.children[0].setAttribute("id", filter);
};

const handleFlip = (flip) => {
  //  flip: "vertical" | "horizontal"
  // TODO: write your code here

  if (flip === "vertical" && previewFlip.style.transform === "scale(1, 1)") {
    previewFlip.style.transform = "scale(1, -1)";
  } else if (
    flip === "vertical" &&
    previewFlip.style.transform === "scale(1, -1)"
  ) {
    previewFlip.style.transform = "scale(1, 1)";
  } else if (
    flip === "vertical" &&
    previewFlip.style.transform === "scale(-1, 1)"
  ) {
    previewFlip.style.transform = "scale(-1, -1)";
  } else if (
    flip === "vertical" &&
    previewFlip.style.transform === "scale(-1, -1)"
  ) {
    previewFlip.style.transform = "scale(-1, 1)";
  } else if (
    flip === "horizontal" &&
    previewFlip.style.transform === "scale(1, -1)"
  ) {
    previewFlip.style.transform = "scale(-1, -1)";
  } else if (
    flip === "horizontal" &&
    previewFlip.style.transform === "scale(-1, 1)"
  ) {
    previewFlip.style.transform = "scale(1, 1)";
  } else if (
    flip === "horizontal" &&
    previewFlip.style.transform === "scale(-1, -1)"
  ) {
    previewFlip.style.transform = "scale(1, -1)";
  } else {
    if (flip === "vertical") {
      previewFlip.style.transform = "scale(1, -1)";
    } else if (flip === "horizontal") {
      previewFlip.style.transform = "scale(-1, 1)";
    }
  }
};

const handleMouseEnter = () => {
  // TODO: write your code here
  previewScale.style.transform = "scale(2)";
};

const handleMouseLeave = () => {
  // TODO: write your code here
  previewScale.style.transform = null;
};

const handleMouseMove = (e) => {
  const imageWidth = previewScale.offsetWidth;
  const imageHeight = previewScale.offsetHeight;
  const imageOffsetTop = previewScale.offsetTop;
  const imageOffsetLeft = previewScale.offsetLeft;
  const pageX = e.pageX;
  const pageY = e.pageY;

  // TODO: write your code here
  let mouseX = pageX - imageOffsetLeft;
  let mouseY = pageY - imageOffsetTop;
  previewScale.style.transformOrigin = `${mouseX}px ${mouseY}px`;
};
