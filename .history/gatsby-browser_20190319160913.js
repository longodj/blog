'use strict';

import React from 'react';
import AppProvider from 'store/provider';
import wrapPageElementWithTransition from 'helpers/wrapPageElement';

require('./src/assets/scss/init.scss');

// React Context in Browser
// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => {
  return <AppProvider>{element}</AppProvider>;
};

// Page Transitions
export const wrapPageElement = wrapPageElementWithTransition;

export const onClientEntry = () => {};
