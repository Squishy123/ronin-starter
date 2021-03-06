module.exports = {
  presets: [
    [
      `@babel/preset-env`,
      {
        targets: {
          esmodules: true
        }
      }
    ]
  ],
  plugins: [
    `@babel/plugin-proposal-object-rest-spread`,
    [`@babel/plugin-transform-runtime`, { regenerator: true }]
  ]
};
