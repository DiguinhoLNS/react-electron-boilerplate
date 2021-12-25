module.exports = {
    resolve: {
        extensions: ['.ts', '.js']
    },
    entry: './src/electron/main.ts',
    module: {
        rules: require('./rules.webpack'),
    }
}