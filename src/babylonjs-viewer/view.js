import initViewer from "./scripts/initViewer";

addEventListener("DOMContentLoaded", () => {
  const $blockList = document.getElementsByClassName("babylonjs-viewer");

  Object.keys($blockList).map((index) => {
    const $block = $blockList[index];
    const modelUrl = $block.getAttribute("data-model");

    if (modelUrl && "" !== modelUrl) {
      initViewer($block, modelUrl);
    }
  });
});
