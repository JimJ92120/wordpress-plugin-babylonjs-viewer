import { useBlockProps } from "@wordpress/block-editor";

import BlockView from "./components/BlockView";

export default function save({ attributes }) {
  const { model, size } = attributes;
  const { height, width } = size;

  return (
    <div { ...useBlockProps.save() }>
      <BlockView
        model={model}
        height={height}
        width={width}
      />
    </div>
  );
}
