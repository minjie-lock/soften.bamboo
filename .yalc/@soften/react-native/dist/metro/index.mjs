function SoftenNativeMetro(configuration) {
    return configuration({
        transformer: {
            babelTransformerPath: require.resolve('../../src/metro/transformer.ts')
        }
    });
}
export { SoftenNativeMetro as default };
