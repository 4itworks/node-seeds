import { ILivvieEvent } from "../../../../livvie-event-bus/ILivvieEvent.mjs";
import { IFindByEmailPasswordRequest } from "./IFindByEmailPasswordRequest.mjs";
import { IFindByEmailPasswordResponse } from "./IFindByEmailPasswordResponse.mjs";
import { UserNotFoundByEmailPassword } from "./UserNotFoundFindByEmailError.mjs";

/** @interface */
/** @implements {ILivvieEvent} */
export class IFindByEmailPasswordEvent {
    /**
     * 
     * @param {IFindByEmailPasswordRequest} arg 
     * @returns {Promise<IFindByEmailPasswordResponse>}
     * @throws {UserNotFoundByEmailPassword}
     */
    async run(arg) {
        throw new Error('run() must be implemented by subclass');
    }
}