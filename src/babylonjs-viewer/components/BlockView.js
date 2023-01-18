import { forwardRef, Fragment } from "@wordpress/element";
import PropTypes from "prop-types";

const BlockView = forwardRef(({ title, url, height, width }, ref) => {
  const inlineStyle = {};

  if (height > 0) {
    inlineStyle.height = `${height}px`;
  }

  if (width > 0) {
    inlineStyle.width = `${width}px`;
  }

  return (
    <Fragment>
      {(url && url !== "") &&
        <Fragment>
          <p>
            Rendering <b>{title}</b> from <em>{url}</em>
          </p>
          <div ref={ref} className="babylonjs-viewer" model={url} style={inlineStyle}></div>
        </Fragment>
      }
      {!url &&
        <p>
          { "No URL selected" }
        </p>
      }
    </Fragment>
  );
});

BlockView.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  height: {
    type: PropTypes.number,
    default: 0,
  },
  width: {
    type: PropTypes.number,
    default: 0,
  },
};

export default BlockView;
