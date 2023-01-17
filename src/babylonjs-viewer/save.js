import { useBlockProps } from "@wordpress/block-editor";
import { Fragment } from "@wordpress/element";

export default function save({ attributes }) {
  const { model } = attributes;
  const { title, url } = model;

  return (
    <div { ...useBlockProps.save() }>
      {(url && url !== "") &&
        <Fragment>
          <p>
            Rendering <b>{title}</b> from <em>{url}</em>
          </p>
          <div className="babylonjs-viewer" model={url}></div>
        </Fragment>
      }
      {!url &&
        <p>
          { "No URL selected" }
        </p>
      }
    </div>
  );
}
