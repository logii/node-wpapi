'use strict';

const config = require( './webpack.config' );

// Re-use normal Webpack build config, just adding minification
module.exports = {
	...config,

	mode: 'production',

	devtool: 'hidden-source-map',

	output: {
		...config.output,
		filename: 'wpapi.min.js',
	},

	optimization: {
		noEmitOnErrors: true,
	},
};
