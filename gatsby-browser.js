import "./src/styles/global.css"
// gatsby-browser.js
import React from 'react';
import Layout from "./src/pages/Layout";

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
