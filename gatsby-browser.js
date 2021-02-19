import React from "react";
import Layout from "./src/components/Layout";
import "./src/scss/mixins.scss";
import "./src/scss/variables/color.scss";
import "./src/scss/variables/color.scss";

export function wrapPageElement({ element, props }) {
	return <Layout {...props}>{element}</Layout>;
}
