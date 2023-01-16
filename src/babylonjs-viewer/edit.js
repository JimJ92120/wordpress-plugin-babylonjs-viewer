import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

import './editor.scss';

export default function edit() {
	return (
		<p { ...useBlockProps() }>
			{ __( 'Babylon.JS Viewer – hello from the editor!', 'babylonjs-viewer' ) }
		</p>
	);
}
