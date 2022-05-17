module.exports = function override(config, env) {
    const fallback = config.resolve.fallback || {};
    Object.assign(fallback, {
        buffer: require.resolve('buffer'),
        stream: require.resolve('stream-browserify'),
    });
    config.resolve.fallback = fallback;

    config.experiments = {
        asyncWebAssembly: true,
    };
    return config;
}