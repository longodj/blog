import React from 'react';
import { renderToString } from 'react-dom/server';
import AppProvider from 'store/provider';
import wrapPageElementWithTransition from 'utils/wrap-page-element';

export const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  // React Context in SSR/build
  const ConnectedBody = () => <AppProvider>{bodyComponent}</AppProvider>;
  replaceBodyHTMLString(renderToString(<ConnectedBody />));

  // Add styled-components in SSR/build
  const bodyHTML = renderToString(sheet.collectStyles(<ConnectedBody />));
  const styleElement = sheet.getStyleElement();
};

// Page Transitions
export const wrapPageElement = wrapPageElementWithTransition;