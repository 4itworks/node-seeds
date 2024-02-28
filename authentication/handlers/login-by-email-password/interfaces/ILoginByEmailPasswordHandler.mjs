import { ILivvieEvent } from "../../../../livvie-event-bus/ILivvieEvent.mjs";
import { ILoginByEmailPasswordRequest } from "./ILoginByEmailPasswordRequest.mjs";
import { ILoginByEmailPasswordResponse } from "./ILoginByEmailPasswordResponse.mjs";

/** @interface */
/** @implements {ILivvieEvent} */
export class ILoginByEmailPasswordHandler {
    /**
     *
     * @param {ILoginByEmailPasswordRequest} request
     * @returns {Promise<ILoginByEmailPasswordResponse>}
     */
    async run(request) {
        throw new Error('Not implemented');
    }
}
