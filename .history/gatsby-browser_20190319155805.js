'use strict';

import wrapWithProvider from "./wrap-with-provider"
export const wrapRootElement = wrapWithProvider

require('./src/assets/scss/init.scss');

exports.onClientEntry = () => {};
