import React from 'react';
import { renderToString } from 'react-dom/server';
import AppProvider from 'store/provider';
import wrapPageElementWithTransition from 'utils/wrap-page-element';

export const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
}) => {
  // React Context in SSR/build
  const ConnectedBody = () => <AppProvider>{bodyComponent}</AppProvider>;
  replaceBodyHTMLString(renderToString(<ConnectedBody />));

  // Add styled-components in SSR/build
  const bodyHTML = renderToString(<ConnectedBody />);
};

// Page Transitions
export const wrapPageElement = wrapPageElementWithTransition;