import { curryN } from "@unboxing/function"
import {Func} from '@unboxing/core'

interface RejectWith {
  <T1, T2, R>(func: (a: T1, b: T2, ...args) => R, a: T1, b: T2, ...args): Promise<R>;
  <T, R>(func: (a: T) => R, a: T): Promise<R>;
  <T1, T2, R>(func: (a: T1, b: T2, ...payload) => R): (a: T1, b: T2, ...payload) => Promise<R>;
  <T, R>(func: (a: T) => R): (a: T) => Promise<R>;
  <R>(func: Func<R>): (...payload) => Promise<R>;
}


export const rejectWith = curryN(2, <R>(func: Func<R>, ...payload) => {
  return Promise.reject(func(...payload));
}) as RejectWith
