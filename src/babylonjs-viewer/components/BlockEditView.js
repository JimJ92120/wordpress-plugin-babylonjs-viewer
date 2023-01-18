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
    const { url: oldUrl } = previousProps
    const { url } = this.props;
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
      }
    }
  }

  render() {
    const { title, url } = this.props;

    return (
      <BlockView
        ref={this.childRef}
        title={title}
        url={url}
      />
    );
  }
}

BlockEditView.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
};

export default BlockEditView;
