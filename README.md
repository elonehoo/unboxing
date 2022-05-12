<div align="center">
  <img src="./public/logo.svg" width="100px" height="100px" />
</div>

<h1 align="center">unboxing</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/@unboxing/unboxing">
    <img src="https://img.shields.io/npm/v/@unboxing/unboxing?color=81A2BE&label=" />
  </a>
</p>

> Fast, small and purely functional utility library for TypeScript.

## Install

```bash
# npm
npm i @unboxing/unboxing
# yarn
yarn add @unboxing/unboxing
# pnpm
pnpm i @unboxing/unboxing
```

## Features
- Fast
- Small
- Fully Tested
- Purely functional
- Modern codebase

## Structure of the library

- [@unboxing/object](https://www.npmjs.com/package/@unboxing/object) – for objects
- [@unboxing/string](https://www.npmjs.com/package/@unboxing/string) – for strings
- [@unboxing/promise](https://www.npmjs.com/package/@unboxing/promise) – for promises
- [@unboxing/array](https://www.npmjs.com/package/@unboxing/array) – for arrays or array-like objects
- [@unboxing/function](https://www.npmjs.com/package/@unboxing/function) – for functions – composition, currying and so on, also a set of simple functions (noop, T, F)
- [@unboxing/is](https://www.npmjs.com/package/@unboxing/is) – set of type checking methods
- [@unboxing/unboxing](https://www.npmjs.com/package/@unboxing/unboxing) – root contains utilities which don't satisfy any of the above categories or are universal

## Usage

```typescript
import {pathOr,compose,toLower,map} from '@unboxing/unboxing'

const toLowerName = compose(
  toLower,
  pathOr(['name'], '')
)
const result = map(toLowerName)([{name: 'testA'}, {name: 'testb'}])
```
