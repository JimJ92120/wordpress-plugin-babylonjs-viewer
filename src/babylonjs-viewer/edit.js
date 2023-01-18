import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  MediaUpload,
  BlockControls,
} from "@wordpress/block-editor";
import {
  TextControl,
  Button,
  ToolbarGroup,
  ToolbarButton,
} from "@wordpress/components";
import { Fragment, useState } from "@wordpress/element"
import {
  edit as editIcon,
} from '@wordpress/icons';

import "./editor.scss";
import BlockEditView from "./components/BlockEditView";
import EditInspectorControls from "./components/EditInspectorControls";

export default function edit({ attributes, setAttributes }) {
  const { model, size } = attributes;
  const { title, url } = model;
  const { height, width } = size;

  const [showEdit, setShowEdit] = useState(true);

  return (
    <div {...useBlockProps()}>
      <BlockControls>
        <ToolbarGroup>
          <ToolbarButton
            icon={editIcon}
            label="Edit"
            isPressed={showEdit}
            onClick={() => setShowEdit(!showEdit)}
          />
        </ToolbarGroup>
      </BlockControls>
      {showEdit &&
        <Fragment>
          <Fragment>
            <p>
              {`Enter the model metas or `}
              <MediaUpload
                onSelect={({ title, url }) => {
                  setAttributes({
                    model: {
                      title: title,
                      url: url,
                    },
                  });
                }}
                multiple={false}
                render={({ open }) => (
                  <Fragment>
                    <Button
                      onClick={open}
                      variant="link"
                      style={{
                        color: "white",
                        padding: 0,
                        fontSize: "inherit",
                      }}
                    >
                      select from Media Library
                    </Button>
                  </Fragment>
                )}
              />
            </p>
          </Fragment>
          <Fragment>
            <TextControl
              label="Title"
              value={title}
              onChange={(newValue) => {
                setAttributes({
                  model: {
                    title: newValue,
                    url: url,
                  },
                });
              }}
            />
            <TextControl
              label="URL"
              value={url}
              onChange={(newValue) => {
                setAttributes({
                  model: {
                    title: title,
                    url: newValue,
                  }
                });
              }}
            />
          </Fragment>
        </Fragment>
      }
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
