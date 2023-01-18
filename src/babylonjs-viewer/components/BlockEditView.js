import { Component, createRef, Fragment } from "@wordpress/element";
import PropTypes from "prop-types";

import BlockView from "./BlockView";
import initViewer from "../scripts/initViewer";

class BlockEditView extends Component {
  constructor(props) {
    super(props);

    this.childRef = createRef();
    this.state = {
      viewer: null,
    };
  }

  componentDidUpdate(previousProps) {
    const {
      url: oldUrl,
      height: oldHeight,
      width: oldWidth,
    } = previousProps
    const { url, height, width } = this.props;
    const { viewer } = this.state;

    if (this.childRef.current) {
      if (!viewer) {
        this.setState({
          viewer: initViewer(this.childRef.current, url),
        });
      } else if (url !== oldUrl) {
        viewer.loadModel({
          url,
        });
      } else if (
        height !== oldHeight
        || width !== oldWidth
      ) {
        viewer.engine.resize();
      }
    }
  }

  render() {
    const { title, url, height, width } = this.props;

    return (
      <BlockView
        ref={this.childRef}
        title={title}
        url={url}
        height={height}
        width={width}
      />
    );
  }
}

BlockEditView.propTypes = {
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

export default BlockEditView;
