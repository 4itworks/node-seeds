import { EventError } from "../../../../livvie-event-bus/EventError.mjs";

export const ENTITY_NOT_FOUND = Symbol("NotFoundError");
export class UserNotFoundByEmailPassword extends EventError {
    name = "FindByEmailError";
    /** @type {Symbol} */
    customType = ENTITY_NOT_FOUND
    /** @type {string} */
    email;
    /**
     * 
    * @param {Error | null} originalError
     * @param {Object} param 
     * @param {string} param.email
     */
    constructor(originalError, {email}) {
        super(originalError, `User with email ${email} not found`);

        this.email = email;
    }
}