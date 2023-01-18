import { useBlockProps } from "@wordpress/block-editor";

import BlockView from "./components/BlockView";

export default function save({ attributes }) {
  const { model, size } = attributes;
  const { title, url } = model;
  const { height, width } = size;

  return (
    <div { ...useBlockProps.save() }>
      <BlockView
        title={title}
        url={url}
        height={height}
        width={width}
      />
    </div>
  );
}
