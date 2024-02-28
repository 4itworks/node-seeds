import { IFindAuthorByIdEvent } from "../interfaces/IFindAuthorByIdEvent.mjs";
import { IFindAuthorByIdRequest } from "../interfaces/IFindAuthorByIdRequest.mjs";
import { IFindAuthorByIdResponse } from "../interfaces/IFindAuthorByIdResponse.mjs";
import {AuthorModel} from '../../../ugly-old-bizarre-author-module/UglyMongooseModel.mjs'
/**
 * @implements {IFindAuthorByIdEvent}
 */
export class FindAuthorByIdMongo {
    /**
     *
     * @param {IFindAuthorByIdRequest} args
     * @returns {Promise<IFindAuthorByIdResponse>}
     */
    async run({id}) {
        const author = await AuthorModel.findById(id);
        return {
            id: author._id.toString(),
            firstName: author.first_name,
            lastName: author.family_name,
            birthDate: author.date_of_birth,
            deathDate: author.date_of_birth
        }
    }
}
