import { curryN } from "@unboxing/function"
import {Func} from '@unboxing/core'

interface RejectWith {
  <T1, T2, R>(func: (a: T1, b: T2, ...args:any[]) => R, a: T1, b: T2, ...args:any[]): Promise<R>;
  <T, R>(func: (a: T) => R, a: T): Promise<R>;
  <T1, T2, R>(func: (a: T1, b: T2, ...payload:any[]) => R): (a: T1, b: T2, ...payload:any[]) => Promise<R>;
  <T, R>(func: (a: T) => R): (a: T) => Promise<R>;
  <R>(func: Func<R>): (...payload:any[]) => Promise<R>;
}


export const rejectWith = curryN(2, <R>(func: Func<R>, ...payload:any[]) => {
  return Promise.reject(func(payload));
}) as RejectWith
