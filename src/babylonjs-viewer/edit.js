import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

import "./editor.scss";

import BlockEditView from "./components/BlockEditView";
import EditInspectorControls from "./components/EditInspectorControls";
import EditBlockControls from "./components/EditBlockControls";

export default function edit({ attributes, setAttributes }) {
  const { model, size } = attributes;
  const { title, url } = model;
  const { height, width } = size;

  return (
    <div {...useBlockProps()}>
      <EditBlockControls
        model={model}
        onTitleChange={(newValue) => {
          setAttributes({
            model: {
              title: newValue,
              url,
            },
          });
        }}
        onUrlChange={(newValue) => {
          setAttributes({
            model: {
              title,
              url: newValue,
            },
          });
        }}
      />
      <EditInspectorControls
        size={size}
        onHeightChange={(newValue) => {
          setAttributes({
            size: {
              height: newValue,
              width,
            },
          });
        }}
        onWidthChange={(newValue) => {
          setAttributes({
            size: {
              height,
              width: newValue,
            },
          });
        }}
      />
      <BlockEditView
        title={title}
        url={url}
        height={height}
        width={width}
      />
    </div>
  );
}
