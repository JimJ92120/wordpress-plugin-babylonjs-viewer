import { forwardRef, Fragment } from "@wordpress/element";
import PropTypes from "prop-types";

const BlockView = forwardRef(({ title, url }, ref) => (
  <Fragment>
    {(url && url !== "") &&
      <Fragment>
        <p>
          Rendering <b>{title}</b> from <em>{url}</em>
        </p>
        <div ref={ref} className="babylonjs-viewer" model={url}></div>
      </Fragment>
    }
    {!url &&
      <p>
        { "No URL selected" }
      </p>
    }
  </Fragment>
));

BlockView.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
};

export default BlockView;
