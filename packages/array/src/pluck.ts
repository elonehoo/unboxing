import { curryN } from "@unboxing/function";
import {prop} from '@unboxing/object'
import { map } from "./map";
import { Prop } from '@unboxing/core'

interface Pluck {
  <P extends Prop, T>(p: P, list: ArrayLike<Record<P, T>>): T[];
  <P extends Prop>(p: P): <T>(list: ArrayLike<Record<P, T>>) => T[];
}

/**
 *  Returns a new list by plucking the same named property off all objects in the list supplied.
 */
export const pluck = curryN(2, <P extends Prop, T>(key: string, arr: ArrayLike<Record<P, T>> = []) =>
    map(prop(key), arr)
) as Pluck
