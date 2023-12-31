# Tuto_TylerPotts_VueJsWeatherApp

This project is a weather app, and will use the framework vue js. It will be based on a youtube tutorial (https://www.youtube.com/watch?v=JLc-hWsPTUY), that's not mine.
To get the date of today I use the Moment JS library.

## Install Moment JS library

```sh
yarn add moment
```
More information here: https://momentjs.com/

## API used

In this projet I use 2 free tools: Current Weather Data(to get the weather information) and Open-Meteo Geocoding API(to get the geographical information of the city typed).
You can find them here:
- Current Weather Data => httphttps://openweathermap.org/current
- Open-Meteo Geocoding API => https://open-meteo.com/en/docs/geocoding-api

## Unsing Current Weather Data

To use this tool, you need to sign in or register on https://home.openweathermap.org.
When it's done you have to generate a key and put your key here (after the equal)
```sh
    const api_key = "54eba87b601fa33f3fc31c339939a1b8"
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
yarn
```

### Compile and Hot-Reload for Development

```sh
yarn dev
```

### Type-Check, Compile and Minify for Production

```sh
yarn build
```

### Lint with [ESLint](https://eslint.org/)

```sh
yarn lint
```
