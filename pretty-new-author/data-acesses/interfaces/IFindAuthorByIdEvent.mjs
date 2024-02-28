import { ILivvieEvent } from "../../../livvie-event-bus/ILivvieEvent.mjs";
import { IFindAuthorByIdRequest } from "./IFindAuthorByIdRequest.mjs";
import { IFindAuthorByIdResponse } from "./IFindAuthorByIdResponse.mjs";

/** @implements {ILivvieEvent} */
export class IFindAuthorByIdEvent {
    /**
     *
     * @param {IFindAuthorByIdRequest} args
     * @returns {Promise<IFindAuthorByIdResponse>}
     */
   async run(args) {
        throw new Error('Not implemented');
   }
}