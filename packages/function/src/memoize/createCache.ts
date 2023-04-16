// Creates a cache instance base on passed object. Return instance has 3 methods: get, set, has
export function createCache(obj = Object.create(null)) {
  return {
    get(key: any) {
      return obj[key]
    },
    set(key: any, value: any) {
      obj[key] = value
      return this
    },
    has(key: any) {
      return key in obj
    },
  }
}
