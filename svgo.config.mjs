export default {
  multipass: false, // boolean
  datauri: 'base64', // 'base64'|'enc'|'unenc'
  js2svg: {
    indent: 4, // number
    pretty: false, // boolean
  },
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          prefixIds: false,
        },
      },
    },
  ],
}
