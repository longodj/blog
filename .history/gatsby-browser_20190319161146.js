'use strict';

import React from 'react';
import AppProvider from 'src/store/provider';
import wrapPageElementWithTransition from 'utils/wrap-page-element';

require('./src/assets/scss/init.scss');

// React Context in Browser
// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => {
  return <AppProvider>{element}</AppProvider>;
};

// Page Transitions
export const wrapPageElement = wrapPageElementWithTransition;

export const onClientEntry = () => {};
