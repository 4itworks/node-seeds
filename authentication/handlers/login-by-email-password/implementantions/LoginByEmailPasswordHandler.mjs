import { LivvieHandler } from '../../../../LivvieHandler.mjs';
import { FIND_AUTHOR_BY_ID_TOKEN } from '../../../../pretty-new-author/data-acesses/interfaces/FIND_AUTHOR_BY_ID_TOKEN.mjs';
import { FIND_BY_EMAIL_PASSWORD_TOKEN } from '../../../data-acesses/find-by-email-password/interfaces/FIND_BY_EMAIL_PASSWORD_TOKEN.mjs';
import { GENERATE_JWT_TOKEN } from '../../../use-cases/generate-JWT/Interfaces/GENERATE_JWT_TOKEN.mjs';
import { ILoginByEmailPasswordHandler } from '../interfaces/ILoginByEmailPasswordHandler.mjs';
import { ILoginByEmailPasswordRequest } from '../interfaces/ILoginByEmailPasswordRequest.mjs';
import { ILoginByEmailPasswordResponse } from '../interfaces/ILoginByEmailPasswordResponse.mjs';


/** @implements {ILoginByEmailPasswordHandler} */
export class LoginByEmailPasswordHandler extends LivvieHandler {
    /**
     *
     * @param {ILoginByEmailPasswordRequest} arg
     * @returns {Promise<ILoginByEmailPasswordResponse>}
     * @throws 
     */
    async run({ email, password }) {
        const {name, id} = await this.eventManager.retrieve(FIND_BY_EMAIL_PASSWORD_TOKEN).run({ email: email, password: password });
        const { token } = await this.eventManager.retrieve(GENERATE_JWT_TOKEN).run({ name, id });
       return { name, token };
    }
}