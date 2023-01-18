import * as BabylonViewer from "babylonjs-viewer";

export default function initViewer($element, modelUrl) {
  const viewerContainer = $element.querySelector(".babylonjs-viewer__container");

  return new BabylonViewer.DefaultViewer(viewerContainer, {
    camera: {
      behaviors: {
        autoRotate: 0,
      },
    },
    model: {
      url: modelUrl,
    },
  });
}