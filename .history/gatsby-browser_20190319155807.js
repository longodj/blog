'use strict';

import wrapWithProvider from "./gatsby/wrap-with-provider"
export const wrapRootElement = wrapWithProvider

require('./src/assets/scss/init.scss');

exports.onClientEntry = () => {};
