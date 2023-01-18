import * as BabylonViewer from "babylonjs-viewer";

export default function initViewer($element, modelUrl) {
  return new BabylonViewer.DefaultViewer($element, {
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