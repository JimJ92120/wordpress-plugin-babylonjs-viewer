import { useBlockProps } from "@wordpress/block-editor";
import { Fragment } from "@wordpress/element";

export default function save({ attributes }) {
	const { url } = attributes;

	return (
		<div { ...useBlockProps.save() }>
			{(url && url !== "") &&
				<Fragment>
					<p>
						{ `Loading model from "${url}"`}
					</p>
					<babylon model={url}></babylon>
				</Fragment>
			}
			{!url &&
				<p>
					{ "No URL selected" }
				</p>
			}
		</div>
	);
}
