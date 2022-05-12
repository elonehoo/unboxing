# Getting Started

## Overview

Unboxing is a TypeScript tool library built on Vite, which is a Fast, small and purely functional utility library for TypeScript.

## Adding Unboxing to your Project

```bash
// with npm
$ npm install -D @unboxing/unboxing

// or with yarn
$ yarn add -D @unboxing/unboxing

// or with pnpm
$ pnpm add -D @unboxing/unboxing
```

## Usage
```typescript
import {pathOr,compose,toLower,map} from '@unboxing/unboxing'

const toLowerName = compose(
  toLower,
  pathOr(['name'], '')
)
const result = map(toLowerName)([{name: 'testA'}, {name: 'testb'}])
```
