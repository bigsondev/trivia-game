# trivia-game

## Structure

- /public -> static assets, index.html only
- /src/api -> Communication with Open Trivia DB
- /src/components -> Reusable components, mostly based on MUI
- /src/modules -> Feature like architecture, home, and quiz
- /src/store -> Redux state management

## Installation

Code challenge is based on yarn as a package manager.
To install node_modules, simply run the below command.

```
yarn
```

## Development

Webpack-dev-server is used for HMR and local development, to start dev server on port **8080**, run the below command.

```
yarn start
```

## Building

Webpack with production configuration is used for creating an output bundle, it'll be created under **dist** directory. To create bundle, run the following command.

```
yarn build
```

## Testing

Jest is used to test business logic (sagas, reducers, transformation/utils functions). To run tests locally, do the below commands.

```
yarn test
```
