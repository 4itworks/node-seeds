/** @interface */

import { ILivvieEvent } from "../../../../livvie-event-bus/ILivvieEvent.mjs";
import { IGenerateJWTRequest } from "./IGenerateJWTRequest.mjs";
import { IGenerateJWTResponse } from "./IGenerateJWTResponse.mjs";

/**@interface */
/** @implements {ILivvieEvent} */
export class IGenerateJWTEvent {
    /**
     * Do something action.
     * @abstract
     * @param {IGenerateJWTRequest} arg - The argument for the action.
     * @returns {Promise<IGenerateJWTResponse>}
     */
    async run(arg) {
        throw new Error('doSomething() must be implemented by subclass');
    }
}