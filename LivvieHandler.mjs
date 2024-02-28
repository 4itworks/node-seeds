import { EventManager } from "./livvie-event-bus/EventManager.mjs";

export class LivvieHandler {
    /**@type {EventManager} */
    #eventManager;
    constructor() {
    }
    /**
     *
     * @param {EventManager} eventManager
     */
    setEventManager(eventManager) {
        this.#eventManager = eventManager;
    }
    get eventManager() {
        if (!this.#eventManager) {
            throw new Error('Event manager not set');
        }
        return this.#eventManager;
    }
}
