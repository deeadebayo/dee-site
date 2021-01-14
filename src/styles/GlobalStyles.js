import { Global, css } from "@emotion/react";
import "normalize.css";
import styled from "@emotion/styled";

const wrapperStyles = css`
		border-top: 4px solid blue;
		margin-bottom: 4.5em;
	`,
	globalstyles = css`
		color: "darkorchid";
		background-color: "lightgray";

		.emoji {
			height: 19px;
			padding: 0 2px;
			line-height: 1.5;
		}
	`;

export default GlobalStyled = () => (
	<div css={wrapperStyles}>
		<Global styles={globalstyles} />
		<div className="some-class">This is hotpink now!</div>
	</div>
);
