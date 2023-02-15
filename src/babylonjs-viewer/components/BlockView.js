import { forwardRef, Fragment } from "@wordpress/element";
import PropTypes from "prop-types";

const BlockView = forwardRef(({ model, size }, ref) => {
  const { title, url } = model;
  const { height, width } = size;
  const inlineStyle = {};

  if (height > 0) {
    inlineStyle.height = `${height}px`;
  }

  if (width > 0) {
    inlineStyle.width = `${width}px`;
  }

  return (
    <Fragment>
      {url && url !== "" && (
        <Fragment>
          <div
            ref={ref}
            className="babylonjs-viewer"
            style={inlineStyle}
            data-model={url}
            data-title={title}
          >
            <div className="babylonjs-viewer__container"></div>
          </div>
        </Fragment>
      )}
      {!url && <p>{"No URL selected"}</p>}
    </Fragment>
  );
});

BlockView.propTypes = {
  size: PropTypes.shape({
    height: {
      type: PropTypes.number,
      default: 0,
    },
    width: {
      type: PropTypes.number,
      default: 0,
    },
  }),
  model: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};

export default BlockView;
