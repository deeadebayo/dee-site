export default {
  multipass: false, // boolean
  datauri: 'base64', // 'base64'|'enc'|'unenc'
  js2svg: {
    indent: 4, // number
    pretty: false, // boolean
  },
  plugins: [
    'preset-default', // built-in plugins enabled by default
    'prefixIds', // enable built-in plugins by name
    'collapseGroups',
    'inlineStyles',

    // enable built-in plugins with an object to configure plugins
    {
      name: 'preset-default',
      params: {
        overrides: {
          cleanupIds: false,
        },
      },
    },
    {
      name: 'prefixIds',
      //   params: {
      //     prefix: 'uwu',
      //   },
    },
    {
      name: 'inlineStyles',
      params: {
        onlyMatchedOnce: true,
        removeMatchedSelectors: true,
      },
    },
    {
      name: 'collapseGroups',
      active: false,
    },
  ],
}
