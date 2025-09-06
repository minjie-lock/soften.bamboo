import BabelTransformer from '@react-native/metro-babel-transformer';
const imported = new Set();

const components = {
  'safe-area-view': 'SafeAreaView',
  'activity-indicator': 'ActivityIndicator',
  'button': 'Button',
  'flat-list': 'FlatList',
  'image': 'Image',
  'image-background': 'ImageBackground',
  'keyboard-avoiding': 'keyboard-avoiding',
  'modal': 'Modal',
  'pressable': 'Pressable',
  'refresh': 'RefreshControl',
  'scroll-view': 'ScrollView',
  'section': 'SectionList',
  'status-bar': 'StatusBar',
  'text': 'Text',
  'input': 'TextInput',
  'touchable-highlight': 'TouchableHighlight',
  'touchable-opacity': 'TouchableOpacity',
  'touchable-without-feedback': 'TouchableWithoutFeedback',
  'view': 'View',
  'virtualized-list': 'VirtualizedList',
  'drawer-layout': 'DrawerLayoutAndroid',
  'touchable-native-feedback': 'TouchableNativeFeedback',
  'input-accessory': 'InputAccessoryView',
};

const createEffect = ({ types }) => {
  return {
    visitor: {
      /**
       * 处理 JSXOpeningElement (例如 <view>)
       */
      JSXOpeningElement(path) {
        if (types.isJSXIdentifier(path.node.name)) {
          const node = path.node.name;
          const key = node.name;
          const name = components?.[key];
          if (name) {
            node.name = name;
            if (!imported?.has(name)) {
              imported?.add(name);
            }
          }
        }
      },

      /**
       * 处理 JSXClosingElement (例如 </view>)
       */
      JSXClosingElement(path) {
        if (types.isJSXIdentifier(path.node.name)) {
          const node = path.node.name;
          const key = node.name as keyof typeof components;
          if (components?.[key]) {
            node.name = components?.[key];
          }
        }
      },
      Program: {
        exit: (path) => {
          const importStatements = [...imported].map((component) =>
            types.importDeclaration(
              [
                types.importSpecifier(types.identifier(component),
                  types.identifier(component))
              ],
              types.stringLiteral('react-native')
            )
          );
          path.node.body.unshift(...importStatements);
        }
      }
    },
  };
};

const transformer = {
  transform: async ({ src, filename, options }) => {
    const should = !filename.includes('node_modules') &&
      /\.(jsx|tsx)$/.test(filename);

    const plugins = options.plugins || [];

    if (should) {
      const result = await BabelTransformer.transform({
        src,
        filename,
        plugins: [
          ...plugins,
          createEffect,
        ],
        options: {
          ...options,
          ast: true,
          babelrc: false,
          configFile: false,
          sourceMaps: options.sourceMaps,
          sourceFileName: filename,
        },
      });
      return result;
    }
    return BabelTransformer.transform({ src, filename, options });
  },
};

export default transformer;