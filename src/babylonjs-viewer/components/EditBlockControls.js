import {
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
import PropTypes from "prop-types";

function EditBlockControls(props) {
  const {
    model,
    onTitleChange,
    onUrlChange,
  } = props;
  const { title, url } = model;
  const [showEdit, setShowEdit] = useState(true);

  return (
    <Fragment>
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
                  onTitleChange(title);
                  onUrlChange(url);
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
              onChange={(newValue) => onTitleChange(newValue)}
            />
            <TextControl
              label="URL"
              value={url}
              onChange={(newValue) => onUrlChange(newValue)}
            />
          </Fragment>
        </Fragment>
      }
    </Fragment>
  );
}

EditBlockControls.propTypes = {
  model: {
    type: PropTypes.object,
    default: {
      title: "",
      url: "",
    },
  },
  onTitleChange: PropTypes.func,
  onUrlChange: PropTypes.func,
};

export default EditBlockControls;