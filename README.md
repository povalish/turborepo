# Hello! It's Turbo-cross-platform-javascript-repo!

This setup project for cross platform development.

## How to run this turbosh*t

### First of all you need to setup development environment for JavaScript/TypeScript projects.
1. Install [NodeJS] (https://nodejs.org/en/)
2. Install [Yarn] (https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)


### Prepare yourself! Now you need to setup ReactNative env.
Go to [link] (https://reactnative.dev/docs/environment-setup) 
and select "React Native CLI Quickstart" and follow instractions

### It's time to install dependencies
```bash
$ yarn install
$ cd apps/mobile/ios && pod install
$ cd apps/storybook-mobile/ios && pod install
```

### If everything is OK, let's start development!
```bash 
$ yarn dev --filter mobile # run ReactNative app
$ yarn dev --filter desktop # run Electorn app
$ yarn dev --filter web # run NextJS app
$ yarn dev --filter storybook-web # run storybook for web/electron apps
$ yarn dev --filter storybook-mobile # run storybook for ReactNative app
```

---- 

### Major technologies used

- React
- NextJS 13 (for web apps)
- Electron (for desktop apps)
- ReactNative (for mobile apps)
