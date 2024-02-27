export class EventError extends Error {
    /** @type {Symbol} */
    customType;
    /**
     * 
     * @param {Error | null} originalError
     * @param {string} message
     */
    constructor(originalError, message) {
        super(message)
        //Move code below to a new class
        this.name = this.constructor.name; // Set the error name to the class name
        if (originalError && originalError.stack) {
            this.originalStack = originalError.stack;
        }

        this.originalMessage = originalError?.message;

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}