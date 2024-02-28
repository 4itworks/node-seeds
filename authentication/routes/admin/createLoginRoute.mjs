import express from 'express';
import { LOGIN_BY_EMAIL_PASSWORD_TOKEN } from '../../handlers/login-by-email-password/interfaces/LOGIN_BY_EMAIL_PASSWORD_TOKEN.mjs';
import { LoginByEmailPasswordHandler } from '../../handlers/login-by-email-password/implementantions/LoginByEmailPasswordHandler.mjs';
import { EventError } from '../../../livvie-event-bus/EventError.mjs';
import { ENTITY_NOT_FOUND, UserNotFoundByEmailPassword } from '../../data-acesses/find-by-email-password/interfaces/UserNotFoundFindByEmailError.mjs';

export function createLoginRoute(eventManager) {
    const loginRouter = express.Router();
    const loginByEmailPasswordHandler = new LoginByEmailPasswordHandler();
    loginByEmailPasswordHandler.setEventManager(eventManager);
    eventManager.register(LOGIN_BY_EMAIL_PASSWORD_TOKEN, loginByEmailPasswordHandler);

    loginRouter.post('/emailPassword', async (req, res) => {
        if (!req.body) {
            return res.status(400).json({ error: 'No body' });
        }
        try {
            const response = await eventManager.retrieve(LOGIN_BY_EMAIL_PASSWORD_TOKEN).run(req.body);
            return res.json(response);}
        catch(err) {
            // Test if err extends from EventError
            if (err instanceof EventError) {
                if(err.customType === ENTITY_NOT_FOUND) {
                    return res.status(422).json({ error: err.message });
                }
                return res.status(500).json({ error: err.message });
            }

            res.status(500).json({ error: err.message });
        }
    });
    return loginRouter;
}
