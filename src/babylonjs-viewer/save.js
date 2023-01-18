import { useBlockProps } from "@wordpress/block-editor";

import BlockView from "./components/BlockView";

export default function save({ attributes }) {
  const { model } = attributes;
  const { title, url } = model;

  return (
    <div { ...useBlockProps.save() }>
      <BlockView
        title={title}
        url={url}
      />
    </div>
  );
}
