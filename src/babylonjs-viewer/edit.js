import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';

import './editor.scss';

export default function edit({ attributes, setAttributes }) {
	const { model } = attributes;
	const { title, url } = model;

	return (
		<div { ...useBlockProps() }>
			<TextControl
				label="Title"
				value={title}
				onChange={(newValue) => {
					setAttributes({
						model: {
							title: newValue,
							url: url,
						},
					});
				}}
			/>
			<TextControl
				label="URL"
				value={url}
				onChange={(newValue) => {
					setAttributes({
						model: {
							title: title,
							url: newValue,
						}
					});
				}}
			/>
		</div>
	);
}
