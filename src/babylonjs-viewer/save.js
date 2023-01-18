import { useBlockProps } from "@wordpress/block-editor";

import BlockView from "./components/BlockView";

export default function save({ attributes }) {
  const { model, size } = attributes;

  return (
    <div { ...useBlockProps.save() }>
      <BlockView
        model={model}
        size={size}
      />
    </div>
  );
}
