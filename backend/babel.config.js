module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current'
          }
        }
      ],
      '@babel/preset-typescript'
    ],
    plugins: [
      ["@babel/plugin-proposal-decorators", {
        "legacy": true
      }],
      ['module-resolver', {
        alias: {
          '@User': './src/UseCases/User',
          '@UserStats': './src/UseCases/UserStats',
          '@Question': './src/UseCases/Question',
          '@Answer': './src/UseCases/Answer',
          '@Match': './src/UseCases/Match',
          '@Bases': './src/Bases',
          '@Src': './src'
        }
      }],
      ["@babel/plugin-proposal-class-properties", {
        loose: true
      }],
      ["@babel/plugin-proposal-private-property-in-object", { "loose": true }]
    ],
    ignore: [
      '**/*.spec.ts'
    ]
  }