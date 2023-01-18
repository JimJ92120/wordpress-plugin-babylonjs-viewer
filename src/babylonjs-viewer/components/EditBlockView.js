import { Component, createRef } from "@wordpress/element";
import PropTypes from "prop-types";

import BlockView from "./BlockView";
import initViewer from "../scripts/initViewer";

class EditBlockView extends Component {
  constructor(props) {
    super(props);

    this.childRef = createRef();
    this.state = {
      viewer: null,
    };
  }

  componentDidUpdate(previousProps) {
    const {
      model: oldModel,
      size: oldSize,
    } = previousProps
    const { model, size } = this.props;
    const { url } = model;
    const { viewer } = this.state;

    if (this.childRef.current) {
      if (!viewer) {
        this.setState({
          viewer: initViewer(this.childRef.current, url),
        });
      } else if (url !== oldModel.url) {
        viewer.loadModel({
          url,
        });
      } else if (size !== oldSize) {
        viewer.engine.resize();
      }
    }
  }

  render() {
    const { model, size } = this.props;

    return (
      <BlockView
        ref={this.childRef}
        model={model}
        size={size}
      />
    );
  }
}

EditBlockView.propTypes = {
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

export default EditBlockView;
