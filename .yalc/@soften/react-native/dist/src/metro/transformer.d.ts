declare const transformer: {
    transform: ({ src, filename, options }: {
        src: any;
        filename: any;
        options: any;
    }) => Promise<any>;
};
export default transformer;
