# React Native Require Development Template

> Minimal React Native template for bootstrapping with TypeScript.

## Features
- Minimal dependencies
- First-class support for TypeScript
- Fully configured with ESLint and Prettier
- Optional [CLI tool]() for machine configuration

## Usage
  
  ```Bash
  npx react-native init MyApp --template react-native-template-requiredev
  ```

  Read our [recommended project layout]() for best practices on structuring your project.

## Per Project Customization
Once a project layout has been determined, `babel.config.js` should be modified for common aliases. It is most common that all folders uner `src` get their own alias.

  ```JS
  plugins: [
    ...,
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          assets: './src/assets',
          api: './src/api',
          screens: './src/screens',
          shared: './src/shared',
          utils: './src/utils',
        },
      },
    ],
  ],
  ```

## CLI Tool [:construction: planned]
Always keep development dependencies (Android Studio, Xcode, Node, Ruby, etc) in sync using the included `doctor` tool. The `.doctor` file specifies version compliance.

The CLI Tool is installed by default. You can uninstall using:
```Bash
yarn doctor --uninstall
```

It can be reinstalled anytime by using:
```Bash
yarn add @require-dev/doctor
yarn doctor init
```

#### Usage
```Bash
yarn doctor
```

## License
This project is available under the MIT license. See the LICENSE file for more info.