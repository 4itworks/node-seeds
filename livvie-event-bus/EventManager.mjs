import { ILivvieEvent } from './ILivvieEvent.mjs';

export class EventManager {
    #events = new Map();
    /**
     * @template {ILivvieEvent} T
     * @template {T} U
     * @param {import('../test').TOKEN<T>} token
     * @param {U} value
     */
    register(token, value) {
        this.#events.set(token, value);
    }
    /**
     * @template {ILivvieEvent} T
     * @template {T} U
     * @param {import('../test').TOKEN<T>} token
     * @returns {U}
     */
    retrieve(token) {
        const event = this.#events.get(token);
    
        if (!event) {
            throw new Error(`Event: ${token.toString()} should be registered before being retrieved.`);
        }
        return event;
    }
}
