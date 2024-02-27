import { UserModel } from "../../../commons/mongoose/models/UserModel.mjs";
import { IFindByEmailPasswordEvent } from "../../interfaces/IFindByEmailPassword.mjs";
import { IFindByEmailPasswordRequest } from "../../interfaces/IFindByEmailPasswordRequest.mjs";
import { IFindByEmailPasswordResponse } from "../../interfaces/IFindByEmailPasswordResponse.mjs";
import { UserNotFoundByEmailPassword } from "../../interfaces/UserNotFoundFindByEmailError.mjs";
/** 
 * @class
 * @implements {IFindByEmailPasswordEvent}
 */
export class FindByEmailPasswordMongo {
    /**
     * 
     * @param {IFindByEmailPasswordRequest} arg 
     * @returns {Promise<IFindByEmailPasswordResponse>}
     */
    async run({email, password}) {
        const user = await UserModel.findOne({email, password});
        if(!user) throw new UserNotFoundByEmailPassword(null, {email})
        return {
            id: user._id.toString(),
            name: user.name
        }
    }
}
