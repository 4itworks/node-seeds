import { IGenerateJWTEvent } from "../Interfaces/IGenerateJWTEvent.mjs";
import { IGenerateJWTRequest } from "../Interfaces/IGenerateJWTRequest.mjs";
import { IGenerateJWTResponse } from "../Interfaces/IGenerateJWTResponse.mjs";

/**
 * @implements {IGenerateJWTEvent}
 */
export class GenerateJWTEvent {
    /**
     * @param {IGenerateJWTRequest} arg
     * @returns {Promise<IGenerateJWTResponse>}
    **/
    async run(arg) {
        return {
            token: '123'
        };
    }
}
