import { css } from "@emotion/react";
import { Link } from "gatsby";
import React from "react";

const buttonStyles = css`
	.pushable {
		position: relative;
		border: none;
		background: transparent;
		padding: 0;
		cursor: pointer;
		outline-offset: 4px;
		transition: filter 250ms;
	}
	.shadow {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 12px;
		background: hsl(0deg 0% 0% / 0.25);
		will-change: transform;
		transform: translateY(2px);
		transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
	}
	.edge {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 12px;
		background: linear-gradient(
			to left,
			hsl(358deg 100% 30%) 0%,
			hsl(358deg 100% 42%) 8%,
			hsl(358deg 100% 42%) 92%,
			hsl(358deg 100% 30%) 100%
		);
	}
	.front {
		display: block;
		position: relative;
		padding: 12px 42px;
		border-radius: 12px;
		font-size: 1.25rem;
		font-weight: 500;
		color: white;
		background: hsl(345deg 100% 47%);
		background: var(--color-primary);
		will-change: transform;
		transform: translateY(-4px);
		transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
	}
	.pushable:hover {
		filter: brightness(110%);
	}
	.pushable:hover .front {
		transform: translateY(-6px);
		transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
	}
	.pushable:active .front {
		transform: translateY(-2px);
		transition: transform 34ms;
		background: var(--color-secondary);
		transition: background 900ms 0.1s;
	}
	.pushable:active .edge {
		background: linear-gradient(
			to left,
			hsl(175, 100%, 3%) 0%,
			hsl(175, 100%, 6%) 8%,
			hsl(175, 100%, 6%) 92%,
			hsl(175, 100%, 3%) 100%
		);
		transition: all 900ms 0.1s;
	}
	.pushable:hover .shadow {
		transform: translateY(4px);
		transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
	}
	.pushable:active .shadow {
		transform: translateY(1px);
		transition: transform 34ms;
	}
	.pushable:focus:not(:focus-visible) {
		outline: none;
	}
`;
const Button = (props) => (
	<div css={buttonStyles}>
		<button className="pushable">
			<span className="shadow"></span>
			<span className="edge"></span>
			<span className="front">{props.text}</span>
		</button>
	</div>
);

export const ButtonLink = (props) => (
	<Link to={props.link}>
		<div css={buttonStyles} style={{ display: "inline-block" }}>
			<div className="pushable">
				<span className="shadow"></span>
				<span className="edge"></span>
				<span className="front">{props.text}</span>
			</div>
		</div>
	</Link>
);
export default Button;
