import { InspectorControls } from "@wordpress/block-editor";
import {
  TextControl,
  Panel,
  PanelBody,
  PanelRow,
} from "@wordpress/components";

export default function EditInspectorControls(props) {
  const {
    height,
    width,
    onHeightChange,
    onWidthChange,
  } = props
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