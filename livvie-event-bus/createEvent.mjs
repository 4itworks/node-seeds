import { ILivvieEvent } from './ILivvieEvent.mjs';

/**
 * @template {ILivvieEvent} T
 * @param {new() => T} type
 * @returns {{TOKEN: import('../test').TOKEN<T>}}
 */
export function createEvent(type) {
    return {
        // @ts-ignore
        TOKEN: Symbol(type.name),
    };
}
