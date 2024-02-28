import { ILivvieEventRequest } from "./ILivvieEventRequest.mjs";
import { ILivvieEventResponse } from "./ILivvieEventResponse.mjs";

/**@interface */
export class ILivvieEvent {
    /**
     * Run the action.
     * @abstract
     * @param {ILivvieEventRequest} args - The argument for the action.
     * @returns {Promise<void | ILivvieEventResponse>}
     */
    async run(args) {
        throw new Error('run() must be implemented by subclass');
    }
}
