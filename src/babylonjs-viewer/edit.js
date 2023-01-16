import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';

import './editor.scss';

export default function edit({ attributes, setAttributes }) {
	const { url } = attributes;

	return (
		<div { ...useBlockProps() }>
			<TextControl
				label="Model URL"
				value={url}
				onChange={(newValue) => {
					setAttributes({
						url: newValue,
					});
				}}
			/>
		</div>
	);
}
