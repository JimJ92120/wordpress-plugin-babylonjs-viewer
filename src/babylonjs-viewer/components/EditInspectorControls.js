import { InspectorControls } from "@wordpress/block-editor";
import {
  TextControl,
  Panel,
  PanelBody,
  PanelRow,
} from "@wordpress/components";
import PropTypes from "prop-types";

function EditInspectorControls(props) {
  const {
    size,
    onHeightChange,
    onWidthChange,
  } = props
  const { height, width } = size;

  return (
    <InspectorControls key="setting">
      <Panel header="Viewer Settings">
        <PanelBody title="Dimensions" initialOpen={true}>
          <PanelRow>
            <TextControl
              label="Height"
              type="number"
              value={height}
              onChange={(newValue) => onHeightChange(newValue)}
            />
            PX
          </PanelRow>
          <PanelRow>
            <TextControl
              label="Width"
              type="number"
              value={width}
              onChange={(newValue) => onWidthChange(newValue)}
            />
            PX
          </PanelRow>
        </PanelBody>
      </Panel>
    </InspectorControls>
  );
}

EditInspectorControls.propTypes = {
  size: {
    type: PropTypes.object,
    default: {
      height: 0,
      width: 0,
    },
  },
  onHeightChange: PropTypes.func,
  onWidthChange: PropTypes.func,
};

export default EditInspectorControls;
