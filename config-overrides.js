const path = require('path');
const webpack = require('webpack');

module.exports = function override(config) {
    config.module.rules = config.module.rules.map((rule) => {
        if (rule.oneOf instanceof Array) {
            return {
                ...rule,
                oneOf: [{test: /\.wasm$/, type: 'asset/inline'}, ...rule.oneOf],
            };
        }
        return rule;
    });

    const fallback = config.resolve.fallback || {};
    Object.assign(fallback, {
        buffer: require.resolve('buffer'),
        stream: require.resolve('stream-browserify'),
    });
    config.resolve.fallback = fallback;

    config.resolve.alias = {
        './wasm_loader.js': path.resolve(__dirname, 'src/ecclib.ts'),
        './wasm_loader.browser.js': path.resolve(__dirname, 'src/ecclib.ts'),
        'tiny-secp256k1-lib': path.resolve(__dirname, 'node_modules/tiny-secp256k1/lib'),
    };

    config.resolve.extensions = ['.tsx', '.ts', '.js', '.wasm'];

    config.plugins = (config.plugins || []).concat([
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
        }),
    ]);

    config.experiments = {
        topLevelAwait: true,
    };
    return config;
};
