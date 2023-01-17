import * as BabylonViewer from "babylonjs-viewer";

addEventListener("DOMContentLoaded", () => {
  const $blockList = document.getElementsByClassName("babylonjs-viewer");

  Object.keys($blockList).map((index) => {
    const $block = $blockList[index];
    const model = $block.getAttribute("model");
    
    if (model && "" !== model) { 
      new BabylonViewer.DefaultViewer($block, {
        camera: {
          behaviors: {
            autoRotate: 0,
          },
        },
        model: {
          url: model,
        },
      });
    }
  });
});
