// Establish the root object, `window` (`self`) in the browser, `global`
// on the server, or `this` in some virtual machines. We use `self`
// instead of `window` for `WebWorker` support.
export let root= (typeof self == 'object' && self.self === self && self) ||
    (typeof global == 'object' && global.global === global && global) ||
    Function('return this')() || {}

// Save bytes in the minified (but not gzipped) version:
export let ArrayProto:any[] = Array.prototype
export let ObjProto:Object = Object.prototype

// Create quick reference variables for speed access to core prototypes.
export let push = ArrayProto.push
export let slice = ArrayProto.slice
export let toString = ObjProto.toString
export let hasOwnProperty = ObjProto.hasOwnProperty

// Modern feature detection.
export let supportsArrayBuffer:boolean = typeof ArrayBuffer !== 'undefined'
export let supportsDataView:boolean = typeof DataView !== 'undefined'

// All **ECMAScript 5+** native function implementations that we hope to use
export let nativeIsArray = Array.isArray
export let nativeKeys = Object.keys
export let nativeCreate = Object.create
export let nativeIsView = supportsArrayBuffer && ArrayBuffer.isView

// Create references to these builtin functions because we override them.
export let _isNaN = isNaN
export let _isFinite = isFinite
