import Typography from "typography";
import CodePlugin from "typography-plugin-code";

let theme = {
	baseFontSize: `18px`,
	headerFontFamily: [`Cooper Hewitt`, `sans-serif`],
	bodyFontFamily: [`Cooper Hewitt`, `sans-serif`],
	plugins: [new CodePlugin()],
	baseLineHeight: 1.45,
	blockMarginBottom: 0.85,
	overrideThemeStyles: ({ rhythm }) => ({
		a: {
			color: `#3A69A8`,
		},
		blockquote: {
			marginLeft: 0,
			paddingLeft: rhythm(5 / 8),
			borderLeft: `${rhythm(3 / 8)} solid #CDE7B0`,
		},
		"blockquote > *": {
			fontStyle: `italic`,
		},
		"blockquote > h1, blockquote > h2, blockquote > h3, blockquote > h4": {
			marginTop: 0,
		},
		"li > p": {
			marginBottom: rhythm(1 / 2),
		},
		"p code": {
			fontSize: "75%",
		},
		"tt,code": {
			fontSize: "85%",
		},
		pre: {
			lineHeight: 1.22,
		},
	}),
};

const typography = new Typography(theme);
export const { scale, rhythm, options } = typography;
export default typography;
